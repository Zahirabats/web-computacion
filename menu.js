const b = document.querySelector('.burger');
const m = document.getElementById('menu');
if(b && m) {
    b.addEventListener('click', () => {
        const o = m.classList.toggle('open');
        b.setAttribute('aria-expanded', o);
        b.setAttribute('aria-label', o ? 'Cerrar menú' : 'Abrir menú');
    });
}