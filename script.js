const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hola A.S ENERGY. Quiero solicitar información.%0A%0ANombre: ${encodeURIComponent(d.get('name'))}%0ACiudad: ${encodeURIComponent(d.get('city'))}%0AServicio: ${encodeURIComponent(d.get('service'))}%0ADetalles: ${encodeURIComponent(d.get('message')||'No especificado')}`;window.open(`https://wa.me/573013214884?text=${msg}`,'_blank','noopener')});
// Carrusel local: 37 fotografías incluidas dentro del sitio, sin depender de enlaces externos.
const gallery=document.querySelector('.gallery-carousel');
const galleryDialog=document.querySelector('.image-dialog');
if(gallery){
  const track=gallery.querySelector('.gallery-track');
  const slides=[...gallery.querySelectorAll('.gallery-slide')];
  const dotsBox=gallery.querySelector('.gallery-dots');
  const current=gallery.querySelector('.gallery-current');
  const total=gallery.querySelector('.gallery-total');
  let active=0;
  let autoPlay;
  total.textContent=String(slides.length).padStart(2,'0');
  const dots=slides.map((_,i)=>{
    const dot=document.createElement('button');
    dot.type='button';
    dot.className='gallery-dot';
    dot.setAttribute('aria-label',`Mostrar fotografía ${i+1}`);
    dot.addEventListener('click',()=>showSlide(i));
    dotsBox.appendChild(dot);
    return dot;
  });
  function showSlide(index){
    active=(index+slides.length)%slides.length;
    track.style.transform=`translateX(-${active*100}%)`;
    current.textContent=String(active+1).padStart(2,'0');
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===active));
  }
  function stopAuto(){if(autoPlay)clearInterval(autoPlay);}
  function startAuto(){stopAuto();autoPlay=setInterval(()=>showSlide(active+1),5000);}
  gallery.querySelector('.gallery-prev').addEventListener('click',()=>{showSlide(active-1);startAuto();});
  gallery.querySelector('.gallery-next').addEventListener('click',()=>{showSlide(active+1);startAuto();});
  gallery.addEventListener('mouseenter',stopAuto);
  gallery.addEventListener('mouseleave',startAuto);
  gallery.addEventListener('focusin',stopAuto);
  gallery.addEventListener('focusout',startAuto);
  showSlide(0);
  startAuto();

  gallery.querySelectorAll('.gallery-photo').forEach(photo=>photo.addEventListener('click',()=>{
    const image=galleryDialog.querySelector('img');
    image.src=photo.dataset.image;
    image.alt=photo.querySelector('img').alt;
    galleryDialog.querySelector('p').textContent=photo.dataset.caption;
    if(typeof galleryDialog.showModal==='function') galleryDialog.showModal();
  }));
}
if(galleryDialog){
  galleryDialog.querySelector('.dialog-close').addEventListener('click',()=>galleryDialog.close());
  galleryDialog.addEventListener('click',event=>{if(event.target===galleryDialog)galleryDialog.close();});
}
