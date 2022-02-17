let cardQuizz, possuiQuizz

function buscarQuizz() {
    setInterval(displayQuizz, 3000);
        function displayQuizz() {
            seusQuizzes()
            const promessa = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
            promessa.then(promessaCumprida);
}}

function promessaCumprida(resposta) {
    quantidadeDeCards = resposta.data.length;
    console.log("quantidade de cards"+quantidadeDeCards);
    cardQuizz = resposta.data;
    renderizarQuizzes(cardQuizz);
    }

function renderizarQuizzes(cardQuizz){
    let divQuizzes = document.querySelector(".quiz-api")
    divQuizzes.innerHTML = ""
    for (let i = 0; i < quantidadeDeCards; i++ ){
        divQuizzes.innerHTML += `
        <div class="container card-quizz" onclick="Perguntas()">
                    <div class="layer"></div>
                    <img src="${cardQuizz[i].image}" alt="">
                    <span>${cardQuizz[i].title}</span>
                </div>
        `
    }
}

function seusQuizzes(){
    if (possuiQuizz){
        document.querySelector(".seus-quizzes").classList.remove("none")
        document.querySelector(".criar-quizz").classList.add("none")
    } else{
    }
}

// Renderizar as Perguntas
function Perguntas(){
    document.querySelector(".home").classList.add("none")
    document.querySelector(".pagina-quizz").classList.remove("none")
}

function voltar(){
    
    document.querySelector(".pagina-quizz").classList.add("none")
    document.querySelector(".home").classList.remove("none")
}




buscarQuizz()