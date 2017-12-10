/*document.getElementById("carta").addEventListener("click",voltear, false);


function voltear(){
    //si esta sin voltear,voltea y viceversa
    if(document.getElementById("carta").src == cara){
        document.getElementById("carta").src = dorso;
    }else{
        document.getElementById("carta").src = cara;
    }
}*/


let mazo = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h','i','i'];
let cartasMemoria = [];
let cont = 0;
let idsMemoria = [];


//funcion usando prototype para mezclar un array(intercambia sus posiciones usando maniobra aleatoriamente)
Array.prototype.mezclarMazo = function(){
    let i = this.length, j , maniobra;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        maniobra = this[j];
        this[j]=this[i];
        this[i] = maniobra;
    }
}
function voltear(carta,valor){
    if(carta.innerHTML == "" && cartasMemoria.length < 2){
        carta.style.background='white';
        carta.innerHTML = valor;
        if(cartasMemoria.length == 0){
            
            cartasMemoria.push(valor);
            idsMemoria.push(carta.id);
            
        }else if(cartasMemoria.length == 1){
            
            cartasMemoria.push(valor);
            idsMemoria.push(carta.id);
            
            if(cartasMemoria[0] == cartasMemoria[1]){
                cont +=2;
                //ñimpiamos memoria
                cartasMemoria = [];
                idsMemoria = [];
                
                //comprobamos si se ha terminado la partida
                if(cont == mazo.length){
                    alert("Has ganado, iniciando nueva partida.");
                    document.getElementById('mesa').innerHTML="";
                    partidaNueva();
                }
            }else{
                //desvoltear();
                //espera un segundo antes de llevar a cabo la accion
                setTimeout(desvoltear,1000);
            }
        }
        
        
        
    }
}

function desvoltear(){
    let carta1 = document.getElementById(idsMemoria[0]);
    let carta2 = document.getElementById(idsMemoria[1]);
    //se colorean igual que en su estado sin voltear
    carta1.style.background = 'url(dorso.png)';
    carta1.innerHTML="";
    carta2.style.background = 'url(dorso.png)';
    carta2.innerHTML="";
    //se limpia memoria otra vez
    cartasMemoria=[];
    idsMemoria=[];
    
}

function partidaNueva(){
    cont=0;
    let salida = '';
    mazo.mezclarMazo();
    for(let i=0;i<mazo.length;i++){
        salida += '<div id="carta'+i+'" onclick="voltear(this,\''+mazo[i]+'\')"></div>';
        //sin listener, la funcion voltear esta incrustada.
    }
    document.getElementById('mesa').innerHTML = salida;
}