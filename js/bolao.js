const sidebar =document.getElementById("sidebar")
function abrir(){
    sidebar.classList.toggle("active")
}

function mudar_pagina_bolao(){
    window.location.href ="bolao.html";
}

function escrever_nome(){
    let pergunta = document.getElementById("pergunta").value;
    document.getElementById("melhor_jogador").innerHTML = "Jogador selecionado:" + pergunta;
}
function escrever_nome2(){
    let pergunta = document.getElementById("pergunta2").value;
    document.getElementById("artilheiro_jogador").innerHTML = "Jogador selecionado:" + pergunta;
}
function escrever_nome3(){
    let pergunta = document.getElementById("pergunta3").value;
    document.getElementById("campeao_copa").innerHTML = "Seleção selecionada:" + pergunta;
}
function escrever_nome4(){
    let pergunta = document.getElementById("pergunta4").value;
    document.getElementById("vice_campea").innerHTML = "Seleção selecionada:" + pergunta;
}
function escrever_nome5(){
    let pergunta = document.getElementById("pergunta5").value;
    document.getElementById("melhor_jogador_brasil").innerHTML = "Jogador selecionado:" + pergunta;
}
function palpitar(){
    document.getElementById("palpite").innerHTML = "Dados Cadastrados";
}