function inicio(){
    
    $("h1").html("Come aquí");
    
    $("h2:first").html("Futras");
    
    $("h2:eq(1)").html("Vegetales");
    
    $("h2:eq(2)").html("Pan");
    
    $("ul:first li:gt(1)").html("Superior");
    
    $(":text").attr("value","Introduce texto");
    
    $("td:even").text("0");
    $("td:odd").text("1");
    
    $("[href]").attr("href","http://www.google.com");
    
    $("div.module").find("h2").text("Especiales");
    
    
        
}

