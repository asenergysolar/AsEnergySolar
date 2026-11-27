const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hola A.S ENERGY. Quiero solicitar información.%0A%0ANombre: ${encodeURIComponent(d.get('name'))}%0ACiudad: ${encodeURIComponent(d.get('city'))}%0AServicio: ${encodeURIComponent(d.get('service'))}%0ADetalles: ${encodeURIComponent(d.get('message')||'No especificado')}`;window.open(`https://wa.me/573013214884?text=${msg}`,'_blank','noopener')});
// Galería: abre las fotografías en un visor accesible.
const galleryDialog=document.querySelector('.image-dialog');
document.querySelectorAll('.project-tile').forEach(tile=>tile.addEventListener('click',()=>{
  const image=galleryDialog.querySelector('img');
  image.src=tile.dataset.image;
  image.alt=tile.querySelector('img').alt;
  galleryDialog.querySelector('p').textContent=tile.dataset.caption;
  if(typeof galleryDialog.showModal==='function') galleryDialog.showModal();
}));
galleryDialog.querySelector('.dialog-close').addEventListener('click',()=>galleryDialog.close());
galleryDialog.addEventListener('click',event=>{if(event.target===galleryDialog)galleryDialog.close()});
