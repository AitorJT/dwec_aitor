function inicio(){
    //newTabla();
    $("td").css("height","100px");
    $("td").css("width","100px");
    $("td").css("backgroundColor","brown");
    
    
    $("td").on({
        mouseenter:function(){
            $(this).css("backgroundColor","rosyBrown");
        },
        mouseleave:function(){
            $(this).css("backgroundColor","brown");
            
        },
        click:function(){
            $(this).text("¡MMMMM....!");
            $(this).css("backgroundColor","red");
            $(this).off();
        }
        
    });
    
    $("#comerColumna").on("click",function(){
        $("td:first-child").remove();
    });
    $("#comerFila").on("click",function(){
        $("tr:first").remove();
    });
    
    
}

/*function newTabla(){
    
    var tabla = $("table");
    var texto = "";
    
    for(var filas=0;filas<7;filas++){
        texto+="<tr>";
        for(var columnas=0;columnas<5;columnas++){
            texto+="<td></td>";
        }
        texto+= "</tr>";
    }
    
    tabla.append(texto);
    

}
*/