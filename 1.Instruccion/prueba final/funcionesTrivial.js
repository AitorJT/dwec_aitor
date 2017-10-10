
//function fallada(temas[], tema){ 
// se podrian hacer funciones por ejemplo para evaluar las respuestas de cada pregunta, pero no veo que lo vaya a hacer mas eficiente.



/* No entra ni devuelve nada, se encarga de realizar la eleccion de preguntas.*/
function menu(){
	alert("Este programa automatiza la fase final del Trivial.");
	var opcion;
	var aciertos = 0;
	var fallos = 0;
	var respuesta;
	/* creacion de variables para aciertos/fallos y para guardar la respuesta y opcion deseada.*/
	alert(" Puede escoger entre varias opciones, para las cuales debe introducir su número correspondiente.");

	
	
	var temas=["0.Geografia","1.Arte","2.Espectáculos","3.Historia","4.Ciencias","5.Deportes"];
	
	/* bucle para que siga haciendo preguntas siempre que el jugador no haya 
	ganado/perdido por exceso de fallos o aciertos*/
	while((fallos < 3) && (aciertos < 4)){
		
		alert(temas);
		opcion = prompt("Introduzca la opcion deseada.");
		opcion = parseInt(opcion);

		/* dependiendo de la opcion seleccionada se realiza una pregunta*/
		switch(opcion){

			case 0:
				respuesta= prompt("¿En qué comunidad autónoma comenzaron los Sandkills de DAW2?");
				/* Si la respuesta es acertada, se suma un acierto, sino se suma un fallo.
				En ambos casos se elimina la ultima opcion seleccionada del array de opciones.
				Con el añadido de que se mostrará si esa pregunta se acertó o falló.
				*/
				if (respuesta != "Cantabria"){
					fallos++;
					temas[0]= "Geografía fallada.";
					alert("Incorrecta");
				}
				else{
					aciertos++;
					temas[0]= "Geografía acertada.";
					alert("Correcta.");
				}
				break;

				
			case 1:
				respuesta= prompt("¿Cuantas pinturas se conocen de Da Vinci? Introduce el resultado como un numero.");
				if (respuesta != 15){
					fallos++;
					temas[1]= "Arte fallada.";
					alert("Incorrecta");
				}
				else{
					aciertos++;
					temas[1]= "Arte acertada.";
					alert("Correcta.");
				}
				break;


			case 2:
				respuesta= prompt("¿Aparece ET en el episodio 1 de Star Wars?");
				if (respuesta != "si"){
					fallos++;
					temas[2]= "Espectaculos fallada.";
					alert("Incorrecta");
				}
				else{
					aciertos++;
					temas[2]= "Espectaculos acertada.";
					alert("Correcta.");
				}
				break;


			case 3:
				respuesta= prompt("¿Cuantos hijos tuvo Alfonso XIII con su esposa?");
				if (respuesta != 7){
					fallos++;
					temas[3]= "Historia fallada.";
					alert("Incorrecta");
				}
				else{
					aciertos++;
					temas[3]= "Historia acertada.";
					alert("Correcta.");
				}
				break;

			case 4:
				respuesta= prompt("¿Pueden planear los helicópteros en caso de fallo de motor?");
				if (respuesta != "si" ){
					fallos++;
					temas[4]= "Ciencias fallada.";
					alert("Incorrecta");
				}
				else{
					aciertos++;
					temas[4]= "Ciencias acertada.";
					alert("Correcta.");
				}
				break;


			case 5:
				respuesta= prompt("¿puede una tabla de surf tener 4 quillas en lugar de 3?");
				if (respuesta != "si" ){
					fallos++;
					temas[5]= "Deportes fallada.";
					alert("Incorrecta");
				}
				else{
					aciertos++;
					temas[5]= "Deportes acertada.";
					alert("Correcta.");
				}
				break;



		}
	}
	/* Se notifica al usuario el motivo por el que ha terminado la prueba.*/
	if(fallos >= 3 ){
		alert("Has fracasado en la prueba.");
	}else{
		alert("Has superado la prueba.");
	}

}