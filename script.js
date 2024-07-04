const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Saúde e bem-estar são pilares essenciais para uma vida plena e satisfatória. Cuidar do corpo e da mente é mais do que uma necessidade, é um compromisso consigo mesmo.",
        alternativas: [
            {
                texto: "Vamos aprender mais!",
                afirmacao: "hoje vimos a importância de se estudar a saúde e bem-estar na sociedade,"
            },
          
        ]
    },
    {
        enunciado: "As políticas de bem-estar e qualidade de vida são essenciais para garantir que todos os membros da sociedade tenham acesso a condições que promovam seu bem-estar físico, mental e social. Essas políticas podem abranger uma variedade de áreas, desde cuidados de saúde acessíveis até políticas de habitação e emprego, passando por iniciativas de educação, lazer e segurança pública.",
        alternativas: [
            {
                texto: "Quais são os objetivos das políticas de bem-estar e qualidade de vida?",
                afirmacao: "aprendemos que a as políticas de bem-estar e qualidade de vida são essenciais para garantir que todos tenham uma boa condição de vida."
            }
        ]
    },
    {
        enunciado: " As políticas de bem-estar e qualidade de vida têm como objetivos principais promover saúde física e mental, melhorar condições de vida, criar ambientes de trabalho saudáveis, equilibrar vida profissional e pessoal, promover inclusão social, sustentabilidade ambiental, e educar para práticas saudáveis e direitos humanos. Essas políticas visam proporcionar às pessoas condições para viverem de forma saudável, feliz e produtiva.",
        alternativas: [
            {
                texto: "Como essas políticas buscam promover o equilíbrio entre vida profissional e pessoal?",
                afirmacao: "Aprender sobre Saúde e bem-etar é muito importante para nossa vida."
            },
        ]
    },
    {
        enunciado: "Promovem o equilíbrio entre vida profissional e pessoal através de flexibilidade no trabalho, benefícios de bem-estar, apoio familiar, cultura organizacional de suporte, gestão de estresse e carga de trabalho, e educação para habilidades de equilíbrio e gestão pessoal. Essas medidas visam melhorar a qualidade de vida dos funcionários ao mesmo tempo que promovem uma maior produtividade e satisfação no trabalho.",
        alternativas: [
            {
                texto: "Quais são os desafios enfrentados pelas organizações ao implementar políticas que buscam equilibrar vida profissional e pessoal?",
                afirmacao: "Os benefícios de se investir na sáude e bem estar incluem em: melhorar as qualidades físicas e mentais da sociedade em geral, para uma boa convivênca."
            },
        ]
    },
    {
        enunciado: " Os desafios enfrentados pelas organizações ao implementar políticas de equilíbrio entre vida profissional e pessoal incluem resistência cultural, custos associados à implementação, necessidade de recursos significativos e resistência à mudança por parte dos funcionários. ",
        alternativas: [
            {
                texto: "Entendi, muito obrigado!",
                afirmacao: "Então chegamos a conclusão de que é fundamental para compreendermos como promover uma vida mais saudável e satisfatória. Isso envolve não apenas entender os aspectos físicos e mentais do bem-estar, mas também explorar políticas e práticas que ajudem indivíduos e comunidades a alcançar um equilíbrio adequado entre trabalho, vida pessoal e social. Investir em pesquisa e educação nessa área não só melhora a qualidade de vida das pessoas, mas também contribui para sociedades mais produtivas e resilientes."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O que aprendemos?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();