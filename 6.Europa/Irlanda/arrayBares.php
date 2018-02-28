<?php
$arrayBares = array("foggy"=>"Animado local con bola de espejos y terraza donde tomar pintxos y copas con música en vivo y por las noches sesiones de DJ","temple"=>"Es el pub irlandés mas famoso, creado en 1840.Situado en el centro ed Dublin","old"=>"Pub Irlandes clasico, cierra a la 1.30 entre semana y a las 2:30 los fines de semana.Suele estar bastante concurrido y con mínimo 15 minutos de espera.","porter"=>"Abierto en 1996, fue el primer pub con su propia fabricación de cerveza.Su primera cerveza fue la WeisserBuddy.","buskers"=>"De decoración mucho más contemporánea, es uno de os bares mas conocidos con música en vivo todos los dias de la semana.Los domingos tienen DJs por la noche.");

$bar = $_REQUEST["bar"];


if($arrayBares["$bar"]!=""){
    $info=$arrayBares["$bar"];
    
}else{
    $info="informacion no encontrada";
}

echo($info);

?>