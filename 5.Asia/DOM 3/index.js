function inicio(){
    
    parentesco();
    
}

/*
var familia = [hija, nieta];
var familio = [hijo, nieto];

var familia1 = [madre. abuela];
var familio2 = [padre, abuelo];
*/

function parentesco(){
    var divs = document.getElementsByTagName("div");
    
    //para posicionarme en el primer elemento
    
    for(var i=0;i<divs.length;i++){
        var abuelo1=null;
        var abuelo = null;
        //var superior= null;
        //var superior1 = null;
        var texto ="";
        texto += divs[i].id+" "; 
        
        if (divs[i].className=="mujer"){
            //estas declaraciones no funcionan
           var  superior = divs[i].firstChild;
            var superior1 = divs[i].lastChild;
            if(superior != null){
                 if(superior.className == "mujer"){
                     
                     texto += "es HIJA de "+superior.id+"(MADRE)";
                     texto += " y "+superior1.id+"(PADRE)";
                     
                     abuelo = superior.firstChild;
                     abuelo1 = superior.lastChild;
                     
                     if(abuelo!= null){
                         if (abuelo.className =="mujer"){
                             texto+= " y es NIETA de "+abuelo.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte materna.";
                         }else{
                             texto+= " y es NIETA de "+abuelo.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte materna.";
                         }
                         if (abuelo1.className =="mujer"){
                             texto+= " y es NIETA de "+abuelo1.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte paterna.";
                         }else{
                             texto+= " y es NIETA de "+abuelo1.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte paterna.";
                         }
                     }

                         
                     
                     
                 }else{
                     texto += "es HIJA de "+superior.id+"(PADRE)";
                     texto += " y "+superior1.id+"(MADRE)";
                     
                     abuelo = superior.firstChild;
                     abuelo1 = superior.lastChild;
                     
                     if(abuelo != null){
                         if (abuelo.className =="mujer"){
                             texto+= " y es NIETA de "+abuelo.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte materna.";
                         }else{
                             texto+= " y es NIETA de "+abuelo.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte materna.";
                         }
                         if (abuelo1.className =="mujer"){
                             texto+= " y es NIETA de "+abuelo1.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte paterna.";
                         }else{
                             texto+= " y es NIETA de "+abuelo1.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte paterna.";
                         }
                     }
                         
                     
                 }
                
                
             }else{
                 texto+= "no tiene más familiares.";
             }
        }else{
             superior = divs[i].firstChild;
            superior1 = divs[i].lastChild;
            if(superior != null){
                 if(superior.className == "mujer"){
                     
                     texto += "es HIJo de "+superior.id+"(MADRE)";
                     texto += " y "+superior1.id+"(PADRE)";
                     
                     abuelo = superior.firstChild;
                     abuelo1 = superior.lastChild;
                     
                     if(abuelo!= null){
                         if (abuelo.className =="mujer"){
                             texto+= " y es NIETO de "+abuelo.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte materna.";
                         }else{
                             texto+= " y es NIETO de "+abuelo.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte materna.";
                         }
                         if (abuelo1.className =="mujer"){
                             texto+= " y es NIETO de "+abuelo1.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte paterna.";
                         }else{
                             texto+= " y es NIETO de "+abuelo1.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte paterna.";
                         }
                     }

                         
                     
                     
                 }else{
                     texto += "es HIJO de "+superior.id+"(PADRE)";
                     texto += " y "+superior1.id+"(MADRE)";
                     
                     abuelo = superior.firstChild;
                     abuelo1 = superior.lastChild;
                     
                     if(abuelo != null){
                         if (abuelo.className =="mujer"){
                             texto+= " y es NIETO de "+abuelo.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte materna.";
                         }else{
                             texto+= " y es NIETO de "+abuelo.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte materna.";
                         }
                         if (abuelo1.className =="mujer"){
                             texto+= " y es NIETO de "+abuelo1.id+"(ABUELA) y "+abuelo1+" (ABUELO) por parte paterna.";
                         }else{
                             texto+= " y es NIETO de "+abuelo1.id+"(ABUELO) y "+abuelo1+" (ABUELA) por parte paterna.";
                         }
                     }
                         
                     
                 }
                
                
             }else{
                 texto+= "no tiene más familiares.";
             }
        }
        
        var parrafo = document.createElement("p");
        var nodo = document.createTextNode(texto);
        parrafo.appendChild(nodo);
        divs[0].appendChild(parrafo);
        //document.getElementByTagName("div").appendChild(parrafo);
    }
    
    
}

