// tela3.2
let criarTitulo, criarImg, criarQntPerguntas, criarQntNiveis

function criarQuizz(){
    criarTitulo = document.querySelector(".criacao-titulo").value
    criarImg = document.querySelector(".criacao-img").value
    criarQntPerguntas = document.querySelector(".criacao-qnt-perguntas").value
    criarQntNiveis = document.querySelector(".criacao-qnt-niveis").value

    
    if ((criarTitulo.length >= 20 && criarTitulo.length <= 65)
     && (criarImg.slice(0,4) == "www." || criarImg.slice(0,4)=="http")
     && (criarQntPerguntas >= 3)
     && (criarQntNiveis >= 2)
    )
    
    {
        console.log("SHOW DE BOLINHAS!!!! o0º%o0º%o0º%o0º%o0º")
        // document.querySelector(".primeira-tela-criacao").classList.add("none")
        // document.querySelector(".segunda-tela-criacao").classList.remove("none")
        criarPerguntas()
    } else{
        alert("Preencha os dados corretamente!")
    }
    

}

function criarPerguntas(){
    document.querySelector(".primeira-tela-criacao").classList.add("none")
    document.querySelector(".segunda-tela-criacao").classList.remove("none")
    document.querySelector(".segunda-tela-criacao").innerHTML = `
        <div class="criacao titulo">
            <p>Crie suas perguntas</p>
        </div>
        <ul class="caixa">
                    <div class="pergunta pergunta1">Pergunta 1</div>
                    <li><input type="text" placeholder="Texto da pergunta"></li>
                    <li><input type="text" placeholder="Cor de fundo da pergunta"></li> 
                
                    <div class="pergunta correta1">Resposta correta</div> 
                    <li><input type="text" placeholder="Resposta correta"></li>
                    <li><input type="text" placeholder="URL da imagem"></li>
                
                    <div class="pergunta incorreta11">Respostas incorretas</div>
                    <li><input type="text" placeholder="Resposta incorreta 1"></li>
                    <li><input type="text" placeholder="URL da imagem 1"></li> 
                
                    <div class="pergunta incorreta12"></div> 
                    <li><input type="text" placeholder="Resposta incorreta 2"></li>
                    <li><input type="text" placeholder="URL da imagem 2"></li>
                 
                    <div class="pergunta incorreta13"></div> 
                    <li><input type="text" placeholder="Resposta incorreta 3"></li>
                    <li><input type="text" placeholder="URL da imagem 3"></li>
                </ul>
        `
    for (let i = 0; i < (criarQntPerguntas-1); i++){
        document.querySelector(".segunda-tela-criacao").innerHTML = document.querySelector(".segunda-tela-criacao").innerHTML +
        `
        <!-- <div class="pergunta abrir-pergunta" onclick="abrirPergunta(this)"><p>Pergunta ${i+2}<p><ion-icon class="icone-perguntas" name="reader-outline"></ion-icon></div> -->
        <ul class="caixa caixa${i+2}">
                    <div class="pergunta pergunta${i+2}">Pergunta ${i+2}</div>
                    <li><input type="text" placeholder="Texto da pergunta"></li>
                    <li><input type="text" placeholder="Cor de fundo da pergunta"></li> 
                
                    <div class="pergunta correta${i+2}">Resposta correta</div> 
                    <li><input type="text" placeholder="Resposta correta"></li>
                    <li><input type="text" placeholder="URL da imagem"></li>
                
                    <div class="pergunta incorreta${i+2}1">Respostas incorretas</div>
                    <li><input type="text" placeholder="Resposta incorreta 1"></li>
                    <li><input type="text" placeholder="URL da imagem 1"></li> 
                
                    <div class="pergunta incorreta${i+2}2"></div> 
                    <li><input type="text" placeholder="Resposta incorreta 2"></li>
                    <li><input type="text" placeholder="URL da imagem 2"></li>
                 
                    <div class="pergunta incorreta${i+2}3"></div> 
                    <li><input type="text" placeholder="Resposta incorreta 3"></li>
                    <li><input type="text" placeholder="URL da imagem 3"></li>
                </ul>
        `
    }

}
