const balaozinho = document.querySelector('#balaozinho')
let marcacoes = document.querySelectorAll('.marcacao')

function mouseEntra(e) {
    let marcacao = e.currentTarget
    balaozinho.innerHTML =
        `<h2>${marcacao.getAttribute('data-titulo')}</h2><p>${marcacao.getAttribute('data-conteudo')}</p>`
    balaozinho.style.background = marcacao.getAttribute('data-cor')
    balaozinho.style.top = `${e.pageY}px`
    balaozinho.style.left = `${e.pageX}px`
}

function mouseSai() {
    balaozinho.innerHTML = ''
}

function mouseMove(e) {
    balaozinho.style.top = `${e.pageY}px`
    balaozinho.style.left = `${e.pageX}px`
}

for (let marcacao of marcacoes) {
    marcacao.addEventListener('mouseover', mouseEntra)
    marcacao.addEventListener('mouseout', mouseSai)
    marcacao.addEventListener('mousemove', mouseMove)
}