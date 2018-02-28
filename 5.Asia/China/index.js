function inicio(){
			document.getElementById("ned").addEventListener("mouseover", addTextoNed);
			document.getElementById("ned").addEventListener("mouseout", remTextoNed);
            
            document.getElementById("arya").addEventListener("mouseover",addTextoArya);
    
            document.getElementById("arya").addEventListener("mouseout", remTextoArya);
    
            document.getElementById("jon").addEventListener("mouseover",addTextoJon);
    
            document.getElementById("jon").addEventListener("mouseout", remTextoJon);
            
            document.getElementById("jon").addEventListener("mouseover",addTextoJon);
    
            document.getElementById("jon").addEventListener("mouseout", remTextoJon);
    
            document.getElementById("oberyn").addEventListener("mouseover",addTextoOberyn);
    
            document.getElementById("oberyn").addEventListener("mouseout", remTextoOberyn);

            document.getElementById("selStark").addEventListener("click",selStark);
    
            

		}

function selStark(){
	var starks = document.getElementsByClassName("stark");
	for (var i = 0; i < starks.length; i++) {
		starks[i].style.backgroundColor="blue";

	}
}

function remTextoNed(){
			document.getElementById("ned").removeChild(document.getElementById("ned").lastChild);
		}
function addTextoNed(){
			var node = document.createElement("P");
			var textoNode = document.createTextNode("Es el primer en morir");
			node.appendChild(textoNode);
			document.getElementById("ned").appendChild(node);

		}

function remTextoOberyn(){
			document.getElementById("oberyn").removeChild(document.getElementById("oberyn").lastChild);
		}
function addTextoOberyn(){
			var node = document.createElement("P");
			var textoNode = document.createTextNode("Muere a manos de La Montaña con su cráneo aplastado.");
			node.appendChild(textoNode);
			document.getElementById("oberyn").appendChild(node);

		}
function remTextoArya(){
			document.getElementById("arya").removeChild(document.getElementById("arya").lastChild);
		}
function addTextoArya(){
			var node = document.createElement("P");
			var textoNode = document.createTextNode("Aún sigue viva");
			node.appendChild(textoNode);
			document.getElementById("arya").appendChild(node);

		}
function remTextoJon(){
			document.getElementById("jon").removeChild(document.getElementById("jon").lastChild);
		}
function addTextoJon(){
			var node = document.createElement("P");
			var textoNode = document.createTextNode("Nos asusta muriendo, pero pronto nos cura el susto y en la actualidad sigue vivo ;)");
			node.appendChild(textoNode);
			document.getElementById("jon").appendChild(node);

		}