function perimetroTriangulo(a,b,c){
	if(a===undefined){
		alert("no ha introducido ningun valor.");
	}else{

		if(b=== undefined){
				alert(a);
				
				return a*3;
		}else{
			if(c === undefined){
					
				alert(a,b);

				return 2 * a + b;
			}else{

				alert(a,b,c);

				return a + b + c;
			}

		}
	}

}
function perimetroParalelogramo(l1,l2){

	if (l1 === undefined){
		alert("no ha introducido ningun dato.");

	}else{
		if (l2 === undefined){
			alert(l1);

			return l1*4;
		}else{
			alert(l1,l2);

			return (l1 * 2) + (l2 * 2);
		} 
	}

}
function areaCircunferencia(r){
	return Math.PI * Math.pow(r,2);
}
function areaTriangulo(base,altura){
	return base * altura;
}
function areaCuadrado(l){
	return Math.pow(l,2);
}
function areaRectangulo(l1,l2){
	return l1 * l2;
}
function areaPoligono(num, dos,tres,cuatro){

	switch (num){
		case 0:
			alert("¿en serio piensas que un punto puede tener area?. Eso de la teoria del punto gordo no termina de ser válido que lo sepas.");
			break;

		case 1:
			areaCircunferencia(num,dos);
			break;

		case 2:
			alert("Todavía no hay polígonos con dos lados chaval, vas a inventar tu la geometria euclidiana...");
			break;

		case 3:
			areaTriangulo(dos,tres);
			break;

		case 4:
			if (tres === undefined){
				areaCuadrado(dos);
			}else{
				areaRectangulo(dos,tres);
			}
			break;
		default:
			alert("No ha seleccionado ninguna opcion correcta, pruebe con un numero 0 < num < 5");
			break;
	}

}




