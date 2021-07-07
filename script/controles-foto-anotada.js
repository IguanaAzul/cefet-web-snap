let filtro = document.querySelector('#filtro-da-foto');
let foto = document.querySelector('.foto-anotada');

filtro.addEventListener('change', event => {
    foto.style.filter = filtro.value;
});