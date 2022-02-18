// tela3.2
let criarTitulo, criarImg, criarQntPerguntas, criarQntNiveis
let textos=[], cores=[], correta1=[], imagem1=[], incorreta1=[], imgIncorreta1=[], incorreta2=[], imgIncorreta2=[], incorreta3=[], imgIncorreta3=[]
// let re = /[#]{1}[0-9A-Fa-f]{6}/g;

function criarQuizz2() {
    criarTitulo = document.querySelector(".criacao-titulo").value
    criarImg = document.querySelector(".criacao-img").value
    criarQntPerguntas = document.querySelector(".criacao-qnt-perguntas").value
    criarQntNiveis = document.querySelector(".criacao-qnt-niveis").value


    if ((criarTitulo.length >= 20 && criarTitulo.length <= 65)
        && (criarImg.slice(0, 4) == "www." || criarImg.slice(0, 4) == "http")
        && (criarQntPerguntas >= 3)
        && (criarQntNiveis >= 2)
    ) {
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
    <button class="botao" onclick="prosseguir33()">Prosseguir pra criar perguntas</button>
    `
}

// tela 3.3
function prosseguir33(){
    // falta validar os itens da tela 3.2
    document.querySelector(".segunda-tela-criacao").classList.add("none")
    document.querySelector(".terceira-tela-criacao").classList.remove("none")
    document.querySelector(".terceira-tela-criacao").innerHTML = `
    <ul class="caixa">
        <div class="pergunta ">Nível 1</div>
        <li><input type="text" placeholder="Título do nível"></li>
        <li><input type="text" placeholder="% de acerto mínima"></li>
        <li><input type="text" placeholder="URL da imagem do nível"></li>
        <li><textarea  placeholder="Descrição do nível" class="criar-descricao" cols="35" rows="5"></textarea></li>
    </ul>
    `
    for (let i = 0; i < (criarQntNiveis - 1); i++) {
        document.querySelector(".terceira-tela-criacao").innerHTML = document.querySelector(".terceira-tela-criacao").innerHTML + 
        `
    <ul class="caixa">
        <div class="pergunta ">Nível ${i+2}</div>
        <li><input type="text" placeholder="Título do nível"></li>
        <li><input type="text" placeholder="% de acerto mínima"></li>
        <li><input type="text" placeholder="URL da imagem do nível"></li>
        <li><textarea  placeholder="Descrição do nível" class="criar-descricao" cols="35" rows="5"></textarea></li>
    </ul>
    `
    }
    document.querySelector(".terceira-tela-criacao").innerHTML = document.querySelector(".terceira-tela-criacao").innerHTML +
    `
    <button class="botao" onclick="finalizarQuizz()">Finalizar Quizz</button>
    `
}