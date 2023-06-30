
const pantalla = document.querySelector("#screen");
const pantalla2 = document.querySelector("#screen2");
const botonNumero = document.querySelectorAll(".num");
const botonOperador = document.querySelectorAll(".operador");
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
let valor2="";
let resultado;
let operadorClicked = false;
let suma = false;
let resta =false;
let multiplicacion =false;
let division =false;


//CLICK A CADA UNO DE LOS BOTONES PARA QUE SE MUESTREN EN PANTALLA Y ALMACENEN EL VALOR1 Y VALOR 2
botonPunto.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + punto;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + punto;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});


boton1.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num1;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num1;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton2.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num2;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num2;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton3.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num3;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num3;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton4.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num4;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num4;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton5.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num5;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num5;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton6.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num6;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num6;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton7.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num7;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num7;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton8.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num8;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num8;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton9.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num9;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num9;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});

boton0.addEventListener("click", ()=>{
    if(operadorClicked ===false){
        pantalla.innerHTML = pantalla.innerHTML + num0;
        valor1 = pantalla.innerHTML;
        console.log({valor1})
    }else if(operadorClicked === true){
        pantalla2.innerHTML = pantalla2.innerHTML + num0;
        valor2 = pantalla2.innerHTML;
        console.log({valor2})  
    }
});




//BOTONES DE OPERACION SUMA, RESTA, MULTIPLICACION Y DIVISION
botonSuma.addEventListener("click",()=>{
    operadorClicked =true;
    suma =true;
})

botonResta.addEventListener("click",()=>{
    if(valor1==""){ //para agregar el negativo al incio de una operacion
        operadorClicked=false;
        pantalla.innerHTML = pantalla.innerHTML + "-";
    }else{
        operadorClicked =true;
        resta =true;
    }
    
})

botonMultiplicacion.addEventListener("click",()=>{
    operadorClicked =true;
    multiplicacion =true;
})

botonDivision.addEventListener("click",()=>{
    operadorClicked =true;
    division =true;
})




//BOTON IGUAL PARA CALCULAR LA OPERACION
botonResultado.addEventListener("click", ()=>{
    if(suma===true){
        pantalla.innerHTML ="";
        pantalla2.innerHTML ="";
        resultado = Number((parseFloat(valor1) + parseFloat(valor2)).toFixed(10));
        console.log(resultado);
        valor1=resultado;
        pantalla.innerHTML=valor1;
        suma =false;
        operadorClicked=false;
        pantalla2.innerHTML="";
    }else if(resta ===true){
        pantalla.innerHTML ="";
        pantalla2.innerHTML ="";
        resultado = Number((parseFloat(valor1) - parseFloat(valor2)).toFixed(10));
        console.log(resultado);
        valor1=resultado;
        pantalla.innerHTML=valor1;
        resta =false;
        operadorClicked=false;
        pantalla2.innerHTML=""; 
    }else if(multiplicacion ===true){
        pantalla.innerHTML ="";
        pantalla2.innerHTML ="";
        resultado = Number((parseFloat(valor1) * parseFloat(valor2)).toFixed(10));
        console.log(resultado);
        valor1=resultado;
        pantalla.innerHTML=valor1;
        multiplicacion =false;
        operadorClicked=false;
        pantalla2.innerHTML="";
    }else if(division ===true){
        pantalla.innerHTML ="";
        pantalla2.innerHTML ="";
        resultado = Number((parseFloat(valor1) / parseFloat(valor2)).toFixed(10));
        console.log(resultado);
        valor1=resultado;
        pantalla.innerHTML=valor1;
        division =false;
        operadorClicked=false;
        pantalla2.innerHTML="";
    }
})

//BOTON BORRAR TODO
botonBorrar.addEventListener("click", ()=>{
    pantalla.innerHTML ="";
    pantalla2.innerHTML ="";
    valor1="";
    valor2="";
    suma=false;
    resta=false;
    multiplicacion=false;
    division=false;
    operadorClicked=false;
})


//BOTON BORRAR UNO POR UNO
borrarUnitario.addEventListener("click", ()=>{
    if(valor2 ==""){
        valor1 = valor1.slice(0, -1);
        pantalla.innerHTML =valor1;
    }else if(valor1 !== ""){
        valor2 = valor2.slice(0, -1);
        pantalla2.innerHTML = valor2; 
        if(valor2 == ""){
            suma=false;
            resta=false;
            multiplicacion=false;
            division=false;
            operadorClicked=false;  
        }
    }
    
})


