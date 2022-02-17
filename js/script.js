let cardQuizz, possuiQuizz

function buscarQuizz() {
    displayQuizz()
    setInterval(displayQuizz, 5000);
        function displayQuizz() {
            seusQuizzes()
            const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
            promessa.then(promessaCumprida);
}}

function promessaCumprida(resposta) {
    quantidadeDeCards = resposta.data.length;
    // console.log("quantidade de cards"+quantidadeDeCards);
    cardQuizz = resposta.data;
    renderizarQuizzes(cardQuizz);
    }

function renderizarQuizzes(cardQuizz){
    let divQuizzes = document.querySelector(".quiz-api")
    divQuizzes.innerHTML = ""
    for (let i = 0; i < quantidadeDeCards; i++ ){
        divQuizzes.innerHTML += `
        <div class="container card-quizz" onclick="acessarQuizz(this)">
                    <div class="layer"></div>
                    <img src="${cardQuizz[i].image}" alt="">
                    <span>${cardQuizz[i].title}</span>
                </div>
        `
    }
}

let idDoQuizz = [];
let id;
function acessarQuizz(){

    document.querySelector(".home").classList.add("none");
    document.querySelector(".pagina-quizz").classList.remove("none");
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promise.then(acessarQuizzEspecifico);
}

let objeto = [];
let objeto1 = [];
let tituloQuiz;
let tituloImg;
let perguntas = [];
let respostas = [];
let certaOuErrada;

function acessarQuizzEspecifico(quizz){
    objeto = quizz.data;
    idDoQuizz = objeto[0].id;
    const promises = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idDoQuizz}`);
    promises.then(renderizarPerguntas);
}

function renderizarPerguntas(quizz){
    objeto1 = quizz.data;

        tituloQuiz = objeto1.title;
        tituloImg = objeto1.image;
        perguntas = objeto1.questions;

        document.querySelector(".nome-quizz").innerHTML =
        `<div class="img-gradient">
        <img src="${tituloImg}" style="width: 100vw; height: 200px;" alt="">
    </div>
        <p>${tituloQuiz}</p>`

        perguntas.forEach(element => {
            tituloPergunta = element.title;
            corTitulo = element.color;
            respostas = element.answers;

            document.querySelector(".pergunta").innerHTML +=
            `<header class="topo-pergunta">
            <p>${tituloPergunta}</p>
            </header>`

            document.querySelector(".topo-pergunta").style.backgroundColor = `${corTitulo}`;

            respostas.forEach(element => {
                textoResposta = element.text;
                imgResposta = element.image;
                valorResposta = element.isCorrectAnswer;

                if(valorResposta === true){
                    certaOuErrada = "resposta-certa"
                }else{
                    certaOuErrada = "resposta-errada"
                }

                document.querySelector(".pergunta").innerHTML +=
                `
                <figure onclick="selecionarResposta()" class="img-pergunta">
                <img src="${imgResposta}" alt="">
                <p class="${certaOuErrada}">${textoResposta}</p>
                </figure>
                `
            });

        });
}

function seusQuizzes(){
    if (possuiQuizz){
        document.querySelector(".seus-quizzes").classList.remove("none")
        document.querySelector(".criar-quizz").classList.add("none")
    } else{
    }
}

function criarQuizz(){
    document.querySelector(".home").classList.add("none")
    document.querySelector(".criacao-quiz").classList.remove("none")
}



function voltar(){
    
    document.querySelector(".pagina-quizz").classList.add("none")
    document.querySelector(".criacao-quiz").classList.add("none")
    document.querySelector(".home").classList.remove("none")
    
}




buscarQuizz()
