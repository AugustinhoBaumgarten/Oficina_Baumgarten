let botaoOpinar = document.getElementById("botao-opinar");
let campoTexto = document.getElementById("campoTexto");
let botaoEnviar = document.getElementById("botaoEnviar");
let enviado = document.getElementById("enviado");

botaoOpinar.addEventListener("click", function(){
    if(campoTexto.style.display === "none"){
        campoTexto.style.display = "block";
        botaoEnviar.style.display = "block";
    }else{
        campoTexto.style.display = "none";
        botaoEnviar.style.display = "none";
    }

});

botaoEnviar.addEventListener("click", function(){
    botaoEnviar.style.display = "none";
    campoTexto.style.display = "none";
    
    campoTexto.value = "";
    enviado.innerText = "Opinião enviada com sucesso"
    

});

