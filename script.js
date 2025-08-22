let atividade = document.getElementById("atividade")
let timerInput = document.getElementById("TimerInput")
let listaAtividades = document.getElementById("ListaAtividades")
let btnSalvar = document.getElementById("btnSalvar")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")

console.log(atividade.textContent);

btnSalvar.addEventListener("click", function(){
    if(!atividade.value){
        alert("Adicione uma atividade!")
    }
    else{
        salvaAtividade()
        console.log(atividade.value)
        console.log(hour.value)
        atividade.value = "";
        hour.value = "";
        minute.value = "";
    }
});

function salvaAtividade(){
    lista = document.createElement('li')
    lista.textContent = atividade.value + "    " + hour.value + ":" + minute.value
    listaAtividades.appendChild(lista)
};

document.getElementById("hour").addEventListener("input", function(e){
    e.target.value = e.target.value.replace(/\D/g, "");
});

document.getElementById("minute").addEventListener("input", function(e){
    e.target.value = e.target.value.replace(/\D/g, "");
});