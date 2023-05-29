"use strict" 

// buffer de tela
var tela = new Array(24)           // 153 DIM Q$(F,K)
var cursorLinha = 0
var cursorColuna = 0

function inicializa() {
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
var PRINT = function PRINT(msg) {

    let mensagem = msg
    for (let i = 0; i < mensagem.length; i++) {
        tela[cursorLinha][cursorColuna] = mensagem[i]
        cursorColuna++
    }

    console.clear()   // TODO força o clear da tela para não ficar dando scroll no terminal. Melhorar mais pra frente
    
    let bufferLinha = ''
    for (let i = 0; i < 23; i++) {
        for (let j = 0; j < 39; j++) {
            bufferLinha += tela[i][j]
        }
        bufferLinha += '\n'
    }
    console.log(bufferLinha)
    bufferLinha = ''
    cursorColuna = 0
    cursorLinha++
    // cursorColuna = cursorColuna + msg.length
    if (cursorLinha >= 23) cursorLinha = 23
    console.log (cursorLinha + " " + cursorColuna)
}

var PRINT_AT = function(linha, coluna, msg) {
    cursorLinha = linha
    cursorColuna = coluna
    PRINT(msg)
}

var TAB = function TAB(qtd) { 
    let retorno = '' 
    for (let i = 0; i <= qtd; i++) {
        retorno = retorno + ' '
    }
    return retorno
}

// TODO implementar quando tivermos uma tela final do jogo
// apaga a tela
var CLS = function CLS() {
    console.clear()
    // throw new  ("NOT IMPLEMENTED")
}

module.exports = { 
    PRINT : PRINT,
    PRINT_AT: PRINT_AT,
    TAB: TAB,
    CLS : CLS
}