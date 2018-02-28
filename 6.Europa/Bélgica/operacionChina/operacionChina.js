

function inicio(){
    $(".mostrarStark").click(function(){
        $(".stark").css({
            "background-color":"blue",
            "border":"5px solid aqua"
            //"backgroundColor":"blue"            
        })
         
    });
    $(".mostrarLannister").click(function(){
        $(".lannister").css({
            "background-color":"brown",
            "border":"5px solid brown"
            //"backgroundColor":"blue"            
        })
         
    });
    /*function fondoAzul(){
    
        $(".stark").css({
            backgroundColor:blue        
        })
    }*/

    $("#mostrarMuertos").click(function(){
        $(".muerto").css({
            "border":"6px solid red",
            "borderRadius":"30%"
        })
        

    });
}