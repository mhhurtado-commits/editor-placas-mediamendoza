const WORKER='https://twilight-river-3072.mhhurtado.workers.dev';
const LOGO_B64='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';

const FMTS={
  sq:      {w:1080,h:1080,lbl:'Instagram Cuadrado — 1080×1080'},
  story:   {w:1080,h:1920,lbl:'Historia — 1080×1920'},
  portrait:{w:1080,h:1350,lbl:'Portrait — 1080×1350'},
  fb:      {w:1200,h:628, lbl:'Facebook — 1200×628'},
  tw:      {w:1600,h:900, lbl:'Twitter/X — 1600×900'},
};

let ELS={
  title:{x:null,y:null,w:null,h:null,visible:true},
  cat:  {x:null,y:null,w:null,h:null,visible:true},
  logo: {x:null,y:null,w:null,h:null,visible:true},
};

let S={
  fmt:'sq', tpl:'normal',
  bgImg:null, iDark:0, iBlur:0, imgX:0, imgY:0,
  ovActive:false, ovCol:'#000000', ovOp:.5,
  title:'', tCol:'#ffffff', tBg:'#000000', tBgOp:.8,
  cat:'',   cCol:'#ffffff', cBg:'#000000', cBgOp:0,
  logoImg:null, lOp:1,
  active:null,
  action:null,
  dragOff:{x:0,y:0},
  resizeStart:null,
};

const canvas=document.getElementById('mc');
const ctx=canvas.getContext('2d');
let scale=1;
const HR=16;

// ── ACCORDION ──
function toggleAcc(head){
  const body=head.nextElementSibling;
  const isOpen=head.classList.contains('open');
  // cierra todos
  document.querySelectorAll('.acc-head.open').forEach(h=>{
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
  if(!isOpen){
    head.classList.add('open');
    body.classList.add('open');
  }
}

// ── CANVAS SIZE ──
function resizeCanvas(keepEls){
  const fmt=FMTS[S.fmt];
  const area=document.getElementById('canvasArea');
  const isMobile=window.innerWidth<=700;
  let avW,avH;
  if(isMobile){
    // Valores fijos del CSS — más confiable en iOS/Android que medir el DOM
    const TB=52, EB=58, TABS=48;
    const panH=(typeof _panelOpen!=='undefined'&&_panelOpen)?Math.round(window.innerHeight*.32):0;
    avW=window.innerWidth-16;
    avH=window.innerHeight-TB-EB-TABS-panH-16;
    if(avH<50)avH=window.innerHeight*.5; // fallback de seguridad
  } else {
    avW=area.clientWidth-32;
    avH=area.clientHeight-32;
  }
  const ratio=fmt.w/fmt.h;
  let dw,dh;
  if(ratio>=1){dw=Math.min(avW,fmt.w);dh=dw/ratio;if(dh>avH){dh=avH;dw=dh*ratio;}}
  else{dh=Math.min(avH,fmt.h);dw=dh*ratio;if(dw>avW){dw=avW;dh=dw/ratio;}}
  dw=Math.floor(dw);dh=Math.floor(dh);
  canvas.style.width=dw+'px';canvas.style.height=dh+'px';
  canvas.width=fmt.w;canvas.height=fmt.h;
  scale=fmt.w/dw;
  // Solo resetear posiciones si se pide explícitamente (cambio de formato/plantilla)
  if(!keepEls) resetEls();
}

function resetEls(){
  ELS={
    title:{x:null,y:null,w:null,h:null,visible:true},
    cat:  {x:null,y:null,w:null,h:null,visible:true},
    logo: {x:null,y:null,w:null,h:null,visible:true},
  };
}

// ── DEFAULT POSITIONS ──
function defaultPos(key){
  const fmt=FMTS[S.fmt];
  const W=fmt.w,H=fmt.h,pad=Math.round(W*.045);
  if(key==='title'){
    const w=Math.round(W*.82),h=Math.round(H*.19);
    const x=Math.round((W-w)/2);
    const y=S.tpl==='normal'?Math.round((H-h)/2):Math.round(H*.52);
    return{x,y,w,h};
  }
  if(key==='cat'){
    const w=Math.round(W*.36),h=Math.round(H*.072);
    if(S.tpl==='normal')return{x:Math.round((W-w)/2),y:pad,w,h};
    if(S.tpl==='banda'||S.tpl==='verde'){
      return{x:pad,y:H-Math.round(H*.32)+Math.round(H*.01),w,h};
    }
    return{x:pad,y:Math.round(H*.46),w,h};
  }
  if(key==='logo'){
    if(!S.logoImg)return{x:pad,y:pad,w:Math.round(W*.26),h:Math.round(W*.09)};
    const lw=Math.round(W*.26); // tamaño grande
    const lh=Math.round(lw*(S.logoImg.height/S.logoImg.width));
    if(S.tpl==='normal')return{x:Math.round((W-lw)/2),y:H-lh-pad,w:lw,h:lh};
    return{x:W-lw-pad,y:pad,w:lw,h:lh};
  }
}
function ensurePos(key){
  const el=ELS[key];
  if(el.x===null){const d=defaultPos(key);el.x=d.x;el.y=d.y;el.w=d.w;el.h=d.h;}
}

// ── TEMPLATES ──
const TPLS={
  normal(W,H){},
  moderna(W,H){const g=ctx.createLinearGradient(0,H*.38,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.82)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);},
  banda(W,H){const bh=Math.round(H*.32);ctx.fillStyle='rgba(0,0,0,.88)';ctx.fillRect(0,H-bh,W,bh);ctx.fillStyle='#a6ce39';ctx.fillRect(0,H-bh,W,Math.round(H*.018));},
  impacto(W,H){ctx.fillStyle='rgba(0,0,0,.52)';ctx.fillRect(0,0,W,H);ctx.fillStyle='#a6ce39';ctx.fillRect(0,0,Math.round(W*.025),H);},
  diagonal(W,H){const g=ctx.createLinearGradient(0,H,W*.7,0);g.addColorStop(0,'rgba(0,0,0,.88)');g.addColorStop(.6,'rgba(0,0,0,.3)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);},
  verde(W,H){const bh=Math.round(H*.32);ctx.fillStyle='#a6ce39';ctx.fillRect(0,H-bh,W,bh);ctx.fillStyle='rgba(255,255,255,.22)';ctx.fillRect(0,H-bh,W,2);},
};

// ── RENDER ──
function render(){
  const fmt=FMTS[S.fmt];const W=fmt.w,H=fmt.h;
  ctx.clearRect(0,0,W,H);
  // BG
  if(S.bgImg){
    ctx.save();
    if(S.iBlur>0)ctx.filter=`blur(${S.iBlur}px)`;
    const img=S.bgImg,ir=img.width/img.height,cr=W/H;
    let sx,sy,sw,sh;
    if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
    const extraX=img.width-sw,extraY=img.height-sh;
    sx=Math.max(0,Math.min(extraX,sx+extraX*S.imgX));
    sy=Math.max(0,Math.min(extraY,sy+extraY*S.imgY));
    const p=S.iBlur*4;
    ctx.drawImage(img,sx,sy,sw,sh,-p,-p,W+p*2,H+p*2);
    ctx.filter='none';ctx.restore();
    if(S.iDark>0){ctx.save();ctx.globalAlpha=S.iDark;ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.restore();}
  } else {
    ctx.fillStyle='#dedad3';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#aaa';ctx.font=`${Math.round(W*.022)}px Montserrat,sans-serif`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('Pegá un link o subí una imagen',W/2,H/2);
    ctx.textAlign='left';
  }
  // Template
  (TPLS[S.tpl]||TPLS.normal)(W,H);
  // Overlay
  if(document.getElementById('ovTog').checked&&S.ovOp>0){
    ctx.save();ctx.globalAlpha=S.ovOp;ctx.fillStyle=S.ovCol;ctx.fillRect(0,0,W,H);ctx.restore();
  }
  // Elementos
  ensurePos('logo'); drawLogo();
  ensurePos('cat');  drawCat();
  ensurePos('title');drawTitle();
  // UI
  if(S.active)drawActiveUI(W,H);
}

// ── HELPERS ──
function toTitleCase(str){
  return str.replace(/\w\S*/g,t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase());
}
function wrapText(ctx,text,maxW){
  if(!text||maxW<=0)return[];
  const words=text.split(' ').filter(w=>w.length>0);
  const lines=[];let cur='';
  for(const w of words){
    const test=cur?cur+' '+w:w;
    if(cur&&ctx.measureText(test).width>maxW){lines.push(cur);cur=w;}
    else cur=test;
  }
  if(cur.trim())lines.push(cur);
  return lines.filter(l=>l.trim().length>0);
}
function roundRect(ctx,x,y,w,h,r){
  r=Math.min(r,w/2,h/2);
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}
function hexRgb(hex){
  if(!hex||hex==='transparent')return{r:0,g:0,b:0};
  return{r:parseInt(hex.slice(1,3),16),g:parseInt(hex.slice(3,5),16),b:parseInt(hex.slice(5,7),16)};
}
function resetImgSliders(){
  ['imgX','imgY'].forEach(k=>{
    const el=document.getElementById('r-'+k);if(el)el.value=0;
    const rv=document.getElementById('rv-'+k);if(rv)rv.textContent='Centro';
  });
  S.imgX=0;S.imgY=0;
}

function drawPreviewOnCanvas(c,k){
  const tc=c.getContext('2d');const W=c.width,H=c.height;
  tc.clearRect(0,0,W,H);
  if(S.bgImg){
    const img=S.bgImg,ir=img.width/img.height,cr=W/H;
    let sx,sy,sw,sh;
    if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
    tc.drawImage(img,sx,sy,sw,sh,0,0,W,H);
  }else{tc.fillStyle='#d5d2cb';tc.fillRect(0,0,W,H);}
  const ov={
    normal:()=>{},
    moderna:()=>{const g=tc.createLinearGradient(0,H*.35,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.8)');tc.fillStyle=g;tc.fillRect(0,0,W,H);},
    banda:()=>{tc.fillStyle='rgba(0,0,0,.85)';tc.fillRect(0,H*.62,W,H*.38);tc.fillStyle='#a6ce39';tc.fillRect(0,H*.62,W,H*.03);},
    impacto:()=>{tc.fillStyle='rgba(0,0,0,.52)';tc.fillRect(0,0,W,H);tc.fillStyle='#a6ce39';tc.fillRect(0,0,W*.07,H);},
    diagonal:()=>{const g=tc.createLinearGradient(0,H,W*.7,0);g.addColorStop(0,'rgba(0,0,0,.88)');g.addColorStop(.6,'rgba(0,0,0,.28)');g.addColorStop(1,'rgba(0,0,0,0)');tc.fillStyle=g;tc.fillRect(0,0,W,H);},
    verde:()=>{tc.fillStyle='#a6ce39';tc.fillRect(0,H*.62,W,H*.38);},
  };
  if(ov[k])ov[k]();
  tc.fillStyle='#fff';tc.font=`bold ${Math.round(H*.1)}px BebasNeue,sans-serif`;
  tc.textBaseline='bottom';tc.textAlign='left';
  tc.fillText('TÍTULO',W*.07,H*.93);
}

// ── DRAW FUNCTIONS ──
function drawLogo(){
  const el=ELS.logo;
  if(!el.visible||!S.logoImg)return;
  ctx.save();ctx.globalAlpha=S.lOp;
  ctx.drawImage(S.logoImg,el.x,el.y,el.w,el.h);
  ctx.restore();
}

function drawCat(){
  const el=ELS.cat;
  if(!el.visible||!S.cat)return;
  ctx.save();
  const pad=Math.round(el.w*.04);
  const aw=el.w-pad*2;
  if(aw<=0){ctx.restore();return;}
  let sz=Math.max(8,Math.round(el.h*.58));
  let lines, lh, bh;
  for(let i=0;i<20;i++){
    ctx.font=`700 ${sz}px 'Economica',sans-serif`;
    lines=wrapText(ctx,toTitleCase(S.cat),aw);
    lh=sz*1.15;
    bh=lines.length*lh;
    if(bh<=el.h*0.95||sz<=8)break;
    sz=Math.max(8,Math.round(sz*0.88));
  }
  ctx.textBaseline='top';
  const sy=el.y+(el.h-bh)/2;
  const cx=el.x+el.w/2;
  const r=hexRgb(S.cBg);
  ctx.fillStyle=`rgba(${r.r},${r.g},${r.b},${S.cBgOp})`;
  roundRect(ctx,el.x,el.y,el.w,el.h,5);ctx.fill();
  ctx.fillStyle=S.cCol;ctx.textAlign='center';
  lines.forEach((l,i)=>ctx.fillText(l,cx,sy+i*lh));
  ctx.restore();
}

function drawTitle(){
  const el=ELS.title;
  if(!el.visible||!S.title)return;
  ctx.save();
  const pad=Math.round(el.w*.025);
  const aw=el.w-pad*2;
  if(aw<=0){ctx.restore();return;}
  let sz=Math.max(10,Math.round(el.h*.38));
  let lines, lh, bh;
  // Reducir sz hasta que el bloque de texto quepa dentro de el.h
  for(let i=0;i<20;i++){
    ctx.font=`400 ${sz}px 'BebasNeue',sans-serif`;
    lines=wrapText(ctx,S.title,aw);
    lh=sz*1.15;
    bh=lines.length*lh;
    if(bh<=el.h*0.95||sz<=10)break;
    sz=Math.max(10,Math.round(sz*0.88));
  }
  ctx.textBaseline='top';
  const sy=el.y+(el.h-bh)/2;
  const cx=el.x+el.w/2;
  if(S.tBg!=='transparent'&&S.tBgOp>0){
    const r=hexRgb(S.tBg);
    ctx.fillStyle=`rgba(${r.r},${r.g},${r.b},${S.tBgOp})`;
    roundRect(ctx,el.x,el.y,el.w,el.h,6);ctx.fill();
  }
  ctx.fillStyle=S.tCol;ctx.textAlign='center';
  lines.forEach((l,i)=>ctx.fillText(l,cx,sy+i*lh));
  ctx.restore();
}

// ── HANDLES & HIT ──
function getHandles(key){
  const el=ELS[key];if(!el||el.x===null)return[];
  const H=[
    {x:el.x,       y:el.y,        id:'nw',type:'corner'},
    {x:el.x+el.w,  y:el.y,        id:'ne',type:'corner'},
    {x:el.x,       y:el.y+el.h,   id:'sw',type:'corner'},
    {x:el.x+el.w,  y:el.y+el.h,   id:'se',type:'corner'},
  ];
  if(key!=='logo'){
    H.push({x:el.x,      y:el.y+el.h/2, id:'w', type:'side'});
    H.push({x:el.x+el.w, y:el.y+el.h/2, id:'e', type:'side'});
  }
  return H;
}

function drawActiveUI(W,H){
  const el=ELS[S.active];if(!el||el.x===null)return;
  const cx=el.x+el.w/2,cy=el.y+el.h/2;
  const lw=Math.max(2,Math.round(W*.0016));
  const hs=Math.round(HR*(W/1080));
  ctx.save();
  ctx.strokeStyle='rgba(166,206,57,.6)';ctx.lineWidth=lw;
  ctx.setLineDash([Math.round(W*.007),Math.round(W*.005)]);
  ctx.beginPath();ctx.moveTo(W/2,0);ctx.lineTo(W/2,H);ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,H/2);ctx.lineTo(W,H/2);ctx.stroke();
  ctx.setLineDash([]);ctx.restore();
  const cs=Math.round(W*.022);
  ctx.save();
  ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=Math.max(2,Math.round(W*.002));
  ctx.beginPath();ctx.moveTo(cx-cs,cy);ctx.lineTo(cx+cs,cy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx,cy-cs);ctx.lineTo(cx,cy+cs);ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(cx,cy,Math.round(W*.004),0,Math.PI*2);ctx.fill();
  ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(166,206,57,.9)';ctx.lineWidth=lw*1.5;
  roundRect(ctx,el.x,el.y,el.w,el.h,4);ctx.stroke();ctx.restore();
  getHandles(S.active).forEach(hd=>{
    ctx.save();
    ctx.fillStyle='#fff';ctx.strokeStyle='#a6ce39';ctx.lineWidth=Math.max(2,Math.round(W*.002));
    if(hd.type==='side'){
      const hw=hs*.65,hh=hs*1.3;
      roundRect(ctx,hd.x-hw/2,hd.y-hh/2,hw,hh,hw/2);
    }else{
      ctx.beginPath();ctx.arc(hd.x,hd.y,hs*.55,0,Math.PI*2);
    }
    ctx.fill();ctx.stroke();ctx.restore();
  });
}

// ── INTERACTION ──
function getPos(e){
  const rect=canvas.getBoundingClientRect();
  const t=e.touches?e.touches[0]:e;
  return{x:(t.clientX-rect.left)*scale,y:(t.clientY-rect.top)*scale};
}
function getHandleHit(pos,key){
  const base=Math.round(HR*(FMTS[S.fmt].w/1080));
  for(const h of getHandles(key)){
    const hs=h.type==='corner'?base*2.5:base*2;
    if(Math.abs(pos.x-h.x)<hs&&Math.abs(pos.y-h.y)<hs)return h.id;
  }
  return null;
}
function hitEl(pos){
  const order=S.active?[S.active,...['title','cat','logo'].filter(k=>k!==S.active)]:['title','cat','logo'];
  for(const k of order){
    const el=ELS[k];
    if(!el||el.x===null||!el.visible)continue;
    if(pos.x>=el.x&&pos.x<=el.x+el.w&&pos.y>=el.y&&pos.y<=el.y+el.h)return k;
  }
  return null;
}

// Calcula cuántas líneas tiene el texto con un ancho dado y un sz dado

// Calcula el alto mínimo para contener N líneas de sz dado

canvas.addEventListener('mousedown',onDown);
canvas.addEventListener('touchstart',onDown,{passive:false});
canvas.addEventListener('mousemove',onMove);
canvas.addEventListener('touchmove',onMove,{passive:false});
canvas.addEventListener('mouseup',onUp);
canvas.addEventListener('touchend',onUp);

function onDown(e){
  if(e.touches)e.preventDefault();
  const pos=getPos(e);
  if(S.active){
    const hid=getHandleHit(pos,S.active);
    if(hid){
      S.action='resize-'+hid;
      S.resizeStart={pos:{...pos},rect:{...ELS[S.active]},
        logoAR:S.active==='logo'&&S.logoImg?S.logoImg.width/S.logoImg.height:null};
      return;
    }
  }
  const k=hitEl(pos);
  if(k){S.active=k;S.action='drag';S.dragOff={x:pos.x-ELS[k].x,y:pos.y-ELS[k].y};}
  else{S.active=null;S.action=null;}
  render();
}

function onMove(e){
  if(e.touches)e.preventDefault();
  const pos=getPos(e);
  const{w:W,h:H}=FMTS[S.fmt];
  const SNAP=W*.014;
  if(!S.action){
    if(S.active){
      const hid=getHandleHit(pos,S.active);
      if(hid){const cur={nw:'nw-resize',ne:'ne-resize',sw:'sw-resize',se:'se-resize',w:'ew-resize',e:'ew-resize'};canvas.style.cursor=cur[hid]||'crosshair';return;}
    }
    canvas.style.cursor=hitEl(pos)?'grab':'default';return;
  }
  const el=ELS[S.active];
  if(S.action==='drag'){
    let nx=pos.x-S.dragOff.x,ny=pos.y-S.dragOff.y;
    const ecx=nx+el.w/2,ecy=ny+el.h/2;
    if(Math.abs(ecx-W/2)<SNAP)nx=W/2-el.w/2;
    if(Math.abs(ecy-H/2)<SNAP)ny=H/2-el.h/2;
    el.x=nx;el.y=ny;
  }
  if(S.action.startsWith('resize-')){
    const corner=S.action.slice(7),rs=S.resizeStart;
    const dx=pos.x-rs.pos.x,dy=pos.y-rs.pos.y;
    const MIN=W*.04;
    let{x,y,w,h}=rs.rect;
    if(rs.logoAR){
      if(corner==='se'){w=Math.max(MIN,w+dx);h=w/rs.logoAR;}
      else if(corner==='sw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;h=w/rs.logoAR;}
      else if(corner==='ne'){w=Math.max(MIN,w+dx);const nh=w/rs.logoAR;y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='nw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;const nh=w/rs.logoAR;y=rs.rect.y+rs.rect.h-nh;h=nh;}
    } else {
      if(corner==='se'){w=Math.max(MIN,w+dx);h=Math.max(MIN,h+dy);}
      else if(corner==='sw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;h=Math.max(MIN,h+dy);}
      else if(corner==='ne'){w=Math.max(MIN,w+dx);const nh=Math.max(MIN,h-dy);y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='nw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;const nh=Math.max(MIN,h-dy);y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='e'){w=Math.max(MIN,w+dx);}
      else if(corner==='w'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;}
    }
    el.x=x;el.y=y;el.w=w;el.h=h;
  }
  render();
}
function onUp(){S.action=null;canvas.style.cursor=S.active?'grab':'default';}
function setFmt(f){
  S.fmt=f;resetEls();
  document.querySelectorAll('[id^="fp-"]').forEach(el=>el.classList.remove('on'));
  const el=document.getElementById('fp-'+f);if(el)el.classList.add('on');
  document.querySelectorAll('select[id="fmtSel"],select[onchange*="setFmt"]').forEach(s=>{s.value=f;});
  document.getElementById('fmtLbl').textContent=FMTS[f].lbl;
  resizeCanvas();render();drawPreviews();
}
function setTpl(t){
  S.tpl=t;resetEls();
  document.querySelectorAll('.tpl-btn').forEach(b=>b.classList.remove('on'));
  document.getElementById('tpl-'+t).classList.add('on');
  render();
}

// ── CONTROLS ──
const RMAP={
  iDark:{k:'iDark',fn:v=>v/100,s:v=>v+'%'},
  iBlur:{k:'iBlur',fn:v=>v,s:v=>v+'px'},
  imgX: {k:'imgX', fn:v=>v/100,s:v=>v==0?'Centro':v<0?'← '+Math.abs(v)+'%':'→ '+v+'%'},
  imgY: {k:'imgY', fn:v=>v/100,s:v=>v==0?'Centro':v<0?'↑ '+Math.abs(v)+'%':'↓ '+v+'%'},
  ovOp: {k:'ovOp', fn:v=>v/100,s:v=>v+'%'},
  tBgOp:{k:'tBgOp',fn:v=>v/100,s:v=>v+'%'},
  cBgOp:{k:'cBgOp',fn:v=>v/100,s:v=>v+'%'},
  lOp:  {k:'lOp',  fn:v=>v/100,s:v=>v+'%'},
};
function updR(key,el){
  const m=RMAP[key];if(!m)return;
  S[m.k]=m.fn(+el.value);
  document.getElementById('rv-'+key).textContent=m.s(+el.value);
  render();
}
function setSw(inputId,val,el){
  document.getElementById(inputId).value=val==='transparent'?'#000000':val;
  const map={tCol:'tCol',tBg:'tBg',cCol:'cCol',cBg:'cBg',ovCol:'ovCol'};
  if(map[inputId])S[map[inputId]]=val;
  el.closest('.swatches').querySelectorAll('.sw').forEach(s=>s.classList.remove('on'));
  el.classList.add('on');render();
}
['titIn','catIn'].forEach(id=>{
  document.getElementById(id).addEventListener('input',e=>{
    if(id==='titIn')S.title=e.target.value;else S.cat=e.target.value;render();
  });
});

// ── FETCH ──
async function fetchUrl(){
  const url=document.getElementById('urlIn').value.trim();if(!url)return;
  showLoading(true);
  try{
    const res=await fetch(`${WORKER}?url=${encodeURIComponent(url)}`);
    if(!res.ok)throw new Error('Error '+res.status);
    const data=await res.json();
    if(data.error)throw new Error(data.error);
    document.getElementById('titIn').value=data.title||'';S.title=data.title||'';
    const cat=(data.category||'').replace(/_/g,' ');
    document.getElementById('catIn').value=cat;S.cat=cat;
    ELS.title={x:null,y:null,w:null,h:null,visible:true};
    ELS.cat={x:null,y:null,w:null,h:null,visible:true};
    if(data.image)await loadRemoteImg(data.image);
    else showToast('Sin imagen. Subí una manualmente.');
    resizeCanvas(true);render();drawPreviews();
    if(_panelOpen)renderMobPanel();
    setTimeout(()=>{resizeCanvas(true);render();},150);
    setTimeout(()=>{resizeCanvas(true);render();},400);
  }catch(er){showToast('Error: '+er.message);}
  showLoading(false);
}
async function loadRemoteImg(imgUrl){
  try{
    const res=await fetch(`${WORKER}?image=${encodeURIComponent(imgUrl)}`);
    if(!res.ok)throw new Error();
    const blob=await res.blob();
    const bu=URL.createObjectURL(blob);
    return new Promise(r=>{
      const img=new Image();
      img.onload=()=>{S.bgImg=img;resetImgSliders();resizeCanvas(true);render();drawPreviews();setTimeout(()=>{resizeCanvas(true);render();},300);r();};
      img.onerror=()=>{showToast('No se pudo cargar la imagen.');r();};
      img.src=bu;
    });
  }catch{
    return new Promise(r=>{
      const img=new Image();img.crossOrigin='anonymous';
      img.onload=()=>{S.bgImg=img;resetImgSliders();resizeCanvas(true);render();drawPreviews();setTimeout(()=>{resizeCanvas(true);render();},300);r();};
      img.onerror=()=>{showToast('Subí la imagen manualmente.');r();};
      img.src=imgUrl;
    });
  }
}
function loadLocalImg(ev){
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=e=>{
    const img=new Image();
    img.onload=()=>{S.bgImg=img;resetImgSliders();render();drawPreviews();};
    img.src=e.target.result;
  };
  rd.readAsDataURL(f);
}
function loadLogo(ev){
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=e=>{
    const img=new Image();
    img.onload=()=>{S.logoImg=img;ELS.logo={x:null,y:null,w:null,h:null,visible:true};render();};
    img.src=e.target.result;
  };
  rd.readAsDataURL(f);
}

// ── TEMPLATE PREVIEWS ──
function drawPreviews(){
  ['normal','moderna','banda','impacto','diagonal','verde'].forEach(k=>{
    const c=document.getElementById('tp-'+k);
    if(c) drawPreviewOnCanvas(c,k);
  });
}

// ── EXPORT ──
// Renderizar sin UI al canvas, devuelve Promise<blob>
function renderClean(){
  return new Promise(resolve=>{
    const prev=S.active;
    S.active=null;
    render(); // render sin handles
    // Esperar un frame para que el canvas esté actualizado
    requestAnimationFrame(()=>{
      canvas.toBlob(blob=>{
        S.active=prev;
        render(); // restaurar con handles
        resolve(blob);
      },'image/jpeg',.93);
    });
  });
}

function clearAll(){
  S.title=''; S.cat=''; S.bgImg=null;
  S.iDark=0; S.iBlur=0; S.imgX=0; S.imgY=0;
  S.ovActive=false; S.ovCol='#000000'; S.ovOp=0.5;
  S.tCol='#ffffff'; S.tBg='#000000'; S.tBgOp=0.8;
  S.cCol='#ffffff'; S.cBg='#000000'; S.cBgOp=0;
  resetEls();
  // Reset UI inputs
  document.getElementById('titIn').value='';
  document.getElementById('catIn').value='';
  document.getElementById('urlIn').value='';
  // Reset sliders desktop
  ['iDark','iBlur','imgX','imgY','tBgOp','cBgOp'].forEach(k=>{
    const el=document.getElementById('r-'+k);
    if(el){
      const defaults={iDark:0,iBlur:0,imgX:0,imgY:0,tBgOp:80,cBgOp:0};
      el.value=defaults[k]||0;
      const rv=document.getElementById('rv-'+k);
      if(rv&&RMAP[k])rv.textContent=RMAP[k].s(+(defaults[k]||0));
    }
  });
  const ovTog=document.getElementById('ovTog');
  if(ovTog)ovTog.checked=false;
  render(); drawPreviews();
  if(_panelOpen) renderMobPanel();
  showToast('✅ Placa reiniciada');
}

async function exportImg(mode){
  const blob=await renderClean();
  if(mode==='download'){
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;
    a.download=`mediamendoza-${S.fmt}-${Date.now()}.jpg`;
    document.body.appendChild(a);a.click();
    setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},1000);
    showToast('✅ Imagen descargada');
  } else {
    // Copiar: usar blob PNG limpio (sin UI) ya generado por renderClean
    const pngBlob = await new Promise(res => {
      const prev = S.active;
      S.active = null;
      render();
      requestAnimationFrame(() => {
        canvas.toBlob(b => {
          S.active = prev;
          render();
          res(b);
        }, 'image/png');
      });
    });
    try{
      await navigator.clipboard.write([new ClipboardItem({'image/png': pngBlob})]);
      showToast('✅ Copiado al portapapeles');
    }catch{
      const url = URL.createObjectURL(pngBlob);
      window.open(url,'_blank');
      showToast('Abrí en nueva pestaña → clic derecho → Copiar imagen');
    }
  }
}

function showLoading(v){document.getElementById('lov').style.display=v?'flex':'none';}
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}


// ── MOBILE TAB SYSTEM ──
const MOB_PANELS = {
  noticia: ()=>`
    <label class="fl" style="margin-top:4px">Formato</label>
    <select onchange="setFmt(this.value);this.blur()" style="margin-bottom:8px">
      ${['sq','story','portrait','fb','tw'].map(f=>`<option value="${f}" ${S.fmt===f?'selected':''}>${{sq:'Instagram Cuadrado (1080×1080)',story:'Historia (1080×1920)',portrait:'Portrait (1080×1350)',fb:'Facebook (1200×628)',tw:'Twitter / X (1600×900)'}[f]}</option>`).join('')}
    </select>
    <div class="urlrow">
      <input type="url" id="m-urlIn" placeholder="https://mediamendoza.com/..." value="${document.getElementById('urlIn').value}">
      <button class="urlbtn" onclick="mobFetch()">→</button>
    </div>
    <label class="fl">Título</label>
    <textarea id="m-titIn" rows="2">${S.title}</textarea>
    <label class="fl">Categoría</label>
    <input type="text" id="m-catIn" value="${S.cat}" placeholder="Ej: Mendoza...">
    <label class="uplbl" for="m-imgUp">📁 Subir imagen</label>
    <input type="file" id="m-imgUp" accept="image/*">`,

  plantilla: ()=>`
    <div class="tpl-grid">
      ${['normal','moderna','banda','impacto','diagonal','verde'].map(k=>`
        <div class="tpl-btn ${S.tpl===k?'on':''}" onclick="setTpl('${k}');renderMobPanel()">
          <canvas class="tpl-prev" id="mtp-${k}"></canvas>
          <div class="tpl-name">${{normal:'Normal',moderna:'Moderna',banda:'Banda',impacto:'Impacto',diagonal:'Diagonal',verde:'Verde MM'}[k]}</div>
        </div>`).join('')}
    </div>`,

  imagen: ()=>`
    <label class="fl" style="margin-top:4px">Oscurecer <span class="rval" id="m-rv-iDark">${Math.round(S.iDark*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.iDark*100)}" oninput="S.iDark=this.value/100;document.getElementById('m-rv-iDark').textContent=this.value+'%';syncSlider('iDark',this.value);render()"></div>
    <label class="fl">Blur <span class="rval" id="m-rv-iBlur">${S.iBlur}px</span></label>
    <div class="rrow"><input type="range" min="0" max="20" value="${S.iBlur}" oninput="S.iBlur=+this.value;document.getElementById('m-rv-iBlur').textContent=this.value+'px';syncSlider('iBlur',this.value);render()"></div>
    <label class="fl">Posición horizontal <span class="rval" id="m-rv-imgX">${S.imgX==0?'Centro':S.imgX<0?'← '+Math.abs(Math.round(S.imgX*100))+'%':'→ '+Math.round(S.imgX*100)+'%'}</span></label>
    <div class="rrow"><input type="range" min="-100" max="100" value="${Math.round(S.imgX*100)}" oninput="S.imgX=this.value/100;document.getElementById('m-rv-imgX').textContent=(+this.value==0?'Centro':this.value<0?'← '+Math.abs(this.value)+'%':'→ '+this.value+'%');syncSlider('imgX',this.value);render()"></div>
    <label class="fl">Posición vertical <span class="rval" id="m-rv-imgY">${S.imgY==0?'Centro':S.imgY<0?'↑ '+Math.abs(Math.round(S.imgY*100))+'%':'↓ '+Math.round(S.imgY*100)+'%'}</span></label>
    <div class="rrow"><input type="range" min="-100" max="100" value="${Math.round(S.imgY*100)}" oninput="S.imgY=this.value/100;document.getElementById('m-rv-imgY').textContent=(+this.value==0?'Centro':this.value<0?'↑ '+Math.abs(this.value)+'%':'↓ '+this.value+'%');syncSlider('imgY',this.value);render()"></div>`,

  titulo: ()=>`
    <label class="fl" style="margin-top:4px">Color de texto</label>
    <div class="swatches">
      <input type="color" value="${S.tCol}" oninput="S.tCol=this.value;render()">
      ${['#ffffff','#111111','#a6ce39','#f5c518'].map(c=>`<div class="sw ${S.tCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.tCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Fondo del recuadro</label>
    <div class="swatches">
      <input type="color" value="${S.tBg==='transparent'?'#000000':S.tBg}" oninput="S.tBg=this.value;render()">
      ${['#000000','#a6ce39','#8fb82d','transparent'].map(c=>`<div class="sw ${S.tBg===c?'on':''} ${c==='transparent'?'sw-transp':''}" style="${c!=='transparent'?'background:'+c:''}" onclick="S.tBg='${c}';render();renderMobPanel()" title="${c==='transparent'?'Sin fondo':''}"></div>`).join('')}
    </div>
    <label class="fl">Opacidad del fondo <span class="rval" id="m-rv-tBgOp">${Math.round(S.tBgOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.tBgOp*100)}" oninput="S.tBgOp=this.value/100;document.getElementById('m-rv-tBgOp').textContent=this.value+'%';syncSlider('tBgOp',this.value);render()"></div>`,

  categoria: ()=>`
    <label class="fl" style="margin-top:4px">Color de texto</label>
    <div class="swatches">
      <input type="color" value="${S.cCol}" oninput="S.cCol=this.value;render()">
      ${['#111111','#ffffff','#a6ce39'].map(c=>`<div class="sw ${S.cCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.cCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Color de fondo</label>
    <div class="swatches">
      <input type="color" value="${S.cBg}" oninput="S.cBg=this.value;render()">
      ${['#a6ce39','#8fb82d','#ffffff','#111111'].map(c=>`<div class="sw ${S.cBg===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.cBg='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Opacidad del fondo <span class="rval" id="m-rv-cBgOp">${Math.round(S.cBgOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.cBgOp*100)}" oninput="S.cBgOp=this.value/100;document.getElementById('m-rv-cBgOp').textContent=this.value+'%';syncSlider('cBgOp',this.value);render()"></div>`,

  capa: ()=>`
    <div class="togrow" style="margin-top:4px">
      <span style="font-size:.8rem;color:var(--g80)">Activar capa de color</span>
      <label class="toggle"><input type="checkbox" id="m-ovTog" ${document.getElementById('ovTog').checked?'checked':''} onchange="document.getElementById('ovTog').checked=this.checked;render()"><span class="togslide"></span></label>
    </div>
    <label class="fl">Color</label>
    <div class="swatches">
      <input type="color" value="${S.ovCol}" oninput="S.ovCol=this.value;render()">
      ${['#000000','#1a1a1a','#a6ce39','#ffffff'].map(c=>`<div class="sw ${S.ovCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.ovCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Opacidad <span class="rval" id="m-rv-ovOp">${Math.round(S.ovOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.ovOp*100)}" oninput="S.ovOp=this.value/100;document.getElementById('m-rv-ovOp').textContent=this.value+'%';syncSlider('ovOp',this.value);render()"></div>`,

  logo: ()=>`
    <label class="uplbl" for="m-logoUp">📁 Cambiar logo</label>
    <input type="file" id="m-logoUp" accept="image/*">
    <label class="fl">Opacidad <span class="rval" id="m-rv-lOp">${Math.round(S.lOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="10" max="100" value="${Math.round(S.lOp*100)}" oninput="S.lOp=this.value/100;document.getElementById('m-rv-lOp').textContent=this.value+'%';syncSlider('lOp',this.value);render()"></div>`,
};

let _activeTab = 'noticia';
let _panelOpen = false;

// iOS Safari fix: registrar touchstart en los tabs
function initTabTouchEvents(){
  document.querySelectorAll('.mob-tab').forEach(btn=>{
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      mobTab(this.dataset.key, this);
    }, {passive:false});
  });
}

function mobTab(key, tabEl){
  const panel = document.getElementById('mobPanel');
  const canvasArea = document.getElementById('canvasArea');
  if(_activeTab === key && _panelOpen){
    // cerrar con animación
    panel.classList.add('closing');
    canvasArea.classList.remove('panel-open'); // canvas crece durante animación
    document.querySelectorAll('.mob-tab').forEach(t=>t.classList.remove('on'));
    _panelOpen = false;
    setTimeout(()=>{
      panel.classList.remove('open');
      panel.classList.remove('closing');
      resizeCanvas(true); render(); // redibujar manteniendo posiciones
    }, 260);
    return;
  }
  _activeTab = key;
  _panelOpen = true;
  document.querySelectorAll('.mob-tab').forEach(t=>t.classList.remove('on'));
  tabEl.classList.add('on');
  renderMobPanel();
  panel.classList.remove('closing');
  panel.classList.add('open');
  canvasArea.classList.add('panel-open');
  // redibujar tras la transición (doble para iOS/Android)
  setTimeout(()=>{ resizeCanvas(true); render(); }, 280);
  setTimeout(()=>{ resizeCanvas(true); render(); }, 350);
}

function renderMobPanel(){
  const inner = document.getElementById('mobPanelInner');
  if(!inner) return;
  inner.innerHTML = MOB_PANELS[_activeTab]?MOB_PANELS[_activeTab]():'';
  // bind events
  bindMobEvents();
  // draw previews in plantilla panel
  if(_activeTab==='plantilla'){
    requestAnimationFrame(()=>{
      ['normal','moderna','banda','impacto','diagonal','verde'].forEach(k=>{
        const c=document.getElementById('mtp-'+k);if(!c)return;
        drawPreviewOnCanvas(c,k);
      });
    });
  }
}

function bindMobEvents(){
  const mi=document.getElementById('m-imgUp');
  if(mi) mi.addEventListener('change',loadLocalImg);
  const ml=document.getElementById('m-logoUp');
  if(ml) ml.addEventListener('change',loadLogo);
  const mt=document.getElementById('m-titIn');
  if(mt) mt.addEventListener('input',e=>{S.title=e.target.value;document.getElementById('titIn').value=e.target.value;render();});
  const mc=document.getElementById('m-catIn');
  if(mc) mc.addEventListener('input',e=>{S.cat=e.target.value;document.getElementById('catIn').value=e.target.value;render();});
}

function mobFetch(){
  const u=document.getElementById('m-urlIn');
  if(u){document.getElementById('urlIn').value=u.value;}
  fetchUrl();
}

function syncSlider(key, val){
  // sincronizar con el slider del sidebar desktop
  const el=document.getElementById('r-'+key);
  if(el) el.value=val;
  const rv=document.getElementById('rv-'+key);
  if(rv&&RMAP[key]) rv.textContent=RMAP[key].s(+val);
}

// ── INIT ──
function init(){
  const img=new Image();
  img.onload=()=>{S.logoImg=img;render();drawPreviews();};
  img.src='data:image/png;base64,'+LOGO_B64;
  document.getElementById('hLogo').src='data:image/png;base64,'+LOGO_B64;
  // Esperar un frame para que el DOM mobile tenga dimensiones correctas
  // Doble rAF: iOS Safari necesita dos frames para tener dimensiones correctas
  // Desktop: abrir primer acordeón
  if(window.innerWidth>700){
    const firstHead=document.querySelector('.acc-head');
    if(firstHead&&!firstHead.classList.contains('open'))toggleAcc(firstHead);
  }
  // Mobile: canvas arranca grande, sin panel abierto
  if(window.innerWidth<=700) initTabTouchEvents();
  // Primer render: doble rAF + timeout para garantizar layout completo en todos los browsers
  function doFirstRender(){resizeCanvas();render();drawPreviews();}
  requestAnimationFrame(()=>requestAnimationFrame(doFirstRender));
  setTimeout(doFirstRender, 200);
}
window.addEventListener('resize',()=>{resizeCanvas(true);render();});
window.addEventListener('load',init);const WORKER='https://twilight-river-3072.mhhurtado.workers.dev';
const LOGO_B64='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';

const FMTS={
  sq:      {w:1080,h:1080,lbl:'Instagram Cuadrado — 1080×1080'},
  story:   {w:1080,h:1920,lbl:'Historia — 1080×1920'},
  portrait:{w:1080,h:1350,lbl:'Portrait — 1080×1350'},
  fb:      {w:1200,h:628, lbl:'Facebook — 1200×628'},
  tw:      {w:1600,h:900, lbl:'Twitter/X — 1600×900'},
};

let ELS={
  title:{x:null,y:null,w:null,h:null,visible:true},
  cat:  {x:null,y:null,w:null,h:null,visible:true},
  logo: {x:null,y:null,w:null,h:null,visible:true},
};

let S={
  fmt:'sq', tpl:'normal',
  bgImg:null, iDark:0, iBlur:0, imgX:0, imgY:0,
  ovActive:false, ovCol:'#000000', ovOp:.5,
  title:'', tCol:'#ffffff', tBg:'#000000', tBgOp:.8,
  cat:'',   cCol:'#ffffff', cBg:'#000000', cBgOp:0,
  logoImg:null, lOp:1,
  active:null,
  action:null,
  dragOff:{x:0,y:0},
  resizeStart:null,
};

const canvas=document.getElementById('mc');
const ctx=canvas.getContext('2d');
let scale=1;
const HR=16;

// ── ACCORDION ──
function toggleAcc(head){
  const body=head.nextElementSibling;
  const isOpen=head.classList.contains('open');
  // cierra todos
  document.querySelectorAll('.acc-head.open').forEach(h=>{
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
  if(!isOpen){
    head.classList.add('open');
    body.classList.add('open');
  }
}

// ── CANVAS SIZE ──
function resizeCanvas(keepEls){
  const fmt=FMTS[S.fmt];
  const area=document.getElementById('canvasArea');
  const isMobile=window.innerWidth<=700;
  let avW,avH;
  if(isMobile){
    // Medir los elementos fijos reales para máxima compatibilidad cross-browser
    const topbar=document.querySelector('.topbar');
    const expbar=document.querySelector('.expbar');
    const tabbar=document.querySelector('.mob-tabbar');
    const panel =document.querySelector('.mob-panel.open');
    const tbH  =topbar ?topbar.getBoundingClientRect().height :52;
    const ebH  =expbar ?expbar.getBoundingClientRect().height :58;
    const tabH =tabbar ?tabbar.getBoundingClientRect().height :48;
    const panH =panel  ?panel.getBoundingClientRect().height  :0;
    avW=window.innerWidth-16;
    avH=window.innerHeight-tbH-ebH-tabH-panH-16;
  } else {
    avW=area.clientWidth-32;
    avH=area.clientHeight-32;
  }
  const ratio=fmt.w/fmt.h;
  let dw,dh;
  if(ratio>=1){dw=Math.min(avW,fmt.w);dh=dw/ratio;if(dh>avH){dh=avH;dw=dh*ratio;}}
  else{dh=Math.min(avH,fmt.h);dw=dh*ratio;if(dw>avW){dw=avW;dh=dw/ratio;}}
  dw=Math.floor(dw);dh=Math.floor(dh);
  canvas.style.width=dw+'px';canvas.style.height=dh+'px';
  canvas.width=fmt.w;canvas.height=fmt.h;
  scale=fmt.w/dw;
  // Solo resetear posiciones si se pide explícitamente (cambio de formato/plantilla)
  if(!keepEls) resetEls();
}

function resetEls(){
  ELS={
    title:{x:null,y:null,w:null,h:null,visible:true},
    cat:  {x:null,y:null,w:null,h:null,visible:true},
    logo: {x:null,y:null,w:null,h:null,visible:true},
  };
}

// ── DEFAULT POSITIONS ──
function defaultPos(key){
  const fmt=FMTS[S.fmt];
  const W=fmt.w,H=fmt.h,pad=Math.round(W*.045);
  if(key==='title'){
    const w=Math.round(W*.82),h=Math.round(H*.19);
    const x=Math.round((W-w)/2);
    const y=S.tpl==='normal'?Math.round((H-h)/2):Math.round(H*.52);
    return{x,y,w,h};
  }
  if(key==='cat'){
    const w=Math.round(W*.36),h=Math.round(H*.072);
    if(S.tpl==='normal')return{x:Math.round((W-w)/2),y:pad,w,h};
    if(S.tpl==='banda'||S.tpl==='verde'){
      return{x:pad,y:H-Math.round(H*.32)+Math.round(H*.01),w,h};
    }
    return{x:pad,y:Math.round(H*.46),w,h};
  }
  if(key==='logo'){
    if(!S.logoImg)return{x:pad,y:pad,w:Math.round(W*.26),h:Math.round(W*.09)};
    const lw=Math.round(W*.26); // tamaño grande
    const lh=Math.round(lw*(S.logoImg.height/S.logoImg.width));
    if(S.tpl==='normal')return{x:Math.round((W-lw)/2),y:H-lh-pad,w:lw,h:lh};
    return{x:W-lw-pad,y:pad,w:lw,h:lh};
  }
}
function ensurePos(key){
  const el=ELS[key];
  if(el.x===null){const d=defaultPos(key);el.x=d.x;el.y=d.y;el.w=d.w;el.h=d.h;}
}

// ── TEMPLATES ──
const TPLS={
  normal(W,H){},
  moderna(W,H){const g=ctx.createLinearGradient(0,H*.38,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.82)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);},
  banda(W,H){const bh=Math.round(H*.32);ctx.fillStyle='rgba(0,0,0,.88)';ctx.fillRect(0,H-bh,W,bh);ctx.fillStyle='#a6ce39';ctx.fillRect(0,H-bh,W,Math.round(H*.018));},
  impacto(W,H){ctx.fillStyle='rgba(0,0,0,.52)';ctx.fillRect(0,0,W,H);ctx.fillStyle='#a6ce39';ctx.fillRect(0,0,Math.round(W*.025),H);},
  diagonal(W,H){const g=ctx.createLinearGradient(0,H,W*.7,0);g.addColorStop(0,'rgba(0,0,0,.88)');g.addColorStop(.6,'rgba(0,0,0,.3)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);},
  verde(W,H){const bh=Math.round(H*.32);ctx.fillStyle='#a6ce39';ctx.fillRect(0,H-bh,W,bh);ctx.fillStyle='rgba(255,255,255,.22)';ctx.fillRect(0,H-bh,W,2);},
};

// ── RENDER ──
function render(){
  const fmt=FMTS[S.fmt];const W=fmt.w,H=fmt.h;
  ctx.clearRect(0,0,W,H);
  // BG
  if(S.bgImg){
    ctx.save();
    if(S.iBlur>0)ctx.filter=`blur(${S.iBlur}px)`;
    const img=S.bgImg,ir=img.width/img.height,cr=W/H;
    let sx,sy,sw,sh;
    if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
    const extraX=img.width-sw,extraY=img.height-sh;
    sx=Math.max(0,Math.min(extraX,sx+extraX*S.imgX));
    sy=Math.max(0,Math.min(extraY,sy+extraY*S.imgY));
    const p=S.iBlur*4;
    ctx.drawImage(img,sx,sy,sw,sh,-p,-p,W+p*2,H+p*2);
    ctx.filter='none';ctx.restore();
    if(S.iDark>0){ctx.save();ctx.globalAlpha=S.iDark;ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.restore();}
  } else {
    ctx.fillStyle='#dedad3';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#aaa';ctx.font=`${Math.round(W*.022)}px Montserrat,sans-serif`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('Pegá un link o subí una imagen',W/2,H/2);
    ctx.textAlign='left';
  }
  // Template
  (TPLS[S.tpl]||TPLS.normal)(W,H);
  // Overlay
  if(document.getElementById('ovTog').checked&&S.ovOp>0){
    ctx.save();ctx.globalAlpha=S.ovOp;ctx.fillStyle=S.ovCol;ctx.fillRect(0,0,W,H);ctx.restore();
  }
  // Elementos
  ensurePos('logo'); drawLogo();
  ensurePos('cat');  drawCat();
  ensurePos('title');drawTitle();
  // UI
  if(S.active)drawActiveUI(W,H);
}

// ── HELPERS ──
function toTitleCase(str){
  return str.replace(/\w\S*/g,t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase());
}
function wrapText(ctx,text,maxW){
  if(!text||maxW<=0)return[];
  const words=text.split(' ').filter(w=>w.length>0);
  const lines=[];let cur='';
  for(const w of words){
    const test=cur?cur+' '+w:w;
    if(cur&&ctx.measureText(test).width>maxW){lines.push(cur);cur=w;}
    else cur=test;
  }
  if(cur.trim())lines.push(cur);
  return lines.filter(l=>l.trim().length>0);
}
function roundRect(ctx,x,y,w,h,r){
  r=Math.min(r,w/2,h/2);
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}
function hexRgb(hex){
  if(!hex||hex==='transparent')return{r:0,g:0,b:0};
  return{r:parseInt(hex.slice(1,3),16),g:parseInt(hex.slice(3,5),16),b:parseInt(hex.slice(5,7),16)};
}
function resetImgSliders(){
  ['imgX','imgY'].forEach(k=>{
    const el=document.getElementById('r-'+k);if(el)el.value=0;
    const rv=document.getElementById('rv-'+k);if(rv)rv.textContent='Centro';
  });
  S.imgX=0;S.imgY=0;
}

function drawPreviewOnCanvas(c,k){
  const tc=c.getContext('2d');const W=c.width,H=c.height;
  tc.clearRect(0,0,W,H);
  if(S.bgImg){
    const img=S.bgImg,ir=img.width/img.height,cr=W/H;
    let sx,sy,sw,sh;
    if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
    tc.drawImage(img,sx,sy,sw,sh,0,0,W,H);
  }else{tc.fillStyle='#d5d2cb';tc.fillRect(0,0,W,H);}
  const ov={
    normal:()=>{},
    moderna:()=>{const g=tc.createLinearGradient(0,H*.35,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.8)');tc.fillStyle=g;tc.fillRect(0,0,W,H);},
    banda:()=>{tc.fillStyle='rgba(0,0,0,.85)';tc.fillRect(0,H*.62,W,H*.38);tc.fillStyle='#a6ce39';tc.fillRect(0,H*.62,W,H*.03);},
    impacto:()=>{tc.fillStyle='rgba(0,0,0,.52)';tc.fillRect(0,0,W,H);tc.fillStyle='#a6ce39';tc.fillRect(0,0,W*.07,H);},
    diagonal:()=>{const g=tc.createLinearGradient(0,H,W*.7,0);g.addColorStop(0,'rgba(0,0,0,.88)');g.addColorStop(.6,'rgba(0,0,0,.28)');g.addColorStop(1,'rgba(0,0,0,0)');tc.fillStyle=g;tc.fillRect(0,0,W,H);},
    verde:()=>{tc.fillStyle='#a6ce39';tc.fillRect(0,H*.62,W,H*.38);},
  };
  if(ov[k])ov[k]();
  tc.fillStyle='#fff';tc.font=`bold ${Math.round(H*.1)}px BebasNeue,sans-serif`;
  tc.textBaseline='bottom';tc.textAlign='left';
  tc.fillText('TÍTULO',W*.07,H*.93);
}

// ── DRAW FUNCTIONS ──
function drawLogo(){
  const el=ELS.logo;
  if(!el.visible||!S.logoImg)return;
  ctx.save();ctx.globalAlpha=S.lOp;
  ctx.drawImage(S.logoImg,el.x,el.y,el.w,el.h);
  ctx.restore();
}

function drawCat(){
  const el=ELS.cat;
  if(!el.visible||!S.cat)return;
  ctx.save();
  const pad=Math.round(el.w*.04);
  const aw=el.w-pad*2;
  if(aw<=0){ctx.restore();return;}
  let sz=Math.max(8,Math.round(el.h*.58));
  let lines, lh, bh;
  for(let i=0;i<20;i++){
    ctx.font=`700 ${sz}px 'Economica',sans-serif`;
    lines=wrapText(ctx,toTitleCase(S.cat),aw);
    lh=sz*1.15;
    bh=lines.length*lh;
    if(bh<=el.h*0.95||sz<=8)break;
    sz=Math.max(8,Math.round(sz*0.88));
  }
  ctx.textBaseline='top';
  const sy=el.y+(el.h-bh)/2;
  const cx=el.x+el.w/2;
  const r=hexRgb(S.cBg);
  ctx.fillStyle=`rgba(${r.r},${r.g},${r.b},${S.cBgOp})`;
  roundRect(ctx,el.x,el.y,el.w,el.h,5);ctx.fill();
  ctx.fillStyle=S.cCol;ctx.textAlign='center';
  lines.forEach((l,i)=>ctx.fillText(l,cx,sy+i*lh));
  ctx.restore();
}

function drawTitle(){
  const el=ELS.title;
  if(!el.visible||!S.title)return;
  ctx.save();
  const pad=Math.round(el.w*.025);
  const aw=el.w-pad*2;
  if(aw<=0){ctx.restore();return;}
  let sz=Math.max(10,Math.round(el.h*.38));
  let lines, lh, bh;
  // Reducir sz hasta que el bloque de texto quepa dentro de el.h
  for(let i=0;i<20;i++){
    ctx.font=`400 ${sz}px 'BebasNeue',sans-serif`;
    lines=wrapText(ctx,S.title,aw);
    lh=sz*1.15;
    bh=lines.length*lh;
    if(bh<=el.h*0.95||sz<=10)break;
    sz=Math.max(10,Math.round(sz*0.88));
  }
  ctx.textBaseline='top';
  const sy=el.y+(el.h-bh)/2;
  const cx=el.x+el.w/2;
  if(S.tBg!=='transparent'&&S.tBgOp>0){
    const r=hexRgb(S.tBg);
    ctx.fillStyle=`rgba(${r.r},${r.g},${r.b},${S.tBgOp})`;
    roundRect(ctx,el.x,el.y,el.w,el.h,6);ctx.fill();
  }
  ctx.fillStyle=S.tCol;ctx.textAlign='center';
  lines.forEach((l,i)=>ctx.fillText(l,cx,sy+i*lh));
  ctx.restore();
}

// ── HANDLES & HIT ──
function getHandles(key){
  const el=ELS[key];if(!el||el.x===null)return[];
  const H=[
    {x:el.x,       y:el.y,        id:'nw',type:'corner'},
    {x:el.x+el.w,  y:el.y,        id:'ne',type:'corner'},
    {x:el.x,       y:el.y+el.h,   id:'sw',type:'corner'},
    {x:el.x+el.w,  y:el.y+el.h,   id:'se',type:'corner'},
  ];
  if(key!=='logo'){
    H.push({x:el.x,      y:el.y+el.h/2, id:'w', type:'side'});
    H.push({x:el.x+el.w, y:el.y+el.h/2, id:'e', type:'side'});
  }
  return H;
}

function drawActiveUI(W,H){
  const el=ELS[S.active];if(!el||el.x===null)return;
  const cx=el.x+el.w/2,cy=el.y+el.h/2;
  const lw=Math.max(2,Math.round(W*.0016));
  const hs=Math.round(HR*(W/1080));
  ctx.save();
  ctx.strokeStyle='rgba(166,206,57,.6)';ctx.lineWidth=lw;
  ctx.setLineDash([Math.round(W*.007),Math.round(W*.005)]);
  ctx.beginPath();ctx.moveTo(W/2,0);ctx.lineTo(W/2,H);ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,H/2);ctx.lineTo(W,H/2);ctx.stroke();
  ctx.setLineDash([]);ctx.restore();
  const cs=Math.round(W*.022);
  ctx.save();
  ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=Math.max(2,Math.round(W*.002));
  ctx.beginPath();ctx.moveTo(cx-cs,cy);ctx.lineTo(cx+cs,cy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx,cy-cs);ctx.lineTo(cx,cy+cs);ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(cx,cy,Math.round(W*.004),0,Math.PI*2);ctx.fill();
  ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(166,206,57,.9)';ctx.lineWidth=lw*1.5;
  roundRect(ctx,el.x,el.y,el.w,el.h,4);ctx.stroke();ctx.restore();
  getHandles(S.active).forEach(hd=>{
    ctx.save();
    ctx.fillStyle='#fff';ctx.strokeStyle='#a6ce39';ctx.lineWidth=Math.max(2,Math.round(W*.002));
    if(hd.type==='side'){
      const hw=hs*.65,hh=hs*1.3;
      roundRect(ctx,hd.x-hw/2,hd.y-hh/2,hw,hh,hw/2);
    }else{
      ctx.beginPath();ctx.arc(hd.x,hd.y,hs*.55,0,Math.PI*2);
    }
    ctx.fill();ctx.stroke();ctx.restore();
  });
}

// ── INTERACTION ──
function getPos(e){
  const rect=canvas.getBoundingClientRect();
  const t=e.touches?e.touches[0]:e;
  return{x:(t.clientX-rect.left)*scale,y:(t.clientY-rect.top)*scale};
}
function getHandleHit(pos,key){
  const base=Math.round(HR*(FMTS[S.fmt].w/1080));
  for(const h of getHandles(key)){
    const hs=h.type==='corner'?base*2.5:base*2;
    if(Math.abs(pos.x-h.x)<hs&&Math.abs(pos.y-h.y)<hs)return h.id;
  }
  return null;
}
function hitEl(pos){
  const order=S.active?[S.active,...['title','cat','logo'].filter(k=>k!==S.active)]:['title','cat','logo'];
  for(const k of order){
    const el=ELS[k];
    if(!el||el.x===null||!el.visible)continue;
    if(pos.x>=el.x&&pos.x<=el.x+el.w&&pos.y>=el.y&&pos.y<=el.y+el.h)return k;
  }
  return null;
}

// Calcula cuántas líneas tiene el texto con un ancho dado y un sz dado

// Calcula el alto mínimo para contener N líneas de sz dado

canvas.addEventListener('mousedown',onDown);
canvas.addEventListener('touchstart',onDown,{passive:false});
canvas.addEventListener('mousemove',onMove);
canvas.addEventListener('touchmove',onMove,{passive:false});
canvas.addEventListener('mouseup',onUp);
canvas.addEventListener('touchend',onUp);

function onDown(e){
  if(e.touches)e.preventDefault();
  const pos=getPos(e);
  if(S.active){
    const hid=getHandleHit(pos,S.active);
    if(hid){
      S.action='resize-'+hid;
      S.resizeStart={pos:{...pos},rect:{...ELS[S.active]},
        logoAR:S.active==='logo'&&S.logoImg?S.logoImg.width/S.logoImg.height:null};
      return;
    }
  }
  const k=hitEl(pos);
  if(k){S.active=k;S.action='drag';S.dragOff={x:pos.x-ELS[k].x,y:pos.y-ELS[k].y};}
  else{S.active=null;S.action=null;}
  render();
}

function onMove(e){
  if(e.touches)e.preventDefault();
  const pos=getPos(e);
  const{w:W,h:H}=FMTS[S.fmt];
  const SNAP=W*.014;
  if(!S.action){
    if(S.active){
      const hid=getHandleHit(pos,S.active);
      if(hid){const cur={nw:'nw-resize',ne:'ne-resize',sw:'sw-resize',se:'se-resize',w:'ew-resize',e:'ew-resize'};canvas.style.cursor=cur[hid]||'crosshair';return;}
    }
    canvas.style.cursor=hitEl(pos)?'grab':'default';return;
  }
  const el=ELS[S.active];
  if(S.action==='drag'){
    let nx=pos.x-S.dragOff.x,ny=pos.y-S.dragOff.y;
    const ecx=nx+el.w/2,ecy=ny+el.h/2;
    if(Math.abs(ecx-W/2)<SNAP)nx=W/2-el.w/2;
    if(Math.abs(ecy-H/2)<SNAP)ny=H/2-el.h/2;
    el.x=nx;el.y=ny;
  }
  if(S.action.startsWith('resize-')){
    const corner=S.action.slice(7),rs=S.resizeStart;
    const dx=pos.x-rs.pos.x,dy=pos.y-rs.pos.y;
    const MIN=W*.04;
    let{x,y,w,h}=rs.rect;
    if(rs.logoAR){
      if(corner==='se'){w=Math.max(MIN,w+dx);h=w/rs.logoAR;}
      else if(corner==='sw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;h=w/rs.logoAR;}
      else if(corner==='ne'){w=Math.max(MIN,w+dx);const nh=w/rs.logoAR;y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='nw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;const nh=w/rs.logoAR;y=rs.rect.y+rs.rect.h-nh;h=nh;}
    } else {
      if(corner==='se'){w=Math.max(MIN,w+dx);h=Math.max(MIN,h+dy);}
      else if(corner==='sw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;h=Math.max(MIN,h+dy);}
      else if(corner==='ne'){w=Math.max(MIN,w+dx);const nh=Math.max(MIN,h-dy);y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='nw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;const nh=Math.max(MIN,h-dy);y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='e'){w=Math.max(MIN,w+dx);}
      else if(corner==='w'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;}
    }
    el.x=x;el.y=y;el.w=w;el.h=h;
  }
  render();
}
function onUp(){S.action=null;canvas.style.cursor=S.active?'grab':'default';}
function setFmt(f){
  S.fmt=f;resetEls();
  document.querySelectorAll('[id^="fp-"]').forEach(el=>el.classList.remove('on'));
  const el=document.getElementById('fp-'+f);if(el)el.classList.add('on');
  document.querySelectorAll('select[id="fmtSel"],select[onchange*="setFmt"]').forEach(s=>{s.value=f;});
  document.getElementById('fmtLbl').textContent=FMTS[f].lbl;
  resizeCanvas();render();drawPreviews();
}
function setTpl(t){
  S.tpl=t;resetEls();
  document.querySelectorAll('.tpl-btn').forEach(b=>b.classList.remove('on'));
  document.getElementById('tpl-'+t).classList.add('on');
  render();
}

// ── CONTROLS ──
const RMAP={
  iDark:{k:'iDark',fn:v=>v/100,s:v=>v+'%'},
  iBlur:{k:'iBlur',fn:v=>v,s:v=>v+'px'},
  imgX: {k:'imgX', fn:v=>v/100,s:v=>v==0?'Centro':v<0?'← '+Math.abs(v)+'%':'→ '+v+'%'},
  imgY: {k:'imgY', fn:v=>v/100,s:v=>v==0?'Centro':v<0?'↑ '+Math.abs(v)+'%':'↓ '+v+'%'},
  ovOp: {k:'ovOp', fn:v=>v/100,s:v=>v+'%'},
  tBgOp:{k:'tBgOp',fn:v=>v/100,s:v=>v+'%'},
  cBgOp:{k:'cBgOp',fn:v=>v/100,s:v=>v+'%'},
  lOp:  {k:'lOp',  fn:v=>v/100,s:v=>v+'%'},
};
function updR(key,el){
  const m=RMAP[key];if(!m)return;
  S[m.k]=m.fn(+el.value);
  document.getElementById('rv-'+key).textContent=m.s(+el.value);
  render();
}
function setSw(inputId,val,el){
  document.getElementById(inputId).value=val==='transparent'?'#000000':val;
  const map={tCol:'tCol',tBg:'tBg',cCol:'cCol',cBg:'cBg',ovCol:'ovCol'};
  if(map[inputId])S[map[inputId]]=val;
  el.closest('.swatches').querySelectorAll('.sw').forEach(s=>s.classList.remove('on'));
  el.classList.add('on');render();
}
['titIn','catIn'].forEach(id=>{
  document.getElementById(id).addEventListener('input',e=>{
    if(id==='titIn')S.title=e.target.value;else S.cat=e.target.value;render();
  });
});

// ── FETCH ──
async function fetchUrl(){
  const url=document.getElementById('urlIn').value.trim();if(!url)return;
  showLoading(true);
  try{
    const res=await fetch(`${WORKER}?url=${encodeURIComponent(url)}`);
    if(!res.ok)throw new Error('Error '+res.status);
    const data=await res.json();
    if(data.error)throw new Error(data.error);
    document.getElementById('titIn').value=data.title||'';S.title=data.title||'';
    const cat=(data.category||'').replace(/_/g,' ');
    document.getElementById('catIn').value=cat;S.cat=cat;
    ELS.title={x:null,y:null,w:null,h:null,visible:true};
    ELS.cat={x:null,y:null,w:null,h:null,visible:true};
    if(data.image)await loadRemoteImg(data.image);
    else showToast('Sin imagen. Subí una manualmente.');
    resizeCanvas(true);render();drawPreviews();
    if(_panelOpen)renderMobPanel();
    setTimeout(()=>{resizeCanvas(true);render();},150);
    setTimeout(()=>{resizeCanvas(true);render();},400);
  }catch(er){showToast('Error: '+er.message);}
  showLoading(false);
}
async function loadRemoteImg(imgUrl){
  try{
    const res=await fetch(`${WORKER}?image=${encodeURIComponent(imgUrl)}`);
    if(!res.ok)throw new Error();
    const blob=await res.blob();
    const bu=URL.createObjectURL(blob);
    return new Promise(r=>{
      const img=new Image();
      img.onload=()=>{S.bgImg=img;resetImgSliders();resizeCanvas(true);render();drawPreviews();setTimeout(()=>{resizeCanvas(true);render();},300);r();};
      img.onerror=()=>{showToast('No se pudo cargar la imagen.');r();};
      img.src=bu;
    });
  }catch{
    return new Promise(r=>{
      const img=new Image();img.crossOrigin='anonymous';
      img.onload=()=>{S.bgImg=img;resetImgSliders();resizeCanvas(true);render();drawPreviews();setTimeout(()=>{resizeCanvas(true);render();},300);r();};
      img.onerror=()=>{showToast('Subí la imagen manualmente.');r();};
      img.src=imgUrl;
    });
  }
}
function loadLocalImg(ev){
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=e=>{
    const img=new Image();
    img.onload=()=>{S.bgImg=img;resetImgSliders();render();drawPreviews();};
    img.src=e.target.result;
  };
  rd.readAsDataURL(f);
}
function loadLogo(ev){
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=e=>{
    const img=new Image();
    img.onload=()=>{S.logoImg=img;ELS.logo={x:null,y:null,w:null,h:null,visible:true};render();};
    img.src=e.target.result;
  };
  rd.readAsDataURL(f);
}

// ── TEMPLATE PREVIEWS ──
function drawPreviews(){
  ['normal','moderna','banda','impacto','diagonal','verde'].forEach(k=>{
    const c=document.getElementById('tp-'+k);
    if(c) drawPreviewOnCanvas(c,k);
  });
}

// ── EXPORT ──
// Renderizar sin UI al canvas, devuelve Promise<blob>
function renderClean(){
  return new Promise(resolve=>{
    const prev=S.active;
    S.active=null;
    render(); // render sin handles
    // Esperar un frame para que el canvas esté actualizado
    requestAnimationFrame(()=>{
      canvas.toBlob(blob=>{
        S.active=prev;
        render(); // restaurar con handles
        resolve(blob);
      },'image/jpeg',.93);
    });
  });
}

function clearAll(){
  S.title=''; S.cat=''; S.bgImg=null;
  S.iDark=0; S.iBlur=0; S.imgX=0; S.imgY=0;
  S.ovActive=false; S.ovCol='#000000'; S.ovOp=0.5;
  S.tCol='#ffffff'; S.tBg='#000000'; S.tBgOp=0.8;
  S.cCol='#ffffff'; S.cBg='#000000'; S.cBgOp=0;
  resetEls();
  // Reset UI inputs
  document.getElementById('titIn').value='';
  document.getElementById('catIn').value='';
  document.getElementById('urlIn').value='';
  // Reset sliders desktop
  ['iDark','iBlur','imgX','imgY','tBgOp','cBgOp'].forEach(k=>{
    const el=document.getElementById('r-'+k);
    if(el){
      const defaults={iDark:0,iBlur:0,imgX:0,imgY:0,tBgOp:80,cBgOp:0};
      el.value=defaults[k]||0;
      const rv=document.getElementById('rv-'+k);
      if(rv&&RMAP[k])rv.textContent=RMAP[k].s(+(defaults[k]||0));
    }
  });
  const ovTog=document.getElementById('ovTog');
  if(ovTog)ovTog.checked=false;
  render(); drawPreviews();
  if(_panelOpen) renderMobPanel();
  showToast('✅ Placa reiniciada');
}

async function exportImg(mode){
  const blob=await renderClean();
  if(mode==='download'){
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;
    a.download=`mediamendoza-${S.fmt}-${Date.now()}.jpg`;
    document.body.appendChild(a);a.click();
    setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},1000);
    showToast('✅ Imagen descargada');
  } else {
    // Copiar: usar blob PNG limpio (sin UI) ya generado por renderClean
    const pngBlob = await new Promise(res => {
      const prev = S.active;
      S.active = null;
      render();
      requestAnimationFrame(() => {
        canvas.toBlob(b => {
          S.active = prev;
          render();
          res(b);
        }, 'image/png');
      });
    });
    try{
      await navigator.clipboard.write([new ClipboardItem({'image/png': pngBlob})]);
      showToast('✅ Copiado al portapapeles');
    }catch{
      const url = URL.createObjectURL(pngBlob);
      window.open(url,'_blank');
      showToast('Abrí en nueva pestaña → clic derecho → Copiar imagen');
    }
  }
}

function showLoading(v){document.getElementById('lov').style.display=v?'flex':'none';}
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}


// ── MOBILE TAB SYSTEM ──
const MOB_PANELS = {
  noticia: ()=>`
    <label class="fl" style="margin-top:4px">Formato</label>
    <select onchange="setFmt(this.value);this.blur()" style="margin-bottom:8px">
      ${['sq','story','portrait','fb','tw'].map(f=>`<option value="${f}" ${S.fmt===f?'selected':''}>${{sq:'Instagram Cuadrado (1080×1080)',story:'Historia (1080×1920)',portrait:'Portrait (1080×1350)',fb:'Facebook (1200×628)',tw:'Twitter / X (1600×900)'}[f]}</option>`).join('')}
    </select>
    <div class="urlrow">
      <input type="url" id="m-urlIn" placeholder="https://mediamendoza.com/..." value="${document.getElementById('urlIn').value}">
      <button class="urlbtn" onclick="mobFetch()">→</button>
    </div>
    <label class="fl">Título</label>
    <textarea id="m-titIn" rows="2">${S.title}</textarea>
    <label class="fl">Categoría</label>
    <input type="text" id="m-catIn" value="${S.cat}" placeholder="Ej: Mendoza...">
    <label class="uplbl" for="m-imgUp">📁 Subir imagen</label>
    <input type="file" id="m-imgUp" accept="image/*">`,

  plantilla: ()=>`
    <div class="tpl-grid">
      ${['normal','moderna','banda','impacto','diagonal','verde'].map(k=>`
        <div class="tpl-btn ${S.tpl===k?'on':''}" onclick="setTpl('${k}');renderMobPanel()">
          <canvas class="tpl-prev" id="mtp-${k}"></canvas>
          <div class="tpl-name">${{normal:'Normal',moderna:'Moderna',banda:'Banda',impacto:'Impacto',diagonal:'Diagonal',verde:'Verde MM'}[k]}</div>
        </div>`).join('')}
    </div>`,

  imagen: ()=>`
    <label class="fl" style="margin-top:4px">Oscurecer <span class="rval" id="m-rv-iDark">${Math.round(S.iDark*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.iDark*100)}" oninput="S.iDark=this.value/100;document.getElementById('m-rv-iDark').textContent=this.value+'%';syncSlider('iDark',this.value);render()"></div>
    <label class="fl">Blur <span class="rval" id="m-rv-iBlur">${S.iBlur}px</span></label>
    <div class="rrow"><input type="range" min="0" max="20" value="${S.iBlur}" oninput="S.iBlur=+this.value;document.getElementById('m-rv-iBlur').textContent=this.value+'px';syncSlider('iBlur',this.value);render()"></div>
    <label class="fl">Posición horizontal <span class="rval" id="m-rv-imgX">${S.imgX==0?'Centro':S.imgX<0?'← '+Math.abs(Math.round(S.imgX*100))+'%':'→ '+Math.round(S.imgX*100)+'%'}</span></label>
    <div class="rrow"><input type="range" min="-100" max="100" value="${Math.round(S.imgX*100)}" oninput="S.imgX=this.value/100;document.getElementById('m-rv-imgX').textContent=(+this.value==0?'Centro':this.value<0?'← '+Math.abs(this.value)+'%':'→ '+this.value+'%');syncSlider('imgX',this.value);render()"></div>
    <label class="fl">Posición vertical <span class="rval" id="m-rv-imgY">${S.imgY==0?'Centro':S.imgY<0?'↑ '+Math.abs(Math.round(S.imgY*100))+'%':'↓ '+Math.round(S.imgY*100)+'%'}</span></label>
    <div class="rrow"><input type="range" min="-100" max="100" value="${Math.round(S.imgY*100)}" oninput="S.imgY=this.value/100;document.getElementById('m-rv-imgY').textContent=(+this.value==0?'Centro':this.value<0?'↑ '+Math.abs(this.value)+'%':'↓ '+this.value+'%');syncSlider('imgY',this.value);render()"></div>`,

  titulo: ()=>`
    <label class="fl" style="margin-top:4px">Color de texto</label>
    <div class="swatches">
      <input type="color" value="${S.tCol}" oninput="S.tCol=this.value;render()">
      ${['#ffffff','#111111','#a6ce39','#f5c518'].map(c=>`<div class="sw ${S.tCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.tCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Fondo del recuadro</label>
    <div class="swatches">
      <input type="color" value="${S.tBg==='transparent'?'#000000':S.tBg}" oninput="S.tBg=this.value;render()">
      ${['#000000','#a6ce39','#8fb82d','transparent'].map(c=>`<div class="sw ${S.tBg===c?'on':''} ${c==='transparent'?'sw-transp':''}" style="${c!=='transparent'?'background:'+c:''}" onclick="S.tBg='${c}';render();renderMobPanel()" title="${c==='transparent'?'Sin fondo':''}"></div>`).join('')}
    </div>
    <label class="fl">Opacidad del fondo <span class="rval" id="m-rv-tBgOp">${Math.round(S.tBgOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.tBgOp*100)}" oninput="S.tBgOp=this.value/100;document.getElementById('m-rv-tBgOp').textContent=this.value+'%';syncSlider('tBgOp',this.value);render()"></div>`,

  categoria: ()=>`
    <label class="fl" style="margin-top:4px">Color de texto</label>
    <div class="swatches">
      <input type="color" value="${S.cCol}" oninput="S.cCol=this.value;render()">
      ${['#111111','#ffffff','#a6ce39'].map(c=>`<div class="sw ${S.cCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.cCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Color de fondo</label>
    <div class="swatches">
      <input type="color" value="${S.cBg}" oninput="S.cBg=this.value;render()">
      ${['#a6ce39','#8fb82d','#ffffff','#111111'].map(c=>`<div class="sw ${S.cBg===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.cBg='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Opacidad del fondo <span class="rval" id="m-rv-cBgOp">${Math.round(S.cBgOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.cBgOp*100)}" oninput="S.cBgOp=this.value/100;document.getElementById('m-rv-cBgOp').textContent=this.value+'%';syncSlider('cBgOp',this.value);render()"></div>`,

  capa: ()=>`
    <div class="togrow" style="margin-top:4px">
      <span style="font-size:.8rem;color:var(--g80)">Activar capa de color</span>
      <label class="toggle"><input type="checkbox" id="m-ovTog" ${document.getElementById('ovTog').checked?'checked':''} onchange="document.getElementById('ovTog').checked=this.checked;render()"><span class="togslide"></span></label>
    </div>
    <label class="fl">Color</label>
    <div class="swatches">
      <input type="color" value="${S.ovCol}" oninput="S.ovCol=this.value;render()">
      ${['#000000','#1a1a1a','#a6ce39','#ffffff'].map(c=>`<div class="sw ${S.ovCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.ovCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Opacidad <span class="rval" id="m-rv-ovOp">${Math.round(S.ovOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.ovOp*100)}" oninput="S.ovOp=this.value/100;document.getElementById('m-rv-ovOp').textContent=this.value+'%';syncSlider('ovOp',this.value);render()"></div>`,

  logo: ()=>`
    <label class="uplbl" for="m-logoUp">📁 Cambiar logo</label>
    <input type="file" id="m-logoUp" accept="image/*">
    <label class="fl">Opacidad <span class="rval" id="m-rv-lOp">${Math.round(S.lOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="10" max="100" value="${Math.round(S.lOp*100)}" oninput="S.lOp=this.value/100;document.getElementById('m-rv-lOp').textContent=this.value+'%';syncSlider('lOp',this.value);render()"></div>`,
};

let _activeTab = 'noticia';
let _panelOpen = false;

// iOS Safari fix: registrar touchstart en los tabs
function initTabTouchEvents(){
  document.querySelectorAll('.mob-tab').forEach(btn=>{
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      mobTab(this.dataset.key, this);
    }, {passive:false});
  });
}

function mobTab(key, tabEl){
  const panel = document.getElementById('mobPanel');
  const canvasArea = document.getElementById('canvasArea');
  if(_activeTab === key && _panelOpen){
    // cerrar con animación
    panel.classList.add('closing');
    canvasArea.classList.remove('panel-open'); // canvas crece durante animación
    document.querySelectorAll('.mob-tab').forEach(t=>t.classList.remove('on'));
    _panelOpen = false;
    setTimeout(()=>{
      panel.classList.remove('open');
      panel.classList.remove('closing');
      resizeCanvas(true); render(); // redibujar manteniendo posiciones
    }, 260);
    return;
  }
  _activeTab = key;
  _panelOpen = true;
  document.querySelectorAll('.mob-tab').forEach(t=>t.classList.remove('on'));
  tabEl.classList.add('on');
  renderMobPanel();
  panel.classList.remove('closing');
  panel.classList.add('open');
  canvasArea.classList.add('panel-open');
  // redibujar tras la transición (doble para iOS/Android)
  setTimeout(()=>{ resizeCanvas(true); render(); }, 280);
  setTimeout(()=>{ resizeCanvas(true); render(); }, 350);
}

function renderMobPanel(){
  const inner = document.getElementById('mobPanelInner');
  if(!inner) return;
  inner.innerHTML = MOB_PANELS[_activeTab]?MOB_PANELS[_activeTab]():'';
  // bind events
  bindMobEvents();
  // draw previews in plantilla panel
  if(_activeTab==='plantilla'){
    requestAnimationFrame(()=>{
      ['normal','moderna','banda','impacto','diagonal','verde'].forEach(k=>{
        const c=document.getElementById('mtp-'+k);if(!c)return;
        drawPreviewOnCanvas(c,k);
      });
    });
  }
}

function bindMobEvents(){
  const mi=document.getElementById('m-imgUp');
  if(mi) mi.addEventListener('change',loadLocalImg);
  const ml=document.getElementById('m-logoUp');
  if(ml) ml.addEventListener('change',loadLogo);
  const mt=document.getElementById('m-titIn');
  if(mt) mt.addEventListener('input',e=>{S.title=e.target.value;document.getElementById('titIn').value=e.target.value;render();});
  const mc=document.getElementById('m-catIn');
  if(mc) mc.addEventListener('input',e=>{S.cat=e.target.value;document.getElementById('catIn').value=e.target.value;render();});
}

function mobFetch(){
  const u=document.getElementById('m-urlIn');
  if(u){document.getElementById('urlIn').value=u.value;}
  fetchUrl();
}

function syncSlider(key, val){
  // sincronizar con el slider del sidebar desktop
  const el=document.getElementById('r-'+key);
  if(el) el.value=val;
  const rv=document.getElementById('rv-'+key);
  if(rv&&RMAP[key]) rv.textContent=RMAP[key].s(+val);
}

// ── INIT ──
function init(){
  const img=new Image();
  img.onload=()=>{S.logoImg=img;render();drawPreviews();};
  img.src='data:image/png;base64,'+LOGO_B64;
  document.getElementById('hLogo').src='data:image/png;base64,'+LOGO_B64;
  // Esperar un frame para que el DOM mobile tenga dimensiones correctas
  // Doble rAF: iOS Safari necesita dos frames para tener dimensiones correctas
  // Desktop: abrir primer acordeón
  if(window.innerWidth>700){
    const firstHead=document.querySelector('.acc-head');
    if(firstHead&&!firstHead.classList.contains('open'))toggleAcc(firstHead);
  }
  // Mobile: canvas arranca grande, sin panel abierto
  if(window.innerWidth<=700) initTabTouchEvents();
  // Primer render: doble rAF + timeout para garantizar layout completo en todos los browsers
  function doFirstRender(){resizeCanvas();render();drawPreviews();}
  requestAnimationFrame(()=>requestAnimationFrame(doFirstRender));
  setTimeout(doFirstRender, 200);
}
window.addEventListener('resize',()=>{resizeCanvas(true);render();});
window.addEventListener('load',init);const WORKER='https://twilight-river-3072.mhhurtado.workers.dev';
const LOGO_B64='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';

const FMTS={
  sq:      {w:1080,h:1080,lbl:'Instagram Cuadrado — 1080×1080'},
  story:   {w:1080,h:1920,lbl:'Historia — 1080×1920'},
  portrait:{w:1080,h:1350,lbl:'Portrait — 1080×1350'},
  fb:      {w:1200,h:628, lbl:'Facebook — 1200×628'},
  tw:      {w:1600,h:900, lbl:'Twitter/X — 1600×900'},
};

let ELS={
  title:{x:null,y:null,w:null,h:null,visible:true},
  cat:  {x:null,y:null,w:null,h:null,visible:true},
  logo: {x:null,y:null,w:null,h:null,visible:true},
};

let S={
  fmt:'sq', tpl:'normal',
  bgImg:null, iDark:0, iBlur:0, imgX:0, imgY:0,
  ovActive:false, ovCol:'#000000', ovOp:.5,
  title:'', tCol:'#ffffff', tBg:'#000000', tBgOp:.8,
  cat:'',   cCol:'#ffffff', cBg:'#000000', cBgOp:0,
  logoImg:null, lOp:1,
  active:null,
  action:null,
  dragOff:{x:0,y:0},
  resizeStart:null,
};

const canvas=document.getElementById('mc');
const ctx=canvas.getContext('2d');
let scale=1;
const HR=16;

// ── ACCORDION ──
function toggleAcc(head){
  const body=head.nextElementSibling;
  const isOpen=head.classList.contains('open');
  // cierra todos
  document.querySelectorAll('.acc-head.open').forEach(h=>{
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
  if(!isOpen){
    head.classList.add('open');
    body.classList.add('open');
  }
}

// ── CANVAS SIZE ──
function resizeCanvas(keepEls){
  const fmt=FMTS[S.fmt];
  const area=document.getElementById('canvasArea');
  const isMobile=window.innerWidth<=700;
  let avW,avH;
  if(isMobile){
    // iOS Safari no reporta bien getBoundingClientRect en position:fixed
    // Calcular directo desde window menos alturas conocidas de los elementos fijos
    const TB=52, EB=58, TABS=48;
    const panelH=(typeof _panelOpen!=='undefined'&&_panelOpen) ? Math.round(window.innerHeight*0.32) : 0;
    avW=window.innerWidth-16;
    avH=window.innerHeight-TB-EB-TABS-panelH-16;
  } else {
    avW=area.clientWidth-32;
    avH=area.clientHeight-32;
  }
  const ratio=fmt.w/fmt.h;
  let dw,dh;
  if(ratio>=1){dw=Math.min(avW,fmt.w);dh=dw/ratio;if(dh>avH){dh=avH;dw=dh*ratio;}}
  else{dh=Math.min(avH,fmt.h);dw=dh*ratio;if(dw>avW){dw=avW;dh=dw/ratio;}}
  dw=Math.floor(dw);dh=Math.floor(dh);
  canvas.style.width=dw+'px';canvas.style.height=dh+'px';
  canvas.width=fmt.w;canvas.height=fmt.h;
  scale=fmt.w/dw;
  // Solo resetear posiciones si se pide explícitamente (cambio de formato/plantilla)
  if(!keepEls) resetEls();
}

function resetEls(){
  ELS={
    title:{x:null,y:null,w:null,h:null,visible:true},
    cat:  {x:null,y:null,w:null,h:null,visible:true},
    logo: {x:null,y:null,w:null,h:null,visible:true},
  };
}

// ── DEFAULT POSITIONS ──
function defaultPos(key){
  const fmt=FMTS[S.fmt];
  const W=fmt.w,H=fmt.h,pad=Math.round(W*.045);
  if(key==='title'){
    const w=Math.round(W*.82),h=Math.round(H*.19);
    const x=Math.round((W-w)/2);
    const y=S.tpl==='normal'?Math.round((H-h)/2):Math.round(H*.52);
    return{x,y,w,h};
  }
  if(key==='cat'){
    const w=Math.round(W*.36),h=Math.round(H*.072);
    if(S.tpl==='normal')return{x:Math.round((W-w)/2),y:pad,w,h};
    if(S.tpl==='banda'||S.tpl==='verde'){
      return{x:pad,y:H-Math.round(H*.32)+Math.round(H*.01),w,h};
    }
    return{x:pad,y:Math.round(H*.46),w,h};
  }
  if(key==='logo'){
    if(!S.logoImg)return{x:pad,y:pad,w:Math.round(W*.26),h:Math.round(W*.09)};
    const lw=Math.round(W*.26); // tamaño grande
    const lh=Math.round(lw*(S.logoImg.height/S.logoImg.width));
    if(S.tpl==='normal')return{x:Math.round((W-lw)/2),y:H-lh-pad,w:lw,h:lh};
    return{x:W-lw-pad,y:pad,w:lw,h:lh};
  }
}
function ensurePos(key){
  const el=ELS[key];
  if(el.x===null){const d=defaultPos(key);el.x=d.x;el.y=d.y;el.w=d.w;el.h=d.h;}
}

// ── TEMPLATES ──
const TPLS={
  normal(W,H){},
  moderna(W,H){const g=ctx.createLinearGradient(0,H*.38,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.82)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);},
  banda(W,H){const bh=Math.round(H*.32);ctx.fillStyle='rgba(0,0,0,.88)';ctx.fillRect(0,H-bh,W,bh);ctx.fillStyle='#a6ce39';ctx.fillRect(0,H-bh,W,Math.round(H*.018));},
  impacto(W,H){ctx.fillStyle='rgba(0,0,0,.52)';ctx.fillRect(0,0,W,H);ctx.fillStyle='#a6ce39';ctx.fillRect(0,0,Math.round(W*.025),H);},
  diagonal(W,H){const g=ctx.createLinearGradient(0,H,W*.7,0);g.addColorStop(0,'rgba(0,0,0,.88)');g.addColorStop(.6,'rgba(0,0,0,.3)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);},
  verde(W,H){const bh=Math.round(H*.32);ctx.fillStyle='#a6ce39';ctx.fillRect(0,H-bh,W,bh);ctx.fillStyle='rgba(255,255,255,.22)';ctx.fillRect(0,H-bh,W,2);},
};

// ── RENDER ──
function render(){
  const fmt=FMTS[S.fmt];const W=fmt.w,H=fmt.h;
  ctx.clearRect(0,0,W,H);
  // BG
  if(S.bgImg){
    ctx.save();
    if(S.iBlur>0)ctx.filter=`blur(${S.iBlur}px)`;
    const img=S.bgImg,ir=img.width/img.height,cr=W/H;
    let sx,sy,sw,sh;
    if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
    const extraX=img.width-sw,extraY=img.height-sh;
    sx=Math.max(0,Math.min(extraX,sx+extraX*S.imgX));
    sy=Math.max(0,Math.min(extraY,sy+extraY*S.imgY));
    const p=S.iBlur*4;
    ctx.drawImage(img,sx,sy,sw,sh,-p,-p,W+p*2,H+p*2);
    ctx.filter='none';ctx.restore();
    if(S.iDark>0){ctx.save();ctx.globalAlpha=S.iDark;ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);ctx.restore();}
  } else {
    ctx.fillStyle='#dedad3';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#aaa';ctx.font=`${Math.round(W*.022)}px Montserrat,sans-serif`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('Pegá un link o subí una imagen',W/2,H/2);
    ctx.textAlign='left';
  }
  // Template
  (TPLS[S.tpl]||TPLS.normal)(W,H);
  // Overlay
  if(document.getElementById('ovTog').checked&&S.ovOp>0){
    ctx.save();ctx.globalAlpha=S.ovOp;ctx.fillStyle=S.ovCol;ctx.fillRect(0,0,W,H);ctx.restore();
  }
  // Elementos
  ensurePos('logo'); drawLogo();
  ensurePos('cat');  drawCat();
  ensurePos('title');drawTitle();
  // UI
  if(S.active)drawActiveUI(W,H);
}

// ── HELPERS ──
function toTitleCase(str){
  return str.replace(/\w\S*/g,t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase());
}
function wrapText(ctx,text,maxW){
  if(!text||maxW<=0)return[];
  const words=text.split(' ').filter(w=>w.length>0);
  const lines=[];let cur='';
  for(const w of words){
    const test=cur?cur+' '+w:w;
    if(cur&&ctx.measureText(test).width>maxW){lines.push(cur);cur=w;}
    else cur=test;
  }
  if(cur.trim())lines.push(cur);
  return lines.filter(l=>l.trim().length>0);
}
function roundRect(ctx,x,y,w,h,r){
  r=Math.min(r,w/2,h/2);
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();
}
function hexRgb(hex){
  if(!hex||hex==='transparent')return{r:0,g:0,b:0};
  return{r:parseInt(hex.slice(1,3),16),g:parseInt(hex.slice(3,5),16),b:parseInt(hex.slice(5,7),16)};
}
function resetImgSliders(){
  ['imgX','imgY'].forEach(k=>{
    const el=document.getElementById('r-'+k);if(el)el.value=0;
    const rv=document.getElementById('rv-'+k);if(rv)rv.textContent='Centro';
  });
  S.imgX=0;S.imgY=0;
}

function drawPreviewOnCanvas(c,k){
  const tc=c.getContext('2d');const W=c.width,H=c.height;
  tc.clearRect(0,0,W,H);
  if(S.bgImg){
    const img=S.bgImg,ir=img.width/img.height,cr=W/H;
    let sx,sy,sw,sh;
    if(ir>cr){sh=img.height;sw=sh*cr;sx=(img.width-sw)/2;sy=0;}
    else{sw=img.width;sh=sw/cr;sx=0;sy=(img.height-sh)/2;}
    tc.drawImage(img,sx,sy,sw,sh,0,0,W,H);
  }else{tc.fillStyle='#d5d2cb';tc.fillRect(0,0,W,H);}
  const ov={
    normal:()=>{},
    moderna:()=>{const g=tc.createLinearGradient(0,H*.35,0,H);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.8)');tc.fillStyle=g;tc.fillRect(0,0,W,H);},
    banda:()=>{tc.fillStyle='rgba(0,0,0,.85)';tc.fillRect(0,H*.62,W,H*.38);tc.fillStyle='#a6ce39';tc.fillRect(0,H*.62,W,H*.03);},
    impacto:()=>{tc.fillStyle='rgba(0,0,0,.52)';tc.fillRect(0,0,W,H);tc.fillStyle='#a6ce39';tc.fillRect(0,0,W*.07,H);},
    diagonal:()=>{const g=tc.createLinearGradient(0,H,W*.7,0);g.addColorStop(0,'rgba(0,0,0,.88)');g.addColorStop(.6,'rgba(0,0,0,.28)');g.addColorStop(1,'rgba(0,0,0,0)');tc.fillStyle=g;tc.fillRect(0,0,W,H);},
    verde:()=>{tc.fillStyle='#a6ce39';tc.fillRect(0,H*.62,W,H*.38);},
  };
  if(ov[k])ov[k]();
  tc.fillStyle='#fff';tc.font=`bold ${Math.round(H*.1)}px BebasNeue,sans-serif`;
  tc.textBaseline='bottom';tc.textAlign='left';
  tc.fillText('TÍTULO',W*.07,H*.93);
}

// ── DRAW FUNCTIONS ──
function drawLogo(){
  const el=ELS.logo;
  if(!el.visible||!S.logoImg)return;
  ctx.save();ctx.globalAlpha=S.lOp;
  ctx.drawImage(S.logoImg,el.x,el.y,el.w,el.h);
  ctx.restore();
}

function drawCat(){
  const el=ELS.cat;
  if(!el.visible||!S.cat)return;
  ctx.save();
  const pad=Math.round(el.w*.04);
  const aw=el.w-pad*2;
  if(aw<=0){ctx.restore();return;}
  let sz=Math.max(8,Math.round(el.h*.58));
  let lines, lh, bh;
  for(let i=0;i<20;i++){
    ctx.font=`700 ${sz}px 'Economica',sans-serif`;
    lines=wrapText(ctx,toTitleCase(S.cat),aw);
    lh=sz*1.15;
    bh=lines.length*lh;
    if(bh<=el.h*0.95||sz<=8)break;
    sz=Math.max(8,Math.round(sz*0.88));
  }
  ctx.textBaseline='top';
  const sy=el.y+(el.h-bh)/2;
  const cx=el.x+el.w/2;
  const r=hexRgb(S.cBg);
  ctx.fillStyle=`rgba(${r.r},${r.g},${r.b},${S.cBgOp})`;
  roundRect(ctx,el.x,el.y,el.w,el.h,5);ctx.fill();
  ctx.fillStyle=S.cCol;ctx.textAlign='center';
  lines.forEach((l,i)=>ctx.fillText(l,cx,sy+i*lh));
  ctx.restore();
}

function drawTitle(){
  const el=ELS.title;
  if(!el.visible||!S.title)return;
  ctx.save();
  const pad=Math.round(el.w*.025);
  const aw=el.w-pad*2;
  if(aw<=0){ctx.restore();return;}
  let sz=Math.max(10,Math.round(el.h*.38));
  let lines, lh, bh;
  // Reducir sz hasta que el bloque de texto quepa dentro de el.h
  for(let i=0;i<20;i++){
    ctx.font=`400 ${sz}px 'BebasNeue',sans-serif`;
    lines=wrapText(ctx,S.title,aw);
    lh=sz*1.15;
    bh=lines.length*lh;
    if(bh<=el.h*0.95||sz<=10)break;
    sz=Math.max(10,Math.round(sz*0.88));
  }
  ctx.textBaseline='top';
  const sy=el.y+(el.h-bh)/2;
  const cx=el.x+el.w/2;
  if(S.tBg!=='transparent'&&S.tBgOp>0){
    const r=hexRgb(S.tBg);
    ctx.fillStyle=`rgba(${r.r},${r.g},${r.b},${S.tBgOp})`;
    roundRect(ctx,el.x,el.y,el.w,el.h,6);ctx.fill();
  }
  ctx.fillStyle=S.tCol;ctx.textAlign='center';
  lines.forEach((l,i)=>ctx.fillText(l,cx,sy+i*lh));
  ctx.restore();
}

// ── HANDLES & HIT ──
function getHandles(key){
  const el=ELS[key];if(!el||el.x===null)return[];
  const H=[
    {x:el.x,       y:el.y,        id:'nw',type:'corner'},
    {x:el.x+el.w,  y:el.y,        id:'ne',type:'corner'},
    {x:el.x,       y:el.y+el.h,   id:'sw',type:'corner'},
    {x:el.x+el.w,  y:el.y+el.h,   id:'se',type:'corner'},
  ];
  if(key!=='logo'){
    H.push({x:el.x,      y:el.y+el.h/2, id:'w', type:'side'});
    H.push({x:el.x+el.w, y:el.y+el.h/2, id:'e', type:'side'});
  }
  return H;
}

function drawActiveUI(W,H){
  const el=ELS[S.active];if(!el||el.x===null)return;
  const cx=el.x+el.w/2,cy=el.y+el.h/2;
  const lw=Math.max(2,Math.round(W*.0016));
  const hs=Math.round(HR*(W/1080));
  ctx.save();
  ctx.strokeStyle='rgba(166,206,57,.6)';ctx.lineWidth=lw;
  ctx.setLineDash([Math.round(W*.007),Math.round(W*.005)]);
  ctx.beginPath();ctx.moveTo(W/2,0);ctx.lineTo(W/2,H);ctx.stroke();
  ctx.beginPath();ctx.moveTo(0,H/2);ctx.lineTo(W,H/2);ctx.stroke();
  ctx.setLineDash([]);ctx.restore();
  const cs=Math.round(W*.022);
  ctx.save();
  ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=Math.max(2,Math.round(W*.002));
  ctx.beginPath();ctx.moveTo(cx-cs,cy);ctx.lineTo(cx+cs,cy);ctx.stroke();
  ctx.beginPath();ctx.moveTo(cx,cy-cs);ctx.lineTo(cx,cy+cs);ctx.stroke();
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(cx,cy,Math.round(W*.004),0,Math.PI*2);ctx.fill();
  ctx.restore();
  ctx.save();ctx.strokeStyle='rgba(166,206,57,.9)';ctx.lineWidth=lw*1.5;
  roundRect(ctx,el.x,el.y,el.w,el.h,4);ctx.stroke();ctx.restore();
  getHandles(S.active).forEach(hd=>{
    ctx.save();
    ctx.fillStyle='#fff';ctx.strokeStyle='#a6ce39';ctx.lineWidth=Math.max(2,Math.round(W*.002));
    if(hd.type==='side'){
      const hw=hs*.65,hh=hs*1.3;
      roundRect(ctx,hd.x-hw/2,hd.y-hh/2,hw,hh,hw/2);
    }else{
      ctx.beginPath();ctx.arc(hd.x,hd.y,hs*.55,0,Math.PI*2);
    }
    ctx.fill();ctx.stroke();ctx.restore();
  });
}

// ── INTERACTION ──
function getPos(e){
  const rect=canvas.getBoundingClientRect();
  const t=e.touches?e.touches[0]:e;
  return{x:(t.clientX-rect.left)*scale,y:(t.clientY-rect.top)*scale};
}
function getHandleHit(pos,key){
  const base=Math.round(HR*(FMTS[S.fmt].w/1080));
  for(const h of getHandles(key)){
    const hs=h.type==='corner'?base*2.5:base*2;
    if(Math.abs(pos.x-h.x)<hs&&Math.abs(pos.y-h.y)<hs)return h.id;
  }
  return null;
}
function hitEl(pos){
  const order=S.active?[S.active,...['title','cat','logo'].filter(k=>k!==S.active)]:['title','cat','logo'];
  for(const k of order){
    const el=ELS[k];
    if(!el||el.x===null||!el.visible)continue;
    if(pos.x>=el.x&&pos.x<=el.x+el.w&&pos.y>=el.y&&pos.y<=el.y+el.h)return k;
  }
  return null;
}

// Calcula cuántas líneas tiene el texto con un ancho dado y un sz dado

// Calcula el alto mínimo para contener N líneas de sz dado

canvas.addEventListener('mousedown',onDown);
canvas.addEventListener('touchstart',onDown,{passive:false});
canvas.addEventListener('mousemove',onMove);
canvas.addEventListener('touchmove',onMove,{passive:false});
canvas.addEventListener('mouseup',onUp);
canvas.addEventListener('touchend',onUp);

function onDown(e){
  if(e.touches)e.preventDefault();
  const pos=getPos(e);
  if(S.active){
    const hid=getHandleHit(pos,S.active);
    if(hid){
      S.action='resize-'+hid;
      S.resizeStart={pos:{...pos},rect:{...ELS[S.active]},
        logoAR:S.active==='logo'&&S.logoImg?S.logoImg.width/S.logoImg.height:null};
      return;
    }
  }
  const k=hitEl(pos);
  if(k){S.active=k;S.action='drag';S.dragOff={x:pos.x-ELS[k].x,y:pos.y-ELS[k].y};}
  else{S.active=null;S.action=null;}
  render();
}

function onMove(e){
  if(e.touches)e.preventDefault();
  const pos=getPos(e);
  const{w:W,h:H}=FMTS[S.fmt];
  const SNAP=W*.014;
  if(!S.action){
    if(S.active){
      const hid=getHandleHit(pos,S.active);
      if(hid){const cur={nw:'nw-resize',ne:'ne-resize',sw:'sw-resize',se:'se-resize',w:'ew-resize',e:'ew-resize'};canvas.style.cursor=cur[hid]||'crosshair';return;}
    }
    canvas.style.cursor=hitEl(pos)?'grab':'default';return;
  }
  const el=ELS[S.active];
  if(S.action==='drag'){
    let nx=pos.x-S.dragOff.x,ny=pos.y-S.dragOff.y;
    const ecx=nx+el.w/2,ecy=ny+el.h/2;
    if(Math.abs(ecx-W/2)<SNAP)nx=W/2-el.w/2;
    if(Math.abs(ecy-H/2)<SNAP)ny=H/2-el.h/2;
    el.x=nx;el.y=ny;
  }
  if(S.action.startsWith('resize-')){
    const corner=S.action.slice(7),rs=S.resizeStart;
    const dx=pos.x-rs.pos.x,dy=pos.y-rs.pos.y;
    const MIN=W*.04;
    let{x,y,w,h}=rs.rect;
    if(rs.logoAR){
      if(corner==='se'){w=Math.max(MIN,w+dx);h=w/rs.logoAR;}
      else if(corner==='sw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;h=w/rs.logoAR;}
      else if(corner==='ne'){w=Math.max(MIN,w+dx);const nh=w/rs.logoAR;y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='nw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;const nh=w/rs.logoAR;y=rs.rect.y+rs.rect.h-nh;h=nh;}
    } else {
      if(corner==='se'){w=Math.max(MIN,w+dx);h=Math.max(MIN,h+dy);}
      else if(corner==='sw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;h=Math.max(MIN,h+dy);}
      else if(corner==='ne'){w=Math.max(MIN,w+dx);const nh=Math.max(MIN,h-dy);y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='nw'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;const nh=Math.max(MIN,h-dy);y=rs.rect.y+rs.rect.h-nh;h=nh;}
      else if(corner==='e'){w=Math.max(MIN,w+dx);}
      else if(corner==='w'){const nw=Math.max(MIN,w-dx);x=rs.rect.x+rs.rect.w-nw;w=nw;}
    }
    el.x=x;el.y=y;el.w=w;el.h=h;
  }
  render();
}
function onUp(){S.action=null;canvas.style.cursor=S.active?'grab':'default';}
function setFmt(f){
  S.fmt=f;resetEls();
  document.querySelectorAll('[id^="fp-"]').forEach(el=>el.classList.remove('on'));
  const el=document.getElementById('fp-'+f);if(el)el.classList.add('on');
  document.querySelectorAll('select[id="fmtSel"],select[onchange*="setFmt"]').forEach(s=>{s.value=f;});
  document.getElementById('fmtLbl').textContent=FMTS[f].lbl;
  resizeCanvas();render();drawPreviews();
}
function setTpl(t){
  S.tpl=t;resetEls();
  document.querySelectorAll('.tpl-btn').forEach(b=>b.classList.remove('on'));
  document.getElementById('tpl-'+t).classList.add('on');
  render();
}

// ── CONTROLS ──
const RMAP={
  iDark:{k:'iDark',fn:v=>v/100,s:v=>v+'%'},
  iBlur:{k:'iBlur',fn:v=>v,s:v=>v+'px'},
  imgX: {k:'imgX', fn:v=>v/100,s:v=>v==0?'Centro':v<0?'← '+Math.abs(v)+'%':'→ '+v+'%'},
  imgY: {k:'imgY', fn:v=>v/100,s:v=>v==0?'Centro':v<0?'↑ '+Math.abs(v)+'%':'↓ '+v+'%'},
  ovOp: {k:'ovOp', fn:v=>v/100,s:v=>v+'%'},
  tBgOp:{k:'tBgOp',fn:v=>v/100,s:v=>v+'%'},
  cBgOp:{k:'cBgOp',fn:v=>v/100,s:v=>v+'%'},
  lOp:  {k:'lOp',  fn:v=>v/100,s:v=>v+'%'},
};
function updR(key,el){
  const m=RMAP[key];if(!m)return;
  S[m.k]=m.fn(+el.value);
  document.getElementById('rv-'+key).textContent=m.s(+el.value);
  render();
}
function setSw(inputId,val,el){
  document.getElementById(inputId).value=val==='transparent'?'#000000':val;
  const map={tCol:'tCol',tBg:'tBg',cCol:'cCol',cBg:'cBg',ovCol:'ovCol'};
  if(map[inputId])S[map[inputId]]=val;
  el.closest('.swatches').querySelectorAll('.sw').forEach(s=>s.classList.remove('on'));
  el.classList.add('on');render();
}
['titIn','catIn'].forEach(id=>{
  document.getElementById(id).addEventListener('input',e=>{
    if(id==='titIn')S.title=e.target.value;else S.cat=e.target.value;render();
  });
});

// ── FETCH ──
async function fetchUrl(){
  const url=document.getElementById('urlIn').value.trim();if(!url)return;
  showLoading(true);
  try{
    const res=await fetch(`${WORKER}?url=${encodeURIComponent(url)}`);
    if(!res.ok)throw new Error('Error '+res.status);
    const data=await res.json();
    if(data.error)throw new Error(data.error);
    document.getElementById('titIn').value=data.title||'';S.title=data.title||'';
    const cat=(data.category||'').replace(/_/g,' ');
    document.getElementById('catIn').value=cat;S.cat=cat;
    ELS.title={x:null,y:null,w:null,h:null,visible:true};
    ELS.cat={x:null,y:null,w:null,h:null,visible:true};
    if(data.image)await loadRemoteImg(data.image);
    else showToast('Sin imagen. Subí una manualmente.');
    resizeCanvas(true);render();drawPreviews();
    if(_panelOpen)renderMobPanel();
    // En mobile el canvas puede no estar visible aún — re-render al siguiente frame
    setTimeout(()=>{resizeCanvas(true);render();},100);
  }catch(er){showToast('Error: '+er.message);}
  showLoading(false);
}
async function loadRemoteImg(imgUrl){
  try{
    const res=await fetch(`${WORKER}?image=${encodeURIComponent(imgUrl)}`);
    if(!res.ok)throw new Error();
    const blob=await res.blob();
    const bu=URL.createObjectURL(blob);
    return new Promise(r=>{
      const img=new Image();
      img.onload=()=>{S.bgImg=img;resetImgSliders();resizeCanvas(true);render();drawPreviews();r();};
      img.onerror=()=>{showToast('No se pudo cargar la imagen.');r();};
      img.src=bu;
    });
  }catch{
    return new Promise(r=>{
      const img=new Image();img.crossOrigin='anonymous';
      img.onload=()=>{S.bgImg=img;resetImgSliders();resizeCanvas(true);render();drawPreviews();r();};
      img.onerror=()=>{showToast('Subí la imagen manualmente.');r();};
      img.src=imgUrl;
    });
  }
}
function loadLocalImg(ev){
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=e=>{
    const img=new Image();
    img.onload=()=>{S.bgImg=img;resetImgSliders();render();drawPreviews();};
    img.src=e.target.result;
  };
  rd.readAsDataURL(f);
}
function loadLogo(ev){
  const f=ev.target.files[0];if(!f)return;
  const rd=new FileReader();
  rd.onload=e=>{
    const img=new Image();
    img.onload=()=>{S.logoImg=img;ELS.logo={x:null,y:null,w:null,h:null,visible:true};render();};
    img.src=e.target.result;
  };
  rd.readAsDataURL(f);
}

// ── TEMPLATE PREVIEWS ──
function drawPreviews(){
  ['normal','moderna','banda','impacto','diagonal','verde'].forEach(k=>{
    const c=document.getElementById('tp-'+k);
    if(c) drawPreviewOnCanvas(c,k);
  });
}

// ── EXPORT ──
// Renderizar sin UI al canvas, devuelve Promise<blob>
function renderClean(){
  return new Promise(resolve=>{
    const prev=S.active;
    S.active=null;
    render(); // render sin handles
    // Esperar un frame para que el canvas esté actualizado
    requestAnimationFrame(()=>{
      canvas.toBlob(blob=>{
        S.active=prev;
        render(); // restaurar con handles
        resolve(blob);
      },'image/jpeg',.93);
    });
  });
}

function clearAll(){
  S.title=''; S.cat=''; S.bgImg=null;
  S.iDark=0; S.iBlur=0; S.imgX=0; S.imgY=0;
  S.ovActive=false; S.ovCol='#000000'; S.ovOp=0.5;
  S.tCol='#ffffff'; S.tBg='#000000'; S.tBgOp=0.8;
  S.cCol='#ffffff'; S.cBg='#000000'; S.cBgOp=0;
  resetEls();
  // Reset UI inputs
  document.getElementById('titIn').value='';
  document.getElementById('catIn').value='';
  document.getElementById('urlIn').value='';
  // Reset sliders desktop
  ['iDark','iBlur','imgX','imgY','tBgOp','cBgOp'].forEach(k=>{
    const el=document.getElementById('r-'+k);
    if(el){
      const defaults={iDark:0,iBlur:0,imgX:0,imgY:0,tBgOp:80,cBgOp:0};
      el.value=defaults[k]||0;
      const rv=document.getElementById('rv-'+k);
      if(rv&&RMAP[k])rv.textContent=RMAP[k].s(+(defaults[k]||0));
    }
  });
  const ovTog=document.getElementById('ovTog');
  if(ovTog)ovTog.checked=false;
  render(); drawPreviews();
  if(_panelOpen) renderMobPanel();
  showToast('✅ Placa reiniciada');
}

async function exportImg(mode){
  const blob=await renderClean();
  if(mode==='download'){
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;
    a.download=`mediamendoza-${S.fmt}-${Date.now()}.jpg`;
    document.body.appendChild(a);a.click();
    setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},1000);
    showToast('✅ Imagen descargada');
  } else {
    // Copiar: usar blob PNG limpio (sin UI) ya generado por renderClean
    const pngBlob = await new Promise(res => {
      const prev = S.active;
      S.active = null;
      render();
      requestAnimationFrame(() => {
        canvas.toBlob(b => {
          S.active = prev;
          render();
          res(b);
        }, 'image/png');
      });
    });
    try{
      await navigator.clipboard.write([new ClipboardItem({'image/png': pngBlob})]);
      showToast('✅ Copiado al portapapeles');
    }catch{
      const url = URL.createObjectURL(pngBlob);
      window.open(url,'_blank');
      showToast('Abrí en nueva pestaña → clic derecho → Copiar imagen');
    }
  }
}

function showLoading(v){document.getElementById('lov').style.display=v?'flex':'none';}
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}


// ── MOBILE TAB SYSTEM ──
const MOB_PANELS = {
  noticia: ()=>`
    <label class="fl" style="margin-top:4px">Formato</label>
    <select onchange="setFmt(this.value);this.blur()" style="margin-bottom:8px">
      ${['sq','story','portrait','fb','tw'].map(f=>`<option value="${f}" ${S.fmt===f?'selected':''}>${{sq:'Instagram Cuadrado (1080×1080)',story:'Historia (1080×1920)',portrait:'Portrait (1080×1350)',fb:'Facebook (1200×628)',tw:'Twitter / X (1600×900)'}[f]}</option>`).join('')}
    </select>
    <div class="urlrow">
      <input type="url" id="m-urlIn" placeholder="https://mediamendoza.com/..." value="${document.getElementById('urlIn').value}">
      <button class="urlbtn" onclick="mobFetch()">→</button>
    </div>
    <label class="fl">Título</label>
    <textarea id="m-titIn" rows="2">${S.title}</textarea>
    <label class="fl">Categoría</label>
    <input type="text" id="m-catIn" value="${S.cat}" placeholder="Ej: Mendoza...">
    <label class="uplbl" for="m-imgUp">📁 Subir imagen</label>
    <input type="file" id="m-imgUp" accept="image/*">`,

  plantilla: ()=>`
    <div class="tpl-grid">
      ${['normal','moderna','banda','impacto','diagonal','verde'].map(k=>`
        <div class="tpl-btn ${S.tpl===k?'on':''}" onclick="setTpl('${k}');renderMobPanel()">
          <canvas class="tpl-prev" id="mtp-${k}"></canvas>
          <div class="tpl-name">${{normal:'Normal',moderna:'Moderna',banda:'Banda',impacto:'Impacto',diagonal:'Diagonal',verde:'Verde MM'}[k]}</div>
        </div>`).join('')}
    </div>`,

  imagen: ()=>`
    <label class="fl" style="margin-top:4px">Oscurecer <span class="rval" id="m-rv-iDark">${Math.round(S.iDark*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.iDark*100)}" oninput="S.iDark=this.value/100;document.getElementById('m-rv-iDark').textContent=this.value+'%';syncSlider('iDark',this.value);render()"></div>
    <label class="fl">Blur <span class="rval" id="m-rv-iBlur">${S.iBlur}px</span></label>
    <div class="rrow"><input type="range" min="0" max="20" value="${S.iBlur}" oninput="S.iBlur=+this.value;document.getElementById('m-rv-iBlur').textContent=this.value+'px';syncSlider('iBlur',this.value);render()"></div>
    <label class="fl">Posición horizontal <span class="rval" id="m-rv-imgX">${S.imgX==0?'Centro':S.imgX<0?'← '+Math.abs(Math.round(S.imgX*100))+'%':'→ '+Math.round(S.imgX*100)+'%'}</span></label>
    <div class="rrow"><input type="range" min="-100" max="100" value="${Math.round(S.imgX*100)}" oninput="S.imgX=this.value/100;document.getElementById('m-rv-imgX').textContent=(+this.value==0?'Centro':this.value<0?'← '+Math.abs(this.value)+'%':'→ '+this.value+'%');syncSlider('imgX',this.value);render()"></div>
    <label class="fl">Posición vertical <span class="rval" id="m-rv-imgY">${S.imgY==0?'Centro':S.imgY<0?'↑ '+Math.abs(Math.round(S.imgY*100))+'%':'↓ '+Math.round(S.imgY*100)+'%'}</span></label>
    <div class="rrow"><input type="range" min="-100" max="100" value="${Math.round(S.imgY*100)}" oninput="S.imgY=this.value/100;document.getElementById('m-rv-imgY').textContent=(+this.value==0?'Centro':this.value<0?'↑ '+Math.abs(this.value)+'%':'↓ '+this.value+'%');syncSlider('imgY',this.value);render()"></div>`,

  titulo: ()=>`
    <label class="fl" style="margin-top:4px">Color de texto</label>
    <div class="swatches">
      <input type="color" value="${S.tCol}" oninput="S.tCol=this.value;render()">
      ${['#ffffff','#111111','#a6ce39','#f5c518'].map(c=>`<div class="sw ${S.tCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.tCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Fondo del recuadro</label>
    <div class="swatches">
      <input type="color" value="${S.tBg==='transparent'?'#000000':S.tBg}" oninput="S.tBg=this.value;render()">
      ${['#000000','#a6ce39','#8fb82d','transparent'].map(c=>`<div class="sw ${S.tBg===c?'on':''} ${c==='transparent'?'sw-transp':''}" style="${c!=='transparent'?'background:'+c:''}" onclick="S.tBg='${c}';render();renderMobPanel()" title="${c==='transparent'?'Sin fondo':''}"></div>`).join('')}
    </div>
    <label class="fl">Opacidad del fondo <span class="rval" id="m-rv-tBgOp">${Math.round(S.tBgOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.tBgOp*100)}" oninput="S.tBgOp=this.value/100;document.getElementById('m-rv-tBgOp').textContent=this.value+'%';syncSlider('tBgOp',this.value);render()"></div>`,

  categoria: ()=>`
    <label class="fl" style="margin-top:4px">Color de texto</label>
    <div class="swatches">
      <input type="color" value="${S.cCol}" oninput="S.cCol=this.value;render()">
      ${['#111111','#ffffff','#a6ce39'].map(c=>`<div class="sw ${S.cCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.cCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Color de fondo</label>
    <div class="swatches">
      <input type="color" value="${S.cBg}" oninput="S.cBg=this.value;render()">
      ${['#a6ce39','#8fb82d','#ffffff','#111111'].map(c=>`<div class="sw ${S.cBg===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.cBg='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Opacidad del fondo <span class="rval" id="m-rv-cBgOp">${Math.round(S.cBgOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.cBgOp*100)}" oninput="S.cBgOp=this.value/100;document.getElementById('m-rv-cBgOp').textContent=this.value+'%';syncSlider('cBgOp',this.value);render()"></div>`,

  capa: ()=>`
    <div class="togrow" style="margin-top:4px">
      <span style="font-size:.8rem;color:var(--g80)">Activar capa de color</span>
      <label class="toggle"><input type="checkbox" id="m-ovTog" ${document.getElementById('ovTog').checked?'checked':''} onchange="document.getElementById('ovTog').checked=this.checked;render()"><span class="togslide"></span></label>
    </div>
    <label class="fl">Color</label>
    <div class="swatches">
      <input type="color" value="${S.ovCol}" oninput="S.ovCol=this.value;render()">
      ${['#000000','#1a1a1a','#a6ce39','#ffffff'].map(c=>`<div class="sw ${S.ovCol===c?'on':''}" style="background:${c};${c==='#ffffff'?'border-color:#ccc':''}" onclick="S.ovCol='${c}';render();renderMobPanel()"></div>`).join('')}
    </div>
    <label class="fl">Opacidad <span class="rval" id="m-rv-ovOp">${Math.round(S.ovOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="0" max="100" value="${Math.round(S.ovOp*100)}" oninput="S.ovOp=this.value/100;document.getElementById('m-rv-ovOp').textContent=this.value+'%';syncSlider('ovOp',this.value);render()"></div>`,

  logo: ()=>`
    <label class="uplbl" for="m-logoUp">📁 Cambiar logo</label>
    <input type="file" id="m-logoUp" accept="image/*">
    <label class="fl">Opacidad <span class="rval" id="m-rv-lOp">${Math.round(S.lOp*100)}%</span></label>
    <div class="rrow"><input type="range" min="10" max="100" value="${Math.round(S.lOp*100)}" oninput="S.lOp=this.value/100;document.getElementById('m-rv-lOp').textContent=this.value+'%';syncSlider('lOp',this.value);render()"></div>`,
};

let _activeTab = 'noticia';
let _panelOpen = false;

// iOS Safari fix: registrar touchstart en los tabs
function initTabTouchEvents(){
  document.querySelectorAll('.mob-tab').forEach(btn=>{
    btn.addEventListener('touchend', function(e){
      e.preventDefault();
      mobTab(this.dataset.key, this);
    }, {passive:false});
  });
}

function mobTab(key, tabEl){
  const panel = document.getElementById('mobPanel');
  const canvasArea = document.getElementById('canvasArea');
  if(_activeTab === key && _panelOpen){
    // cerrar con animación
    panel.classList.add('closing');
    canvasArea.classList.remove('panel-open'); // canvas crece durante animación
    document.querySelectorAll('.mob-tab').forEach(t=>t.classList.remove('on'));
    _panelOpen = false;
    setTimeout(()=>{
      panel.classList.remove('open');
      panel.classList.remove('closing');
      resizeCanvas(true); render(); // redibujar manteniendo posiciones
    }, 260);
    return;
  }
  _activeTab = key;
  _panelOpen = true;
  document.querySelectorAll('.mob-tab').forEach(t=>t.classList.remove('on'));
  tabEl.classList.add('on');
  renderMobPanel();
  panel.classList.remove('closing');
  panel.classList.add('open');
  canvasArea.classList.add('panel-open');
  // redibujar tras la transición (doble para iOS/Android)
  setTimeout(()=>{ resizeCanvas(true); render(); }, 280);
  setTimeout(()=>{ resizeCanvas(true); render(); }, 350);
}

function renderMobPanel(){
  const inner = document.getElementById('mobPanelInner');
  if(!inner) return;
  inner.innerHTML = MOB_PANELS[_activeTab]?MOB_PANELS[_activeTab]():'';
  // bind events
  bindMobEvents();
  // draw previews in plantilla panel
  if(_activeTab==='plantilla'){
    requestAnimationFrame(()=>{
      ['normal','moderna','banda','impacto','diagonal','verde'].forEach(k=>{
        const c=document.getElementById('mtp-'+k);if(!c)return;
        drawPreviewOnCanvas(c,k);
      });
    });
  }
}

function bindMobEvents(){
  const mi=document.getElementById('m-imgUp');
  if(mi) mi.addEventListener('change',loadLocalImg);
  const ml=document.getElementById('m-logoUp');
  if(ml) ml.addEventListener('change',loadLogo);
  const mt=document.getElementById('m-titIn');
  if(mt) mt.addEventListener('input',e=>{S.title=e.target.value;document.getElementById('titIn').value=e.target.value;render();});
  const mc=document.getElementById('m-catIn');
  if(mc) mc.addEventListener('input',e=>{S.cat=e.target.value;document.getElementById('catIn').value=e.target.value;render();});
}

function mobFetch(){
  const u=document.getElementById('m-urlIn');
  if(u){document.getElementById('urlIn').value=u.value;}
  fetchUrl();
}

function syncSlider(key, val){
  // sincronizar con el slider del sidebar desktop
  const el=document.getElementById('r-'+key);
  if(el) el.value=val;
  const rv=document.getElementById('rv-'+key);
  if(rv&&RMAP[key]) rv.textContent=RMAP[key].s(+val);
}

// ── INIT ──
function init(){
  const img=new Image();
  img.onload=()=>{S.logoImg=img;render();drawPreviews();};
  img.src='data:image/png;base64,'+LOGO_B64;
  document.getElementById('hLogo').src='data:image/png;base64,'+LOGO_B64;
  // Esperar un frame para que el DOM mobile tenga dimensiones correctas
  // Doble rAF: iOS Safari necesita dos frames para tener dimensiones correctas
  requestAnimationFrame(()=>requestAnimationFrame(()=>{ resizeCanvas();render();drawPreviews(); }));
  // Desktop: abrir primer acordeón
  if(window.innerWidth>700){
    const firstHead=document.querySelector('.acc-head');
    if(firstHead&&!firstHead.classList.contains('open'))toggleAcc(firstHead);
  }
  // Mobile: canvas arranca grande, sin panel abierto
  if(window.innerWidth<=700) initTabTouchEvents();
}
window.addEventListener('resize',()=>{resizeCanvas(true);render();});
window.addEventListener('load',init);
