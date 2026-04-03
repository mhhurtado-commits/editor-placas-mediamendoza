// ── WORKER MEDIA MENDOZA ──
// Agregar al Worker existente el endpoint ?ai=1

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if(request.method === 'OPTIONS'){
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    };

    // ── Endpoint AI: proxy para Anthropic ──
    if(url.searchParams.get('ai') === '1' && request.method === 'POST'){
      try{
        const body = await request.json();
        const ANTHROPIC_KEY = env.ANTHROPIC_API_KEY;
        
        if(!ANTHROPIC_KEY){
          return new Response(JSON.stringify({error:'API key no configurada'}), {status:500, headers:corsHeaders});
        }

        const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': ANTHROPIC_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1000,
            system: body.system,
            messages: [{ role: 'user', content: body.user }]
          })
        });

        const data = await aiRes.json();
        if(data.error) return new Response(JSON.stringify({error: data.error.message}), {status:500, headers:corsHeaders});
        
        const text = data.content?.[0]?.text || '{}';
        return new Response(JSON.stringify({ text }), { headers: corsHeaders });
        
      } catch(e){
        return new Response(JSON.stringify({error: e.message}), {status:500, headers:corsHeaders});
      }
    }

    // ── Endpoint scraping original (mantener como está) ──
    // ... tu código de scraping existente va acá
  }
};
