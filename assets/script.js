document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('open'));
document.querySelector('.drop button')?.addEventListener('click',()=>document.querySelector('.drop')?.classList.toggle('open'));

const s=document.querySelector('.slides'),ds=[...document.querySelectorAll('.dot')],prev=document.querySelector('.prev'),next=document.querySelector('.next');
let i=0,t,sliderPaused=false;
function show(n){if(!s)return;i=(n+ds.length)%ds.length;s.style.transform=`translateX(-${i*100}%)`;ds.forEach((d,x)=>d.classList.toggle('active',x===i));}
function restart(){clearInterval(t);if(!sliderPaused)t=setInterval(()=>show(i+1),6500)}
function setSliderPaused(value){sliderPaused=value;restart()}
ds.forEach((d,x)=>d.onclick=()=>{show(x);restart()});
prev?.addEventListener('click',()=>{show(i-1);restart()});
next?.addEventListener('click',()=>{show(i+1);restart()});
s?.addEventListener('mouseenter',()=>setSliderPaused(true));
s?.addEventListener('mouseleave',()=>setSliderPaused(false));
s?.addEventListener('focusin',()=>setSliderPaused(true));
s?.addEventListener('focusout',()=>setSliderPaused(false));
if(s)restart();

document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());

const WA_NUMBER='27734722046';
const WA_MESSAGE=`Hi KagišoTech 👋

I found your website and would like to make an enquiry.

Please let me know how you can help with my business technology needs.`;
function openWhatsApp(extra=''){
  const message=extra ? `${WA_MESSAGE}\n\nI'm interested in: ${extra}` : WA_MESSAGE;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener');
}

document.querySelectorAll('.whatsapp').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openWhatsApp()}));

const cb=document.querySelector('.chat'),box=document.querySelector('.chatbox'),cl=document.querySelector('.close'),msgs=document.querySelector('.messages'),inp=document.querySelector('.chatinput input'),send=document.querySelector('.chatinput button');
function add(text,type){if(!msgs)return;const e=document.createElement('div');e.className='msg '+type;e.textContent=text;msgs.appendChild(e);msgs.scrollTop=msgs.scrollHeight}
function ans(q){q=q.toLowerCase();
 if(/whatsapp/.test(q))return'You can speak to KagišoTech directly on WhatsApp. I can open a message for you with your enquiry already prepared.';
 if(/price|cost|quote|pricing|package/.test(q))return'We offer practical packages from R699/month and once-off options from R1,999. Contact us for a tailored quotation.';
 if(/computer|laptop|windows|printer|software/.test(q))return'We support computer setup, Windows, software, printers, troubleshooting and optimisation.';
 if(/virus|antivirus|malware|security/.test(q))return'We can assist with antivirus installation/configuration, updates, malware scanning and basic security hygiene.';
 if(/website|domain|email|web/.test(q))return'We can help with websites, domains, DNS, business email and digital presence.';
 if(/k2|nintex|workflow|smartforms/.test(q))return'We provide focused K2/Nintex support, workflow troubleshooting, SmartForms and related SQL/application support.';
 if(/azure|cloud|microsoft 365/.test(q))return'We currently offer Microsoft 365 and basic Azure assistance rather than advanced enterprise architecture.';
 return'I can help with services, packages, pricing, computer support, antivirus, websites, K2/Nintex and contact enquiries.'
}
function sendMsg(){if(!inp?.value.trim())return;const q=inp.value.trim();
 if(/^talk on whatsapp$/i.test(q)){openWhatsApp();inp.value='';return}
 add(q,'user');inp.value='';setTimeout(()=>add(ans(q),'bot'),180)}
cb?.addEventListener('click',()=>{box?.classList.toggle('open');if(box?.classList.contains('open'))inp?.focus()});
cl?.addEventListener('click',e=>{e.stopPropagation();box?.classList.remove('open')});
send?.addEventListener('click',sendMsg);
inp?.addEventListener('keydown',e=>{if(e.key==='Enter')sendMsg()});
document.querySelectorAll('.quick button').forEach(b=>b.onclick=()=>{if(/^talk on whatsapp$/i.test(b.textContent.trim())){openWhatsApp();return}if(inp){inp.value=b.textContent;sendMsg()}});


/* Modern slider enhancements: progress bar, touch swipe and keyboard navigation. */
(() => {
  const slider=document.querySelector('.slides');
  const progress=document.querySelector('.slide-progress span');
  if(!slider) return;
  const DURATION=6500;
  let startX=0, paused=false;
  const resetProgress=()=>{
    if(!progress) return;
    progress.style.transition='none';
    progress.style.transform='scaleX(0)';
    requestAnimationFrame(()=>{
      progress.style.transition=`transform ${DURATION}ms linear`;
      if(!paused) progress.style.transform='scaleX(1)';
    });
  };
  resetProgress();
  document.querySelectorAll('.dot,.arrow').forEach(el=>el.addEventListener('click',resetProgress));
  slider.addEventListener('mouseenter',()=>{paused=true;if(progress)progress.style.transform='scaleX(0)'});
  slider.addEventListener('mouseleave',()=>{paused=false;resetProgress()});
  slider.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});
  slider.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-startX;
    if(Math.abs(dx)>45){(dx<0?next:prev)?.click();}
  },{passive:true});
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft') prev?.click();
    if(e.key==='ArrowRight') next?.click();
  });
})();
