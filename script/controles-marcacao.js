let checkbox_visibilidade = document.querySelector('#visibilidade-das-marcacoes')
// Tive que tirar o marcacoes daqui porque tava dando erro de definir duas vezes, já definiu no balaozinho

let x_controle_marcacao = document.querySelector('#x-da-marcacao')
let y_controle_marcacao = document.querySelector('#y-da-marcacao')
let largura_controle_marcacao = document.querySelector('#largura-da-marcacao')
let altura_controle_marcacao = document.querySelector('#altura-da-marcacao')
let titulo_controle_marcacao = document.querySelector('#titulo-da-marcacao')
let conteudo_controle_marcacao = document.querySelector('#conteudo-da-marcacao')
let cor_controle_marcacao = document.querySelector('#cor-da-marcacao')
let formato_controle_marcacao = document.querySelectorAll('input[type="radio"]')
let checkbox_retangular_controle_marcacao = formato_controle_marcacao[0]
let checkbox_oval_controle_marcacao = formato_controle_marcacao[1]

let controles = document.querySelector('.controles')

checkbox_visibilidade.addEventListener('change', function() {
    for (let m of marcacoes) {
        m.classList.toggle(checkbox_visibilidade.value)
    }
})

function clicaMarcacao(e) {
    document.querySelector(".selecionada").classList.remove("selecionada")
    let m = e.currentTarget
    m.classList.toggle("selecionada")
    x_controle_marcacao.value = parseInt(m.style.left)
    y_controle_marcacao.value = parseInt(m.style.top)
    largura_controle_marcacao.value = parseInt(m.style.width)
    altura_controle_marcacao.value = parseInt(m.style.height)
    titulo_controle_marcacao.value = m.getAttribute('data-titulo')
    conteudo_controle_marcacao.value = m.getAttribute('data-conteudo')
    cor_controle_marcacao.value = m.getAttribute('data-cor')
    checkbox_retangular_controle_marcacao.checked = m.getAttribute('data-formato') === 'formato-retangular'
    checkbox_oval_controle_marcacao.checked = m.getAttribute('data-formato') === 'formato-oval'

}

for (let m of marcacoes) {
    m.addEventListener('click', clicaMarcacao)
}

function controleMarcacao(e){
    let selecionada = document.querySelector(".selecionada")
    selecionada.style.left = `${x_controle_marcacao.value}px`
    selecionada.style.top = `${y_controle_marcacao.value}px`
    selecionada.style.width = `${largura_controle_marcacao.value}px`
    selecionada.style.height = `${altura_controle_marcacao.value}px`
    selecionada.setAttribute('data-titulo', titulo_controle_marcacao.value)
    selecionada.setAttribute('data-conteudo', conteudo_controle_marcacao.value)
    selecionada.setAttribute('data-cor', cor_controle_marcacao.value)
}

controles.addEventListener('change', controleMarcacao)
for (let f of formato_controle_marcacao) {
    f.addEventListener('change', function() {
            let selecionada = document.querySelector(".selecionada")
            if (selecionada.getAttribute('data-formato') === 'formato-retangular') {
                selecionada.setAttribute('data-formato', 'formato-oval')
            }
            else{
                selecionada.setAttribute('data-formato', 'formato-retangular')
            }
        }
    )
}