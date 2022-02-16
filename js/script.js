let cardQuizz
buscarQuizz();
function buscarQuizz() {
    setInterval(displayQuizz, 3000);
}
    
function displayQuizz() {
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promessa.then(promessaCumprida);
}
function promessaCumprida(resposta) {
    quantidadeDeCards = resposta.data.length;
    // console.log("quantidade de cards"+quantidadeDeCards);
    cardQuizz = resposta.data;
    renderizarQuizzes(cardQuizz);
    }

function renderizarQuizzes(cardQuizz){
    let divQuizzes = document.querySelector(".quizzes")
    divQuizzes.innerHTML = ""
    for (let i = 0; i < quantidadeDeCards; i++ ){
        divQuizzes.innerHTML += `
        <div onclick="acessarQuizz(this)" class="container card-quizz">
                    <img src="${cardQuizz[i].image}" alt="">
                    <span>${cardQuizz[i].title}</span>
                </div>
        `
    }
}
let idDoQuizz;
let objetoQuizz;
function acessarQuizz(idQuizz){
    objetoQuizz = idQuizz;
    idDoQuizz = objetoQuizz.id;

    document.querySelector(".tela-inicial").classList.add("none");
    document.querySelector(".pagina-quizz").classList.remove("none");
    const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promessa.then(renderizarPerguntas);
}

let objeto = [];
let tituloQuiz;
let tituloImg;
let perguntas = [];
let respostas = [];
let certaOuErrada;

function renderizarPerguntas(quizz){
    objeto = quizz.data;
    if(idDoQuizz === objeto.id){
    objeto.forEach(element => {
        tituloQuiz = element.title;
        tituloImg = element.image;
        perguntas = element.questions;

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
                `<li class="opcoes-resposta">
                <figure class="img-pergunta">
                <img src="${imgResposta}" alt="">
                <p class="${certaOuErrada}">${textoResposta}</p>
            </figure>
            </li>`
            });

        });
    });
}
}