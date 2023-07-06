const btnMenu = document.querySelector("#btn-menu");
const btnSelected = document.querySelector("#btn-selected");
const btnExchange = document.querySelector("#btn-exchange");

//Da estilo al boton seleccionado
btnMenu.style.color = "orangered";
btnMenu.style.backgroundColor = "transparent";
btnMenu.style.scale = "1.2";

btnSelected.addEventListener("click", ()=>{
    location.href ="/calculadora/calculadora.html";
})