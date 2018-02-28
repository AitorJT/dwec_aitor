$(document).ready(inicio);

function inicio(){

  var text = "";
  for (var i = 0; i < 60; i++) {
    text+="<tr>";
    for (var j = 0; j < 60; j++) {
      text+="<td></td>";
    }
    text+="</tr>";
  }
    
    //por algun motivo se salta pixeles

  $("#tabla").html(text);
    
    $("td").on({
        click: function(){
      $("#colores").removeData("color");
      $("#texto").text("Color: Sin color");
    },
    mouseenter: function(){
      $(this).css("background-color",$("#colores").data("color"));
    }
    
  });
    
    $("#blue").on("click",function(){
    $("#colores").removeData("color");
    $("#colores").data("color","blue");
    $("#texto").text("Color: "+$("#colores").data("color"));
    });
    
    $("#red").on("click",function(){
    $("#colores").removeData("color");
    $("#colores").data("color","red");
    $("#texto").text("Color: "+$("#colores").data("color"));
    });
    
    $("#yellow").on("click",function(){
    $("#colores").removeData("color");
    $("#colores").data("color","yellow");
    $("#texto").text("Color: "+$("#colores").data("color"));
    });
    
  $("#green").on("click",function(){
    $("#colores").removeData("color");
    $("#colores").data("color","green");
    $("#texto").text("Color: "+$("#colores").data("color"));
  });

  
  

  $("#aqua").on("click",function(){
    $("#colores").removeData("color");
    $("#colores").data("color","aqua");
    $("#texto").text("Color: "+$("#colores").data("color"));
  });

  $("#purple").on("click",function(){
    $("#colores").removeData("color");
    $("#colores").data("color","purple");
    $("#texto").text("Color: "+$("#colores").data("color"));
  });

  



}
