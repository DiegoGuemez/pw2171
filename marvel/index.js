const rq 	= require('electron-require');
const main 	= rq.remote('./main.js');
const $ 	= require("jquery");

//Posiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus();
//Eventp del botón btnBuscar-click
$("#btnBuscar").on("click",buscarPersonaje);