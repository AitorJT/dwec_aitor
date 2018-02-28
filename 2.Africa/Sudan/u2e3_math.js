/* u2e3_math.html
Realiza un programa que permita elegir al usuario un tipo de lotería del estado y genere os números aleatorios en la propia página (no en un alert). Se mostrarán los siguientes tipos de loterías:
Lotería nacional (los ceros a la izquierda deben mostrarse).
Quiniela.
Primitiva (con complementario y reintegro).*/

function menu(){
	while (opcion == 1 || opcion == 2 || opcion == 3 ){

		let opcion = prompt("Introduzca la opcion: \n1) Loteria nacional \n2) Quiniela. \n3) Primitiva\n cualquier otro numero salir.");

		switch(opcion){
			case 1:
				document.write("ha escogido la opcion loteria nacional.");
				let minNac = 0;

				let maxNac = 99999;

				let numNac = numAleatorioIntervalo(minNac, maxNac);

				numNac = rellenarCeros(numNac,5);

				document.write("Su numero de loteria nacional es: "+numNac);

				break;


			case 2:
				document.write("Ha escogido generar una quiniela.");
				let quiniela = "";
				let valores = new Array("1", "2", "X");
				for(let i = 0; i<15; i++){
					quiniela += valores[numAleatorioIntervalo(0,2)]+"\n";
				}
				document.write(quiniela);
				break;


			case 3:
				document.write("Ha escogido generar una Primitiva.");
				let primitiva = "";
				for(let i = 0; i<6; i++){
					primitiva += numAleatorioIntervalo(1,49)+",";

				}
				document.write(primitiva);

			default: 
				break;
		}

	}


}

function rellenarCeros(num, longitud){
	let numString = ""+num;
	while (numString.length < longitud){
		numString = "0"+numString;
	}
	return numString;
}

function numAleatorioIntervalo(min, max){
	return Math.floor(Math.random() * (max - min +1) + min);


}