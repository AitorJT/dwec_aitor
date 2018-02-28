alert("asdf");
var areaTriangulo = function (b,a){return b * a / 2;};

var perimetroTrianguloEquilatero = function (l){return l * 3;};

var perimetroTrianguloIsosceles = function (l1,l2){return (l1 * 2) + l2;};

var perimetroTrianguloEscaleno = function (l1,l2,l3){return l1 + l2 + l3;};


///___________________________________________________________


var areaCuadrado = new function ("l", "return Math.pow(l,2);");

var perimetroCuadrado = new function ("l","return l * 4;");

var areaRectangulo = new function ("l1","l2", "return l1 * l2;");

//_________________________________________________________________

/* function areaCirculo(r){
    return Math.PI * Math.pow(r,2);
}*/

(function (r){return Math.PI * Math.pow(r,2);}());


/* function longitudCircunferencia(r){
    return 2 * Math.PI * r;
}
*/
(function(r){return 2 * Math.PI * r;}());