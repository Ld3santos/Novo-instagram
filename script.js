/*
[ ] Variáveis
  - É um pedacinho da memória do computador,
  que podemos guardar alguma coisa. Mas, temos
  que identificar esse espacinho com um nome.

[ ] Funções
  - É um bloco de código que faz algo específico.

[ ] Tempo
  - É a medida do tempo que o programa leva
*/
let imagem = document.querySelector(".troca-imagem");

function trocaImagem() {
    imagem.style.opacity = (imagem.style.opacity == 0) ? 1 : 0;
}

setInterval(trocaImagem, 3000);