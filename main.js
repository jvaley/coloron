const WA='https://wa.me/50255555555?text=Hola%20ColorOn,%20quiero%20solicitar%20una%20cotización';
const services=[['i-print','Serigrafía','Producción en volumen para prendas y uniformes.'],['i-palette','Sublimación','Color vibrante sobre tazas, termos y más.'],['i-layers','Impresión DTF','Alta definición y color intenso en textiles.'],['i-type','Vinil textil','Nombres, números y diseños precisos.'],['i-gift','Promocionales','Productos corporativos para marcas y eventos.'],['i-pen','Diseño gráfico','Preparamos tu arte para un resultado perfecto.']];
const products=[['Playeras','Textil · Personalizable','https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=84'],['Tazas','Cerámica · Sublimación','https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=84'],['Pachones','Metal · Full color','https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=84'],['Gorras','Textil · Vinil / DTF','https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=84'],['Uniformes','Empresa · Producción','https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=84'],['Regalos','Únicos · A tu medida','https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=900&q=84']];
const benefits=[['✓','Calidad premium','Materiales seleccionados y acabados impecables.'],['◷','Entrega ágil','Tiempos claros y procesos eficientes.'],['⌖','Atención personal','Te acompañamos en cada decisión.'],['⌘','Alta definición','Color preciso y detalles nítidos.'],['▦','Escala flexible','Desde una unidad hasta grandes producciones.']];
const steps=[['01','Idea recibida','Cuéntanos producto, cantidad y referencia.'],['02','Diseño listo','Creamos o adaptamos tu propuesta.'],['03','Aprobado','Confirmas cada detalle antes de imprimir.'],['04','En producción','Tu diseño cobra vida.'],['05','Entregado','Recibes un resultado listo para sorprender.']];
const reviews=[['“La calidad se nota desde que recibes el producto. Todo el proceso fue claro y rápido.”','María F.','Nómada Café'],['“Los colores quedaron increíbles y cumplieron con la fecha. Excelente atención.”','Carlos M.','Impulso'],['“Convirtieron una idea sencilla en un regalo realmente especial.”','Andrea L.','Cliente ColorOn']];
const faqs=[['¿Cuál es el pedido mínimo?','En muchos productos trabajamos desde una unidad. Para serigrafía depende del diseño y cantidad.'],['¿Qué archivos aceptan?','PDF, AI, SVG, EPS, PNG y JPG. Recomendamos vectores o imágenes a 300 dpi.'],['¿Cuánto tarda un pedido?','Normalmente entre 3 y 7 días hábiles después de aprobar el diseño.'],['¿Realizan envíos?','Sí, coordinamos entregas locales y envíos nacionales.'],['¿Pueden ayudar con el diseño?','Claro. Podemos crear, adaptar o preparar tu arte para impresión.']];
document.querySelectorAll('[data-wa]').forEach(a=>a.href=WA);
document.querySelector('#service-grid').innerHTML=services.map(s=>`<a class="service-card" href="${WA}"><i><svg aria-hidden="true"><use href="#${s[0]}"/></svg></i><div><h3>${s[1]}</h3><p>${s[2]}</p></div><b><svg aria-hidden="true"><use href="#i-arrow"/></svg></b></a>`).join('');
document.querySelector('#products').innerHTML=products.map((p,i)=>`<article class="product"><div class="thumb"><img src="${p[2]}" alt="${p[0]} personalizados" loading="lazy"><div class="laser"></div><span>0${i+1}</span></div><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('');
document.querySelector('#benefits').innerHTML=benefits.map((b,i)=>`<article class="notice appear" style="--i:${i}"><i>${b[0]}</i><div><h3>${b[1]}</h3><p>${b[2]}</p></div><span>ahora</span></article>`).join('');
document.querySelector('#steps').innerHTML=steps.map((s,i)=>`<article class="step"><span>${s[0]}</span><div><i class="${i===4?'done':''}">${i===4?'✓':''}</i><b></b></div><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join('');
document.querySelector('#reviews').innerHTML=reviews.map(r=>`<blockquote class="appear"><div>★★★★★</div><p>${r[0]}</p><footer><b>${r[1]}</b><span>${r[2]}</span></footer></blockquote>`).join('');
document.querySelector('#faqs').innerHTML=faqs.map(f=>`<details><summary>${f[0]}<span>+</span></summary><p>${f[1]}</p></details>`).join('');document.querySelector('#year').textContent=new Date().getFullYear();
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.textContent=o?'×':'☰';menu.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const root=document.documentElement,toggle=document.querySelector('#theme');function setTheme(t){root.dataset.theme=t;const d=t==='dark';toggle.querySelector('span').textContent=d?'☀':'☾';toggle.setAttribute('aria-label',d?'Activar modo claro':'Activar modo oscuro')}setTheme(localStorage.getItem('coloron-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));toggle.addEventListener('click',()=>{const n=root.dataset.theme==='dark'?'light':'dark';setTheme(n);localStorage.setItem('coloron-theme',n)});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.appear').forEach(e=>observer.observe(e));

/* A compact four-act scroll story for the printer and heat-press in the hero. */
const productionStory=document.querySelector('.production-animation');
if(productionStory){
  const productionSteps=[
    ['01 · ARTE LISTO','Tu diseño se prepara'],
    ['02 · IMPRESIÓN SUBLIMACIÓN','El color toma forma'],
    ['03 · TRANSFERENCIA','El calor fija el arte'],
    ['04 · PRODUCTO FINAL','Listo para sorprender']
  ];
  const status=productionStory.querySelector('.production-status b');
  const caption=productionStory.querySelector('.production-caption b');
  const guide=document.createElement('div');
  guide.className='production-story-ui';
  guide.setAttribute('aria-hidden','true');
  guide.innerHTML='<div class="production-story-readout"><span></span><b></b></div><div class="production-story-steps"><i></i><i></i><i></i><i></i></div><div class="production-story-timer"><em></em><span>Auto · <b>04.0</b>s</span></div>';
  productionStory.append(guide);
  const readout=guide.querySelector('span'),detail=guide.querySelector('b'),marks=[...guide.querySelectorAll('i')];
  const timer=guide.querySelector('.production-story-timer'),timerValue=timer.querySelector('b');
  const totalSteps=productionSteps.length,cycleDuration=4200;
  let activeProductionStep=0,cycleStart=performance.now(),paused=false,lastWheel=0,touchY=null;
  const setProductionStep=step=>{
    if(step===activeProductionStep)return;
    activeProductionStep=step;
    const [label,copy]=productionSteps[step-1];
    productionStory.dataset.productionStep=step;
    readout.textContent=label;
    detail.textContent=copy;
    status.textContent=step===4?'PRODUCTO LISTO':'PRODUCCIÓN ACTIVA';
    caption.textContent=copy;
    marks.forEach((mark,index)=>mark.classList.toggle('active',index<step));
  };
  const showTimer=now=>{
    const elapsed=Math.max(0,now-cycleStart),left=Math.max(0,cycleDuration-elapsed);
    timerValue.textContent=(left/1000).toFixed(1);
    timer.style.setProperty('--timer-progress',`${Math.min(1,elapsed/cycleDuration)*100}%`);
  };
  const restartTimer=()=>{cycleStart=performance.now();showTimer(cycleStart)};
  const advance=direction=>{setProductionStep(((activeProductionStep-1+direction+totalSteps)%totalSteps)+1);restartTimer()};
  const runTimer=now=>{
    if(!paused&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const elapsed=now-cycleStart;
      if(elapsed>=cycleDuration)advance(1);else showTimer(now);
    }
    requestAnimationFrame(runTimer);
  };
  const useWheel=event=>{
    event.preventDefault();
    const now=performance.now();
    if(Math.abs(event.deltaY)<8||now-lastWheel<430)return;
    lastWheel=now;
    advance(event.deltaY>0?1:-1);
  };
  const startTouch=event=>{touchY=event.touches[0]?.clientY??null};
  const useTouch=event=>{
    if(touchY===null)return;
    const currentY=event.touches[0]?.clientY??touchY;
    const delta=touchY-currentY;
    if(Math.abs(delta)>36){event.preventDefault();advance(delta>0?1:-1);touchY=currentY;}
  };
  productionStory.classList.add('production-story');
  productionStory.setAttribute('tabindex','0');
  productionStory.setAttribute('aria-roledescription','Animación interactiva de sublimación');
  productionStory.setAttribute('aria-label','Usa la rueda o desliza dentro de esta animación para recorrer el proceso de sublimación.');
  setProductionStep(1);
  productionStory.addEventListener('wheel',useWheel,{passive:false});
  productionStory.addEventListener('touchstart',startTouch,{passive:true});
  productionStory.addEventListener('touchmove',useTouch,{passive:false});
  productionStory.addEventListener('touchend',()=>{touchY=null},{passive:true});
  productionStory.addEventListener('focusin',()=>{paused=true});
  productionStory.addEventListener('focusout',()=>{paused=false;restartTimer()});
  productionStory.addEventListener('keydown',event=>{if(event.key==='ArrowDown'||event.key==='ArrowRight'){event.preventDefault();advance(1)}if(event.key==='ArrowUp'||event.key==='ArrowLeft'){event.preventDefault();advance(-1)}});
  document.addEventListener('visibilitychange',()=>{paused=document.hidden;if(!paused)restartTimer()});
  requestAnimationFrame(runTimer);
}
