const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual foi a maior pontuação e uma partida de ping pong?",
        alternativas: [
{
 texto:"11-0",
 afirmação:"resposta errada",
 pontos:0
},
{
    texto:"21-0",
    afirmação:"resposta correta",
    pontos:1
}
        ]
    },
       {
        enunciado: "ganhador de 1994 de ping pong?",
        alternativas: [
{
 texto:"Hugo Hoyama",
 afirmação:"resposta correta",
 pontos:1
},
{
    texto:"Hugo",
    afirmação:"resposta errada",
    pontos:0
}
        ]
    },
       {
        enunciado: "maior jogador de ping pong da historia brasileira?",
        alternativas: [
{
 texto:"Hugo Calderano",
 afirmação:"resposta corrata",
 pontos:1
},
{
    texto:"Luca Kumahara",
    afirmação:"resposta erreda",
    pontos:0
}
        ]
    },
       {
        enunciado: "qual é o maior torneio do ping pong?",
        alternativas: [
{
 texto:"ITTF Table Tennis World Cup",
 afirmação:"resposta errada",
 pontos:0
},
{
    texto:"ITTF World Table Tennis Championships",
    afirmação:"resposta correta",
    pontos:1
}
        ]
    },
       {
        enunciado: "qual é a melhor raquete de ping pong profissional?",
        alternativas: [
{
 texto:"Wilson Pro Staff 97 v14",
 afirmação:"resposta corrata",
 pontos:1
},
{
    texto:"Wilson Blade 104 V8",
    afirmação:"resposta erreda",
    pontos:0
}
        ]
    },
]

let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();