let botao = document.getElementById("botao");
let campoTexto = document.getElementById("campo-texto");
let saidaTexto = document.getElementById("saida");


botao.addEventListener("click", function(){
    saidaTexto.textContent = campoTexto.value;

});
