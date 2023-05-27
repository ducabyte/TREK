"use strict" 

// buffer de tela
var tela = new Array(24)           // 153 DIM Q$(F,K)
var cursorLinha = 0
var cursorColuna = 0

function inicializa() {
    console.log("inicializa")
    for (let i=0; i <= 23; i++) {    // Cria a dimensão K em (F, K)
        tela[i] = new Array(40)
    }
    
    for (let i=0; i <= 23; i++) {    // Cria a dimensão K em (F, K)
        for (let j=0; j < 39; j++) {    // Cria a dimensão K em (F, K)
            tela[i][j] = ''
        }
    }

    cursorLinha = 0
    cursorColuna = 0

}
inicializa()


// exibe mensagens na saída (atualmente, a console)
exports.PRINT = function PRINT(msg) {

    let mensagem = msg
    for (let i = 0; i < mensagem.length; i++) {
        tela[cursorLinha][cursorColuna] = mensagem[i]
        cursorColuna++
    }
    
    let bufferLinha = ''
    for (let i = 0; i < 23; i++) {
        for (let j = 0; j < 39; j++) {
            bufferLinha += tela[i][j]
        }
        console.log(bufferLinha)
        bufferLinha = ''
        cursorColuna = 0
        cursorLinha ++
    }
}


// TODO implementar quando tivermos uma tela final do jogo
// apaga a tela
exports.CLS = function CLS() {
    // throw new  ("NOT IMPLEMENTED")
}