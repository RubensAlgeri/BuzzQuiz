// tela3.2
let criarTitulo, criarImg, criarQntPerguntas, criarQntNiveis
let textos=[], cores=[], corretas=[], imagens=[], incorretas1=[], imgIncorretas1=[], incorretas2=[], imgIncorretas2=[], incorretas3=[], imgIncorretas3=[]
let quizzCriado = []
let tituloNiveis=[], acertoMinimos=[], imgNiveis=[], descricaoNiveis=[]
let novoQuizz
let questions =[], levels = []

function criarQuizz2() {
    criarTitulo = document.querySelector(".criacao-titulo").value
    criarImg = document.querySelector(".criacao-img").value
    criarQntPerguntas = document.querySelector(".criacao-qnt-perguntas").value
    criarQntNiveis = document.querySelector(".criacao-qnt-niveis").value


    if ((criarTitulo.length >= 20 && criarTitulo.length <= 65)
        && (criarImg.slice(0, 4) == "www." || criarImg.slice(0, 4) == "http")
        && (criarQntPerguntas >= 3)
        && (criarQntNiveis >= 2)
    ) 
    {
        quizzCriado.titulo = criarTitulo
        quizzCriado.imgTitulo = criarImg

        console.log("SHOW DE BOLINHAS!!!! o0º%o0º%o0º%o0º%o0º")
        criarPerguntas()
    } else {
        alert("Preencha os dados corretamente!")
    }


}

function criarPerguntas() {
    document.querySelector(".primeira-tela-criacao").classList.add("none")
    document.querySelector(".segunda-tela-criacao").classList.remove("none")
    document.querySelector(".segunda-tela-criacao").innerHTML = `
        <div class="criacao titulo">
            <p>Crie suas perguntas</p>
        </div>
        <ul class="caixa">
                    <div class="pergunta pergunta1">Pergunta 1</div>
                    <li><input class="texto1" type="text" placeholder="Texto da pergunta"></li>
                    <li><input class="cor1" type="text" placeholder="Cor de fundo da pergunta"></li> 
                
                    <div class="pergunta ">Resposta correta</div> 
                    <li><input class="correta1" type="text" placeholder="Resposta correta"></li>
                    <li><input class="imagem1" type="text" placeholder="URL da imagem"></li>
                
                    <div class="pergunta">Respostas incorretas</div>
                    <li><input class="incorreta11" type="text" placeholder="Resposta incorreta 1"></li>
                    <li><input class="img-incorreta11" type="text" placeholder="URL da imagem 1"></li> 
                
                    <div class="pergunta"></div> 
                    <li><input class="incorreta12"  type="text" placeholder="Resposta incorreta 2"></li>
                    <li><input class="img-incorreta12"  type="text" placeholder="URL da imagem 2"></li>
                 
                    <div class="pergunta"></div> 
                    <li><input class="incorreta13" type="text" placeholder="Resposta incorreta 3"></li>
                    <li><input class="img-incorreta13" type="text" placeholder="URL da imagem 3"></li>
                </ul>
        `
    for (let i = 0; i < (criarQntPerguntas - 1); i++) {
        document.querySelector(".segunda-tela-criacao").innerHTML = document.querySelector(".segunda-tela-criacao").innerHTML +
            `
        <!-- <div class="pergunta abrir-pergunta" onclick="abrirPergunta()"><p>Pergunta ${i + 2}<p><ion-icon class="icone-perguntas" name="reader-outline"></ion-icon></div> -->
        <ul class="caixa caixa${i + 2}">
                    <div class="pergunta pergunta${i + 2}">Pergunta ${i + 2}</div>
                    <li><input class="texto${i + 2}" type="text" placeholder="Texto da pergunta"></li>
                    <li><input class="cor${i + 2}" type="text" placeholder="Cor de fundo da pergunta"></li> 
                
                    <div class="pergunta ">Resposta correta</div> 
                    <li><input class="correta${i + 2}" type="text" placeholder="Resposta correta"></li>
                    <li><input class="imagem${i + 2}" type="text" placeholder="URL da imagem"></li>
                
                    <div class="pergunta">Respostas incorretas</div>
                    <li><input class="incorreta${i + 2}1" type="text" placeholder="Resposta incorreta 1"></li>
                    <li><input class="img-incorreta${i + 2}1" type="text" placeholder="URL da imagem 1"></li> 
                
                    <div class="pergunta"></div> 
                    <li><input class="incorreta${i + 2}2" type="text" placeholder="Resposta incorreta 2"></li>
                    <li><input class="img-incorreta${i + 2}2" type="text" placeholder="URL da imagem 2"></li>
                 
                    <div class="pergunta"></div> 
                    <li><input class="incorreta${i + 2}3" type="text" placeholder="Resposta incorreta 3"></li>
                    <li><input class="img-incorreta${i + 2}3" type="text" placeholder="URL da imagem 3"></li>
                </ul>
        `
    }
    document.querySelector(".segunda-tela-criacao").innerHTML = document.querySelector(".segunda-tela-criacao").innerHTML + 
    `
    <button class="botao" onclick="validarPerguntas()">Prosseguir pra criar perguntas</button>
    `
}


function validarPerguntas(){
for (let i = 1; i <= criarQntPerguntas; i++){
    let texto = document.querySelector(`.texto${i}`).value
    let cor = document.querySelector(`.cor${i}`).value
    let correta = document.querySelector(`.correta${i}`).value
    let imagem = document.querySelector(`.imagem${i}`).value
    let incorreta1 = document.querySelector(`.incorreta${i}1`).value
    let imgIncorreta1 = document.querySelector(`.img-incorreta${i}1`).value
    let incorreta2 = document.querySelector(`.incorreta${i}2`).value
    let imgIncorreta2 = document.querySelector(`.img-incorreta${i}2`).value
    let incorreta3 = document.querySelector(`.incorreta${i}3`).value
    let imgIncorreta3 = document.querySelector(`.img-incorreta${i}3`).value

    let verificarCor =parseInt(cor.replace("#","0x"))
    if ((texto.length >= 20)
        && (verificarCor <= 16777215)
        && (correta.length >= 3)
        && ((imagem.slice(0, 4) == "www." || imagem.slice(0, 4) == "http"))
        && (incorreta1.length >= 2)
        && ((imgIncorreta1.slice(0, 4) == "www." || imgIncorreta1.slice(0, 4) == "http"))
    ) 
    {
        // Alterar a ordem, por enquanto estou deixando para teste
        textos.push(texto)
        cores.push(cor)
        corretas.push(correta)
        imagens.push(imagem)
        incorretas1.push(incorreta1)
        imgIncorretas1.push(imgIncorreta1)
        incorretas2.push(incorreta2)
        imgIncorretas2.push(imgIncorreta2)
        incorretas3.push(incorreta3)
        imgIncorretas3.push(imgIncorreta3)

        quizzCriado.textos = textos
        quizzCriado.cores = cores
        quizzCriado.corretas = corretas
        quizzCriado.imagens = imagens
        quizzCriado.incorretas1 = incorretas1
        quizzCriado.imgIncorretas1 = imgIncorretas1
        quizzCriado.incorretas2 = incorretas2
        quizzCriado.imgIncorretas2 = imgIncorretas2
        quizzCriado.incorretas3 = incorretas3
        quizzCriado.imgIncorretas3 = imgIncorretas3

             
        

    } else {
        alert("Preencha os dados corretamente!")
        break}
    }
    prosseguir33()
    
    
    
    
}


// tela 3.3
function prosseguir33(){
    document.querySelector(".segunda-tela-criacao").classList.add("none")
    document.querySelector(".terceira-tela-criacao").classList.remove("none")
    document.querySelector(".terceira-tela-criacao").innerHTML = `
    <ul class="caixa">
        <div class="pergunta ">Nível 1</div>
        <li><input class="titulo-nivel1" type="text" placeholder="Título do nível"></li>
        <li><input class="acerto-minimo1" type="text" placeholder="% de acerto mínima"></li>
        <li><input class="img-nivel1" type="text" placeholder="URL da imagem do nível"></li>
        <li><textarea class="descricao-nivel1"  placeholder="Descrição do nível" class="criar-descricao" cols="35" rows="5"></textarea></li>
    </ul>
    `
    for (let i = 0; i < (criarQntNiveis - 1); i++) {
        document.querySelector(".terceira-tela-criacao").innerHTML = document.querySelector(".terceira-tela-criacao").innerHTML + 
        `
    <ul class="caixa">
        <div class="pergunta ">Nível ${i+2}</div>
        <li><input class="titulo-nivel${i+2}" type="text" placeholder="Título do nível"></li>
        <li><input class="acerto-minimo${i+2}" type="text" placeholder="% de acerto mínima"></li>
        <li><input class="img-nivel${i+2}" type="text" placeholder="URL da imagem do nível"></li>
        <li><textarea class="descricao-nivel${i+2}"  placeholder="Descrição do nível" class="criar-descricao" cols="35" rows="5"></textarea></li>
    </ul>
    `
    }
    document.querySelector(".terceira-tela-criacao").innerHTML = document.querySelector(".terceira-tela-criacao").innerHTML +
    `
    <button class="botao" onclick="validarNivel()">Finalizar Quizz</button>
    `
}

function validarNivel(){
    for (let i = 1; i <= criarQntNiveis; i++){
        let tituloNivel = document.querySelector(`.titulo-nivel${i}`).value
        let acertoMinimo = document.querySelector(`.acerto-minimo${i}`).value
        let imgNivel = document.querySelector(`.img-nivel${i}`).value
        let descricaoNivel = document.querySelector(`.descricao-nivel${i}`).value
    
        // if ((tituloNivel.length >= 10)
        // && (acertoMinimo <= 100 && acertoMinimo >= 0)
        // && (descricaoNivel.length >= 30)
        // && (imgNivel.slice(0, 4) == "www." || imgNivel.slice(0, 4) == "http")
        // ) {
            tituloNiveis.push(tituloNivel)
            acertoMinimos.push(acertoMinimo)
            imgNiveis.push(imgNivel)
            descricaoNiveis.push(descricaoNivel)

    // } else{
    //     alert("Preencha os NIVEIS corretamente!")
    //     break
    // }
}
    niveisCriado.tituloNiveis = tituloNiveis
    niveisCriado.acertoMinimos = acertoMinimos
    niveisCriado.imgNiveis = imgNiveis
    niveisCriado.descricaoNiveis = descricaoNiveis

    finalizarQuizz()
}

function finalizarQuizz(){
    enviarPerguntas()
    enviarNiveis()

    novoQuizz ={
        title: criarTitulo,
        image: criarImg,
        questions: questions,
        levels: levels
    } 


    const promessaQuizz = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",novoQuizz)
    promessaQuizz.then(promessaQuizzCumprida);
    objeto1.push(novoQuizz)   
}

function promessaQuizzCumprida(resposta) {
    informacoes = resposta.data.id;
    quizzCriado.push(informacoes) //id
    console.log(informacoes);
}

function enviarPerguntas(){
    for (let i = 0; i <= criarQntPerguntas-1; i++){
        console.log(i)
    questions.push(
		{
			title: textos[i],
			color: cores[i],
			answers: [
				{
					text: corretas[i],
					image: imagens[i],
					isCorrectAnswer: true
				},
				{
					text: incorretas1[i],
					image: imgIncorretas1[i],
					isCorrectAnswer: false
				},
                {
					text: incorretas2[i],
					image: imgIncorretas2[i],
					isCorrectAnswer: false
				},
                {
					text: incorretas3[i],
					image: imgIncorretas3[i],
					isCorrectAnswer: false
				}
			]
		})
    }
 }

 function enviarNiveis(){
    for (let i = 0; i <= criarQntNiveis-1; i++){
        console.log(i)
        levels.push(
            {
                title: tituloNiveis[i],
                image: imgNiveis[i],
                text: descricaoNiveis[i],
                minValue: acertoMinimos[i]
            }
        )
    }
}