let cardQuizz;

let objeto1 = [];
let tituloQuiz;
let tituloImg;
let perguntas = [];
let corTitulo;
let tituloPergunta;
let respostas = [];
let imgResposta;
let textoResposta;
let valorResposta;
let certaOuErrada;
let verificar = 0;
let objeto2 = [];
let acertos = 0;
let respostaSelecionada;
let minValue = 0;
let n = 2;

function buscarQuizz() {
    displayQuizz()
    setInterval(displayQuizz, 5000);
    seusQuizzes()
        function displayQuizz() {
            const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
            promessa.then(promessaCumprida);
}}

function promessaCumprida(resposta) {
    quantidadeDeCards = resposta.data.length;
    cardQuizz = resposta.data;
    renderizarQuizzes(cardQuizz);
    }

function renderizarQuizzes(cardQuizz){
    let divQuizzes = document.querySelector(".quiz-api")
    divQuizzes.innerHTML = ""
    for (let i = 0; i < quantidadeDeCards; i++ ){
        divQuizzes.innerHTML += `
        <div data-identifier="quizz-card" class="container card-quizz" onclick="acessarQuizz(${cardQuizz[i].id})">
                    <div class="layer"></div>
                    <img src="${cardQuizz[i].image}" alt="">
                    <span>${cardQuizz[i].title}</span>
                </div>
        `
    }
}
// -----------------------------------------------------------------
function acessarQuizz(id){
    idDoQuizz = id;
    setTimeout(function(){(document.querySelector(`.pergunta:nth-child(1)`).scrollIntoView({block: "center", behavior: "smooth"}))},1000);
    
    document.querySelector(".home").classList.add("none");
    document.querySelector(".pagina-quizz").classList.remove("none");
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idDoQuizz}`);
    promise.then(obterPerguntas);
    promise.catch(verErro);
}
function verErro(erro){
    console.log(erro.response);
}
function obterPerguntas(quizz){
    objeto1 = quizz.data;
    objeto2 = objeto1.levels;

    tituloQuiz = objeto1.title;
    tituloImg = objeto1.image;
    perguntas = objeto1.questions;

    renderizarPerguntas();
}
function renderizarPerguntas(){

        document.querySelector(".nome-quizz").innerHTML =
        `<div class="img-gradient">
        <img src="${tituloImg}" style="width: 100vw; height: 200px;" alt="">
    </div>
        <p>${tituloQuiz}</p>`

        perguntas.forEach(element => {
            tituloPergunta = element.title;
            corTitulo = element.color;
            respostas = element.answers;

            document.querySelector(".perguntas").innerHTML +=
            `<ul class="pergunta">
            <header class="topo-pergunta">
            <p data-identifier="question">${tituloPergunta}</p>
            </header>
            <li class="opcoes-resposta">

            </li>
            </ul>`

            document.querySelector("ul:last-child header").style.setProperty("--cor-pergunta",element.color);
            respostas.sort(comparador);

            respostas.forEach(element => {
                textoResposta = element.text;
                imgResposta = element.image;
                valorResposta = element.isCorrectAnswer;

                if(valorResposta === true){
                    certaOuErrada = "resposta-certa"
                }else{
                    certaOuErrada = "resposta-errada"
                }

                document.querySelector("ul:last-child li").innerHTML +=
                `
                <figure data-identifier="answer" onclick="selecionarResposta(this)" class="img-pergunta">
                <img src="${imgResposta}" alt="${textoResposta}">
                <p class="${certaOuErrada}"> ${textoResposta}</p>
                </figure>
                `
            });

        });
}

function selecionarResposta(resposta){
    verificar++;
    setTimeout(scrollarAutomatico, 2000);
    respostaSelecionada = resposta;
    respostaSelecionada.classList.add("resposta-selecionada");

    respostaSelecionada.parentNode.querySelectorAll("figure").forEach(element=>{
        element.removeAttribute("onclick");
    })
    
    if(respostaSelecionada.querySelector(".resposta-certa")!==null){
        acertos++;
    }

    let selecionada = respostaSelecionada.parentNode.querySelectorAll("figure:not(.resposta-selecionada)");
    selecionada.forEach(element=>{
        element.classList.add("opacidade");
    })

    respostaSelecionada.parentNode.querySelector(".resposta-certa").style.setProperty("--cor-certa","#009C22");
    
    let respostaErrada = respostaSelecionada.parentNode.querySelectorAll(".resposta-errada");
    respostaErrada.forEach(element=>{
        element.style.setProperty("--cor-errada","#FF4B4B");
    })

    setTimeout(checarFimDoQuizz, 2000);
}
function scrollarAutomatico(){
    document.querySelector(`.pergunta:nth-child(${n})`).scrollIntoView({block: "center", behavior: "smooth"});
    n++
}

function checarFimDoQuizz(){
    if(verificar === perguntas.length){
        minValue = Math.round((acertos / perguntas.length)*100);
        
        objeto2.forEach(element=>{
        if(minValue>=element.minValue){

        document.querySelector(".fim-quizz").classList.remove("none");

        document.querySelector(".fim-quizz").innerHTML = 
        `<header class="topo-fim-quizz">
        <p>${minValue}% de acerto: ${element.title}</p>
        </header>
        <div class="meme-final">
        <img src="${element.image}" alt="meme de harry potter">
        <p class="msg-final">${element.text}</p>
        </div>`
    }
});
}
document.querySelector(".fim-quizz").scrollIntoView({block:"center", behavior: "smooth"});
}

function reiniciarQuizz(){
    document.querySelector(".nome-quizz").scrollIntoView();
    n =2;
    verificar = 0;
    acertos = 0;
    document.querySelector(".perguntas").innerHTML = '';
    document.querySelector(".fim-quizz").classList.add("none");
    renderizarPerguntas();
}

function comparador() {
    return Math.random() - 0.5;
}
// -----------------------------------------------------------------
let quizzArmazenado;
let quizzArmazenadoDeserializado;
function seusQuizzes(){
    if (localStorage.getItem("Quizzes") !== null){

        document.querySelector(".seus-quizzes").classList.remove("none")
        document.querySelector(".criar-quizz").classList.add("none")
        
        quizzArmazenado = localStorage.getItem("Quizzes");
        quizzArmazenadoDeserializado = JSON.parse(quizzArmazenado);

        quizzArmazenadoDeserializado.forEach(element => {
        document.querySelector(".seus-quizzes").innerHTML +=
        `<div class="quizzes">
            <div data-identifier="quizz-card" class="container card-quizz" onclick="acessarQuizz(${element.id})">
                <div class="layer"></div>
                <img src="${element.image}" alt="">
                <span>${element.title}</span>
            </div>
        </div>`;
    });
}
}

function criarQuizz(){
    document.querySelector(".home").classList.add("none")
    document.querySelector(".criacao-quiz").classList.remove("none")
}



function voltar(){
    verificar = 0;
    acertos = 0;
    n=2;
    document.querySelector(".perguntas").innerHTML = '';
    document.querySelector(".pagina-quizz").classList.add("none")
    document.querySelector(".criacao-quiz").classList.add("none")
    document.querySelector(".fim-quizz").classList.add("none");
    document.querySelector(".pagina-quizz").classList.add("none");
    document.querySelector(".home").classList.remove("none")
    setTimeout(function(){(document.querySelector(".seus-quizzes").scrollIntoView({block: "center", behavior: "smooth"}))},200);
}



buscarQuizz()