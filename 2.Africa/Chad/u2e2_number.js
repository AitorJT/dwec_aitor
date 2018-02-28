function conversor(){

	let num = prompt("Introduzca el numero a convertir en otras bases. Se aceptan base 2, 8, 10 y 16.");
	let base = prompt("Introduzca ahora la base del numero anteriormente introducido.");
	let base2 = 0;
	let base8 = 0;
	let base10 = 0;
	let base16 = 0;
	switch(base){
		case 2:

			base2 = num;

			base10 = parseInt(num, 2);

			base8 = base10.toString(8);

			base16 = base10.toString(16);

			break;



		case 8:

			base8 = num;

			base10 = parseInt(num, 8);

			base2 = base10.toString(2);

			base16 = base10.toString(16);

			break;

		case 10:

			base10 = num;

			base2 = base10.toString(2);

			base8 = base10.toString(8);

			base16 = base10.toString(16);

			break;

		case 16:

			base16 = num;

			base10 = parseInt(num, 16);

			base8 = base10.toString(8);

			base2 = base10.toString(2);

			break;

		default:
			break;
	}

	alert("Su número en b2 es "+base2+", en b8 es "+base8+", en base 10 es "+base10+" y en b16 es "+base16);


}

