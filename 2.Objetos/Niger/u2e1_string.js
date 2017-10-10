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

}