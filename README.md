# Dev log do game TREK, baseado no antigo SuperStarTrek

Organização do diretorio DOC:
- Revista MicroSistemas, Ano III, n. 25, outubro de 1983 - artigo original de Kazimierz Malachowski, contendo o programa original 'SuperStarTrek', escrito para microcomputadores ______.
(procure a página 98 no pdf)
TODO mencionar autor e licença


TODO checar licença AtribuiçãoNãoComercial-CompartilhaIgual-CC BY-NC-SA
em https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt_BR
e por que o github só tem a licença V1
(Creative Commons Zero v1.0 Universal)

TODO checar o acesso de terceiros ao github

TODO organizar as lives de acordo com as branches

## Como acompanhar este Devlog através das branches

Interessados no acompanhamento passo-a-passo:

    Cada branch deste projeto engloba o conteúdo de um video que estará em uma playlist no youtube. Ou seja, as branchs são progressivas, com o padrão 'live-xxx', onde xxx é o número sequencial da live.
    Por exemplo, a branch 'live-001' corresponde ao primeiro video da série.

Interessados no projeto em seu estado final:

    Somente quando o projeto terminar é que a branch **main** corresponderá a um "alpha release", enquanto não terminar esta main corresponderá à branch mais recente.

### Live 001

     _Neste momento ainda não liberei os videos no youtube. O video correspondente a esta live estará disponível no meu canal https://www.youtube.com/@ducabyte, ainda estou organizando a playlist_.

     Esta live é bate papo inicial sobre como será o Devlog na sua execução em lives e como o estou estruturando em termos de organização de projeto.
     TODO linkar a url da live quando liberar no youtube
     _Estou anotando isso na branch main, mas o conteúdo começará a partir da branch live-001. Por ora, estou apenas criando a estrutura do repositório_.

     Agora, nesta branch (live-001) começo a falar sobre as características da migração da antiga adaptação do SuperStarTrek para o TREK, bem como as ferramentas que usarei para me manter organizado.

     Sobre várias referências que mencionarei no video, elas estarão listadas ou em links em uma seção apropriada do projeto, ou estarão em ./DOC. _Ainda estou organizando isto também, e elas começarão a ficar disponíveis nas próximas lives_.

     De qualquer maneira, a revista onde se encontra o código original está agora disponível em ./DOC, você pode procurar o artigo browseando o pdf até a página 98 e por enquanto, apenas passar os olhos sobre o artigo e o código fonte, sem maiores preocupações que encontrar certos padrões (p.ex, quem já conhece programação vai ver alguns IFs, alguns FORs, etc)

### Live 002

    Nesta live continuamos o papo, verificamos o git local, criamos o respositório no github https://github.com/ducabyte/TREK e iniciamos o projeto com uma estrutura local de diretórios e começamos a anotar o README.
    
    Esta live se divide em dois videos, TREK Devlog 002 parte 1 e TREK Devlog 002 parte 2 (tive um problema com minha autorização no github, por isso tive que parar o primeiro e continuar no segundo depois)

    Nota: só consegui resolver o problema na próxima live, a 003. Mas sempre se aprende alguma coisa, dá pra assistir...

    TODO editar a parte 1 para tirar o final de pausa/encerramento que ficou muito grande.

### Live 003

    Resolvemos o problema de autenticação no github e sincronizamos o repositório.

    Colocamos uma primeira versão de uma adaptação do código original que aparece na revista no diretório ./core, com o nome trek.js. Esta primeira versão, deixamos todas as linhas comentadas, porque vamos converter e debugar, em pequenas partes separadas, atacando aspectos diferentes da conversão.

    Falamos da diferença que existe entre *programação de comportamento* (behaviour) que está contida em uma *core mechanics* e a *montagem* de uma cena em uma game engine. Como o nosso jogo tem pouco apelo visual e pouca interatividade "real time", nossa programação é inteiramente voltada para o core mechanics inicialmente.

    Justificamos o por que deste projeto, além de ser javascript, também será nodeJS.


### live 004

        correções no README

        adicionou o manual de operações do TK 2000
        
        iniciou a conversão de variáveis e constantes globais

### live 005

    Verificamos valores reais (fracionários) de duas das variáveis globais (r e q) contra valores obtidos pelo original em um emulador.
    Começamos a atacar o código, focando nas exibições de "telas" (comando PRINT do basic original). Para isso, tentamos criar funções com mesmo nome no javascript
        PRINT "texto" -----> PRINT("TEXTO), onde PRINT é um function PRINT(msg)
        A mesma coisa com CLS, porém deixamos como não implementada uma vez que ainda só utilizamos a console
    Alguns trechos de código renomemos para colocar um underscore no número de linha, transformando esse trecho de código em uma função
        150 CLS: PRINT "******" : RETURN
        Ficou como:
            function _150() {
                CLS()
                PRINT ("******")
            }