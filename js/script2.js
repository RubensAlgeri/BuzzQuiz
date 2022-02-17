// tela3

function criarQuizz(){
    const criarTitulo = document.querySelector(".criacao-titulo").value
    const criarImg = document.querySelector(".criacao-img").value
    const criarQntPerguntas = document.querySelector(".criacao-qnt-perguntas").value
    const criarQntNiveis = document.querySelector(".criacao-qnt-niveis").value

    
    if ((criarTitulo.length >= 20 && criarTitulo.length <= 65)
    // && (typecriarImg )
    )
    
    {
        console.log("qnt de caracteres do titulo = "+criarTitulo.length)
        console.log(criarImg.slice(0,4))
        console.log("SHOW DE BOLINHAS!!!! o0º%o0º%o0º%o0º%o0º")
    } else{
        console.log("qnt de caracteres do titulo = "+criarTitulo.length)
        console.log(typeof(criarImg))
        console.log("DEU ERRO!!!! :´( ")
        alert("Preencha os dados corretamente!")
    }
    

}