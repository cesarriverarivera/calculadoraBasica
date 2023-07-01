
const pantalla = document.querySelector("#screen");
const pantalla2 = document.querySelector("#screen2");
const botonNumero = document.querySelectorAll(".num");
const elementos = document.querySelector('.imagen');
const btnSelected = document.querySelector("#btn-selected");
const btnMenu = document.querySelector("#btn-menu");
const btnExchange = document.querySelector("#btn-exchange");
console.log(btnSelected);
console.log(botonNumero);

let num0 = botonNumero[9].innerHTML;
let num9 = botonNumero[2].innerHTML;
let num8 = botonNumero[1].innerHTML;
let num7 = botonNumero[0].innerHTML;
let num6 = botonNumero[5].innerHTML;
let num5 = botonNumero[4].innerHTML;
let num4 = botonNumero[3].innerHTML;
let num3 = botonNumero[8].innerHTML;
let num2 = botonNumero[7].innerHTML;
let num1 = botonNumero[6].innerHTML;
let punto = botonNumero[10].innerHTML;


const botonPunto = document.querySelector("#punto");
const boton1 = document.querySelector("#uno");
const boton2 = document.querySelector("#dos");
const boton3 = document.querySelector("#tres");
const boton4 = document.querySelector("#cuatro");
const boton5 = document.querySelector("#cinco");
const boton6 = document.querySelector("#seis");
const boton7 = document.querySelector("#siete");
const boton8 = document.querySelector("#ocho");
const boton9 = document.querySelector("#nueve");
const boton0 = document.querySelector("#cero");
const botonSuma = document.querySelector("#suma");
const botonResta = document.querySelector("#resta");
const botonMultiplicacion = document.querySelector("#multiplicacion");
const botonDivision = document.querySelector("#division");
const botonResultado = document.querySelector("#resultado");
const botonBorrar = document.querySelector("#borrar");
const borrarUnitario = document.querySelector("#borrarUnitario");


let valor1;
let resultado;





//CLICK A CADA UNO DE LOS BOTONES PARA QUE SE MUESTREN EN PANTALLA Y ALMACENEN EL VALOR1 Y VALOR 2
botonPunto.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + punto;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});


boton1.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num1;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton2.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num2;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton3.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num3;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton4.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num4;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton5.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num5;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton6.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num6;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton7.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num7;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton8.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num8;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton9.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num9;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});

boton0.addEventListener("click", ()=>{
        pantalla.innerHTML = pantalla.innerHTML + num0;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
});


//BOTONES DE OPERACION SUMA, RESTA, MULTIPLICACION Y DIVISION
botonSuma.addEventListener("click",()=>{
    pantalla.innerHTML = pantalla.innerHTML + "+";
    valor1 = pantalla.innerHTML;
})

botonResta.addEventListener("click",()=>{
    if(valor1==""){ //para agregar el negativo al incio de una operacion
        operadorClicked=false;
        pantalla.innerHTML = pantalla.innerHTML + "-";
    }else{
        pantalla.innerHTML = pantalla.innerHTML + "-";
        valor1 = pantalla.innerHTML;
    }
    
})

botonMultiplicacion.addEventListener("click",()=>{
    pantalla.innerHTML = pantalla.innerHTML + "*";
    valor1 = pantalla.innerHTML;
})

botonDivision.addEventListener("click",()=>{
    pantalla.innerHTML = pantalla.innerHTML + "/";
    valor1 = pantalla.innerHTML;
})




//BOTON IGUAL PARA CALCULAR LA OPERACION
botonResultado.addEventListener("click", ()=>{
    pantalla2.innerHTML = `= ${Number(parseFloat(eval(valor1)).toFixed(10))}`;
    elementos.style.animation = 'aparecer 3s infinite'; 
})

//BOTON BORRAR TODO
botonBorrar.addEventListener("click", ()=>{
    pantalla.innerHTML ="";
    pantalla2.innerHTML ="";
    valor1=""; 
    elementos.style.animation = '';   
})


//BOTON BORRAR UNO POR UNO
borrarUnitario.addEventListener("click", ()=>{
    valor1 = valor1.slice(0, -1);
    console.log(valor1);
    pantalla.innerHTML = valor1;
    pantalla2.innerHTML = "";
    elementos.style.animation = '';
})


//AGREGAR COLOR AL ICONO DE CALCULADORA Y CAMBIAR AL HACER CLCIK
window.addEventListener('load', () => {
    btnSelected.style.color = "orangered";
    btnSelected.style.backgroundColor = "transparent";
    btnSelected.style.scale = "1.2";
});

btnSelected.addEventListener("click", ()=>{
    btnSelected.style.color = "orangered";
    btnSelected.style.backgroundColor = "transparent";
    btnSelected.style.scale = "1.2";
    btnMenu.style.color = "";
    btnMenu.style.backgroundColor = "";
    btnMenu.style.scale = "";
    btnExchange.style.color = "";
    btnExchange.style.backgroundColor = "";
    btnExchange.style.scale = "";
})

btnMenu.addEventListener("click", ()=>{
    btnMenu.style.color = "orangered";
    btnMenu.style.backgroundColor = "transparent";
    btnMenu.style.scale = "1.2";
    btnSelected.style.color = "";
    btnSelected.style.backgroundColor = "";
    btnSelected.style.scale = "";
    btnExchange.style.color = "";
    btnExchange.style.backgroundColor = "";
    btnExchange.style.scale = "";
})

btnExchange.addEventListener("click", ()=>{
    btnExchange.style.color = "orangered";
    btnExchange.style.backgroundColor = "transparent";
    btnExchange.style.scale = "1.2";
    btnSelected.style.color = "";
    btnSelected.style.backgroundColor = "";
    btnSelected.style.scale = "";
    btnMenu.style.color = "";
    btnMenu.style.backgroundColor = "";
    btnMenu.style.scale = "";
})
    




