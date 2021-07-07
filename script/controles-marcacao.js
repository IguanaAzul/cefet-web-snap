let checkbox_visibilidade = document.querySelector('#visibilidade-das-marcacoes')
// Tive que tirar o marcacoes daqui porque tava dando erro de definir duas vezes, já definiu no balaozinho

let x_controle_marcacao = document.querySelector('#x-da-marcacao')
let y_controle_marcacao = document.querySelector('#y-da-marcacao')
let largura_controle_marcacao = document.querySelector('#largura-da-marcacao')
let altura_controle_marcacao = document.querySelector('#altura-da-marcacao')
let titulo_controle_marcacao = document.querySelector('#titulo-da-marcacao')
let conteudo_controle_marcacao = document.querySelector('#conteudo-da-marcacao')
let cor_controle_marcacao = document.querySelector('#cor-da-marcacao')
let formato_controle_marcacao = document.querySelectorAll('input[name="formato-da-marcacao"]')
let checkbox_retangular_controle_marcacao = formato_controle_marcacao[0]
let checkbox_oval_controle_marcacao = formato_controle_marcacao[1]

function controleMarcacao(marcacao) {
    x_controle_marcacao.value = parseInt(marcacao.style.left)
    y_controle_marcacao.value = parseInt(marcacao.style.top)
    largura_controle_marcacao.value = parseInt(marcacao.style.width)
    altura_controle_marcacao.value = parseInt(marcacao.style.height)
    titulo_controle_marcacao.value = marcacao.getAttribute('data-titulo')
    conteudo_controle_marcacao.value = marcacao.getAttribute('data-conteudo')
    cor_controle_marcacao.value = marcacao.getAttribute('data-cor')
    checkbox_retangular_controle_marcacao.checked = marcacao.getAttribute('data-formato') === 'formato-retangular'
    checkbox_oval_controle_marcacao.checked = marcacao.getAttribute('data-formato') === 'formato-oval'
}

checkbox_visibilidade.addEventListener('change', function() {
    for (let m of marcacoes) {
        m.classList.toggle(checkbox_visibilidade.value)
    }
})

function clicaMarcacao(e) {
    document.querySelector(".selecionada").classList.remove("selecionada")
    let m = e.currentTarget
    m.classList.toggle("selecionada")
    controleMarcacao(m)

}

for (let m of marcacoes) {
    m.addEventListener('click', clicaMarcacao)
}