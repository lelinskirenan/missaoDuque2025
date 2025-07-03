const caixaPricipal = document.querySelector(".caixa-Principal");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativas = document.querySelector(".caixa-Alternativas");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const Perguntas = [
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
]