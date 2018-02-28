function inicio(){
    document.getElementById("enviar").addEventListener("click", crear);
    
}
window.onload=inicio;

function crear(){
    
    var tabla = document.getElementById("productos");
    
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var marca =document.getElementById("marca").value;
    
    
    
    var fila = tabla.insertRow(-1);

    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);

    celda1.innerHTML = nombre;
    celda2.innerHTML = precio;
    celda3.innerHTML = marca;
    
}


