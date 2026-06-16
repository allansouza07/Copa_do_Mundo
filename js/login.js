
const campo = document.getElementById("emaillogin");
const senha = document.getElementById("senhalogin")
const btn = document.getElementById("nitidezentrar");
const cadastro = document.getElementById("nitidezentrar1");

function mudar_pagina(){
    window.location.href ="cadastro.html";
}
function mudar_pagina2(){
    window.location.href ="index.html";
}


senha.addEventListener("input", ()=> {
    if (senha.value.trim() !== ""){
        btn.disabled =false;
        cadastro.disabled=false;
    }
    else{
        btn.disabled=true;
        cadastro.disabled=true;s
    }
});

btn.add