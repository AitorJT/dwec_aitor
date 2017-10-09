function menu(){
	alert("Este programa automatiza la fase final del Trivial.");
	var opcion;
	var aciertos = 0;
	var fallos = 0;
	var respuesta;
	alert(" Puede escoger entre varias opciones, para las cuales debe introducir su número correspondiente.");
	//alert("0.Geografía; 1.Arte; 2.espectáculos; 3.Historia; 4.Ciencias; 5.Deportes.")

	
	
	var temas=["0.Geografia","1.Arte","2.Espectáculos","3.Historia","4.Ciencias","5.Deportes"];
	
	while((fallos < 3) && (aciertos < 4)){
		
		alert(temas);
		opcion = prompt("Introduzca la opcion deseada.");
		opcion = parseInt(opcion);


		switch(opcion){

			case 0:
				respuesta= prompt("¿En qué comunidad autónoma comenzaron los Sandkills de DAW2?");
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
	if(fallos >= 3 ){
		alert("Has fracasado en la prueba.");
	}else{
		alert("Has superado la prueba.");
	}

}