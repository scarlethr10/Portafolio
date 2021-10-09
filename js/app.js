/*
   Variables 
*/
var lblNumero = document.getElementById("lbl-numero")
var txtNumero = document.getElementById("txt-numero")
var lblSigno = document.getElementById("lbl-signo")
var btn0 = document.getElementById("btn-0")
var btn1 = document.getElementById("btn-1")
var btn2 = document.getElementById("btn-2")
var btn3 = document.getElementById("btn-3")
var btn4 = document.getElementById("btn-4")
var btn5 = document.getElementById("btn-5")
var btn6 = document.getElementById("btn-6")
var btn7 = document.getElementById("btn-7")
var btn8 = document.getElementById("btn-8")
var btn9 = document.getElementById("btn-9")
var btnRaiz = document.getElementById("btn-Raiz")
var btnln = document.getElementById("btn-Ln")
var btnLog = document.getElementById("btn-log")
var btnPotencia = document.getElementById("btn-potencia")
var btnDEL = document.getElementById("btn-DEL")
var btnAC = document.getElementById("btn-AC")
var btnMultiplicar = document.getElementById("btn-multiplicar")
var btnDivisión = document.getElementById("btn-división")
var btnSuma= document.getElementById("btn-suma")
var btnResta = document.getElementById("btn-resta")
var btnPunto = document.getElementById("btn-punto")
var btnPorsentaje = document.getElementById("btn-porsentaje")
var btnFactorial = document.getElementById("btn-factorial")
var btnAns = document.getElementById("btn-answer")
var btnIgual = document.getElementById("btn-igual")

factorial(parseInt(txtNumero.value))

/*
   Variables internas
*/
var a = 0
var b = 0
var Ans = 0
var operacion = " "

/*
Metodos   y funciones 
*/
function interaccionBoton (){
  txtNumero.value = txtNumero.value  + this.value
}
function signoSeleccionado(){operacion = this.value 
                             lblSigno.innerHTML = operacion
                             a = parseFloat(txtNumero.value)
                             txtNumero.value = " "
                            }
function factorial(a){
  let ansFactorial  = 1
  for (c = 1; c<(a+1); c++){
     ansFactorial =  ansFactorial * c
  }
  return  ansFactorial
}

function operacionRealizada(){
  b = parseFloat(txtNumero.value)
  switch (operacion) {
      
    case "+":
      {
      Ans = (a+b) 
      txtNumero.value = Ans
      break
      } 
      
    case "-":
      {
      Ans = (a-b) 
      txtNumero.value = Ans
      break
      }
      
    case "*":
      {
      Ans = (a*b) 
      txtNumero.value = Ans
      break
      }
    case "/":
      {
       Ans = (a/b) 
      txtNumero.value = Ans
      break
      }
      case "%":
      {
       Ans = (a*b/100) 
      txtNumero.value = Ans
      break
      }
      case "√":
      {
       Ans = (Math.sqrt(a)) 
      txtNumero.value = Ans
      break
      }
      case "ln":
      {
       Ans = (Math.log(a)) 
      txtNumero.value = Ans
      break
      }
      case "log":
      {
       Ans = (Math.log10(a)) 
      txtNumero.value = Ans
      break 
      }
      case "x2":
      {
       Ans = (a*a) 
      txtNumero.value = Ans
      break
      }  
      case "!":
      {
       Ans = factorial(a) 
      txtNumero.value = Ans
      break
      }  
}
}

function borrarTodo(){txtNumero.value = " "}
function borrarUnnumero(){Ans = txtNumero.value
                          operacion = Ans.substring(0,Ans.length-1)
                          txtNumero.value = operacion
                         }
function respuestaAnterio(){txtNumero.value = Ans}

 /*
 Escucha de clic
 */
 btn0.addEventListener('click',interaccionBoton)
 btn1.addEventListener('click',interaccionBoton)
 btn2.addEventListener('click',interaccionBoton)
 btn3.addEventListener('click',interaccionBoton)
 btn4.addEventListener('click',interaccionBoton)
 btn5.addEventListener('click',interaccionBoton)
 btn6.addEventListener('click',interaccionBoton)
 btn7.addEventListener('click',interaccionBoton)
 btn8.addEventListener('click',interaccionBoton)
 btn9.addEventListener('click',interaccionBoton)
 btnPunto.addEventListener('click',interaccionBoton)
 btnRaiz.addEventListener('click',signoSeleccionado)
 btnln.addEventListener('click',signoSeleccionado)
 btnLog.addEventListener('click',signoSeleccionado)
 btnPotencia.addEventListener('click',signoSeleccionado)
 btnMultiplicar.addEventListener('click',signoSeleccionado)
 btnDivisión.addEventListener('click',signoSeleccionado)
 btnSuma.addEventListener('click',signoSeleccionado)
 btnResta.addEventListener('click',signoSeleccionado)             
 btnPorsentaje.addEventListener('click',signoSeleccionado)
 btnFactorial.addEventListener('click',signoSeleccionado)
 btnIgual.addEventListener('click',operacionRealizada)
 btnAC.addEventListener('click',borrarTodo)
 btnDEL.addEventListener('click',borrarUnnumero)                                       
 btnAns.addEventListener('click',respuestaAnterio) 

