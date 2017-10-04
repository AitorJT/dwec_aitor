function juegoAdivinar(){
	alert("este juego adivinara una ciudad que estes pensando a escoger entre comillas, castro urdiales, torrelavega y reinosa")
	alert("¿se trata de una ciudad costera?");

	var respuesta = prompt("Introduzca la respuesta en forma de si o no, en minusculas y sin tildes ni cosas raras, que ya nos conocemos..."); 

	if (respuesta = si){
		alert("¿Dirias que se encuentra en el Oeste?(ya es hora de saber que oeste == izquierda por favor)");
		respuesta = prompt("Introduzca la respuesta"); 

		if (respuesta = si){
			alert("Estabas pensando en Comillas.");
		}else{
			alert("Estabas pensando en Castro Urdiaes.");
		}
	}else{
		alert("Entonces, ¿está en el norte de la region?");
		respuesta = prompt("Introduzca la respuesta"); 
		if(respuesta = si){
			alert("Estabas pensando en torrelavega.");
		}else{
			alert("Estabas pensando en reinosa.");
		}
	}
}