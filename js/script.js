import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.computedStyleMap.display = 'nome';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta(){
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
    }
}