function pedirDatos(){
	var datos;
	datos =prompt("Introduzca su nombre, dos apellidos, y el año de nacimiento separados por un espacio.");
	var datosArray = datos.split(" ");

	var nombre;
	var apellidos;
	var fechaNaci;

	nombre = datosArray[0];
	apellidos = datosArray[1] + datosArray[2];
	fechaNaci = datosArray[3];
	nombreApellidos = nombre + apellidos;

	//variablepara longitud de nombre y apellidos
	var longitud;
	longitud = (nombreApellidos).length;
	contarVocales(nombreApellidos);



}

function contarVocales(cadena){
	var cont = 0;
	var num = 0;
	while (cont < 5){

		switch (cont){

			case 0:
				/* Split convierte el string en un array separado cada ve que encuentra el valor introducido(vocal)
				De este modo luego cuento el tamaño del array-1 y asi cuento el numero de veces que se ha encontrado una vocal para hacer split
				Por ejemplo: vocas  si lo separo por la a daria voc,as . Al ahcer el length daria 2 pero se ha encontrado solo una asi que -1.*/
				alert("Tiene " + cadena.split('a').length - 1 + " a's");
				num += (str.split('a').length - 1);
				break;

			case 1:

				alert("Tiene " + cadena.split('e').length - 1 + " e's");
				num += (str.split('e').length - 1);
				break;

			case 2:

				alert("Tiene " + cadena.split('i').length - 1 + " i's");
				num += (str.split('a').length - 1);
				break;

			case 3:

				alert("Tiene " + cadena.split('o').length - 1 + " o's");
				num += (str.split('o').length - 1);
				break;

			case 4:

				alert("Tiene " + cadena.split('u').length - 1 + " u's");
				num += (str.split('u').length - 1);
				break;
		}

	}

	alert("En total tiene "+ num + " vocales.");


}