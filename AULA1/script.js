console.log("O JavaScript da Oficina Baumgarten está rodando com sucesso!");

let cliente = "João da Silva";
let servico = "Troca de óleo";
let valor = 150;
let pecasEstoque = ["Filtro de óleo", "pastilha de freio", "vela de ignição"];
let titulo = document.getElementById('titulo-oficina');
let inputNome = document.getElementById("input-nome");
let inputTelefone = document.getElementById("input-telefone");
let inputModelo = document.getElementById("input-modelo");
let inputAno = document.getElementById("input-ano");
let inputText = document.getElementById("input-text");


titulo.innerText = "Oficina Baumgarten - Sistema Online e Operacional";


let botaoAgendar = document.getElementById("botao-agendar");

botaoAgendar.addEventListener("click", function(){
     
    let valorInputNome = inputNome.value.trim();
    let valorInputTelefone = inputTelefone.value.trim();
    let valorInputModelo = inputModelo.value.trim();
    let mensagemBotao = document.getElementById("mensagemBotao");

    if(valorInputNome === "" || valorInputTelefone === ""){
        mensagemBotao.textContent = ("Por favor, preencha pelo menos o seu nome e telefone para contato.");
        mensagemBotao.style.color = "red";

    }else{
        mensagemBotao.textContent = ("Obrigado!! Orçamento solicitado por: " + valorInputNome + ", " + "telefone: " + valorInputTelefone + ", " + " Veículo modelo: " + valorInputModelo + ", Entraremos em contato em breve!" );
        mensagemBotao.style.color = "green";

        inputNome.value = "";
        inputTelefone.value = "";
        inputModelo.value = "";
        inputAno.value= "";
        inputText.value = "";
    }

});

console.log("Nome do cliente: " + cliente);
console.log("Serviço solicitado: " + servico);
console.log("Valor a pagar: R$" + valor +" reais");

/*loop repetição com for*/

for(let i = 0;i < pecasEstoque.length; i++){
    console.log("Peça em estoque: " + pecasEstoque[i] );
}


/*função teste*/
function verificarServico(servico, valor){
    if(valor > 100){
        console.log("Atenção: o serviço de: " + servico + " requer aprovação prévia do gerente.")
    }else{
        console.log("Serviço de: " + servico   +"  é de liberação rápida, por ser baixo custo.")
    }
}

 verificarServico("Alinhamento", 80);
 verificarServico("Retífica de motor", 1200)


/*
git status vai mostrar os arquivos alterados

git add . (prepara os arquivos alterados)

git commit -m "descricao do que voce mudou" (salva no histórico local)

git push (envia direto para o GitHub) */