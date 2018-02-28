	function pedirDatos(){
	var datos;
	datos =prompt("Introduzca su nombre, dos apellidos, y el año de nacimiento separados por un espacio.");
	var datosArray = datos.split(" ");

	//pasamos la cadena a mayusculas
	datos = pasarMayusculas(datos);

	var nombre;
	var apellidos;
	var fechaNaci;
	var apellido1;
	var apellido2;

	nombre = datosArray[0];
	apellidos = datosArray[1] +" "+ datosArray[2];
	fechaNaci = datosArray[3];
	apellido1 = datosArray[1];
	apellido2 = datosArray[2];

	nombreApellidos = nombre + apellidos;

	alert(nombre +"\n"+ apellido1 +"\n"+ apellido2 +"\n"+ fechaNaci);
	//variablepara longitud de nombre y apellidos
	var longitud;
	longitud = (nombreApellidos).length;
	alert(nombreApellidos);
	alert("La longitud de la cadena de nombre y apellidos es "+longitud);

	contarVocales(nombreApellidos);

	var nombreUsuario;
	nombreUsuario = (nombre.charAt(0) + apellido1 + apellido2.charAt(0) + fechaNaci.slice(-2)).toLowerCase();



}



function contarVocales(cadena){
	var cont = 0;
	var num = 0;
	var numA, numE, numI, numO, numU;
	while (cont < 5){

		switch (cont){

			case 0:
				/* Split convierte el string en un array separado cada ve que encuentra el valor introducido(vocal)
				De este modo luego cuento el tamaño del array-1 y asi cuento el numero de veces que se ha encontrado una vocal para hacer split
				Por ejemplo: vocas  si lo separo por la a daria voc,as . Al ahcer el length daria 2 pero se ha encontrado solo una asi que -1.*/
				numA=cadena.split('a');
				alert( cadena);
				alert("Tiene " + (numA.length - 1) + " a's");
				num += (numA.length - 1);
				cont++;
				break;

			case 1:
				numE=cadena.split('e');
				alert("Tiene " + (numE.length - 1) + " e's");
				num += (numE.length - 1);
				cont++;
				break;

			case 2:

				alert("Tiene " + (cadena.split('i').length - 1) + " i's");
				num += (cadena.split('a').length - 1);
				cont++;
				break;

			case 3:

				alert("Tiene " + (cadena.split('o').length - 1) + " o's");
				num += (cadena.split('o').length - 1);
				cont++;
				break;

			case 4:

				alert("Tiene " + (cadena.split('u').length - 1) + " u's");
				num += (cadena.split('u').length - 1);
				cont++;
				break;
		}

	}

	alert("En total tiene "+ num + " vocales.");


}
function pasarMayusculas(cadena){

	return cadena.toUpperCase();
}