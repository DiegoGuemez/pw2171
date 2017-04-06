//Agrega al codigo (un enlace) al main.js
const rq = require('electron-require');
const main = rq.remote('./main.js');
var botonesNumero = ["bn00","btn01","btn02","bn03","btn04",
					 "btn05","bn06","btn07","btn08","bn09"];
var botonesOperador = ["btnSumar","btnRestar","btnMultiplicar","btnDividir"];

function numeros(){
	alert(this.id);
	alert(this.value);
}
function operadores(){

}
function igual(){

}
function borrar(){

}

//Asignacion de eventos a los botones de número
for(var i=0;i<botonesNumero.length;i++){
	document.getElementByID(botonesNumero[i]).addEventListener('click',numeros);
}
//Asignacion de eventos a los botones de operador
for(var i=0;i<botonesOperador.length;i++){
	document.getElementByID(botonesOperador[i]).addEventListener('click',operadores);
}
//Evento click del boton igual
document.getElementByID("btnIgual").addEventListener('clic',igual);
//Evento click del boton CE
document.getElementByID("btnCE").addEventListener('clic',borrar);