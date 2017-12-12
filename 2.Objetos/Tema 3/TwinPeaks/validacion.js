//formulario con:
//poner patterns para autentificaciones investigadores:
//nombre-2-32
//num-0-9(8)+letra
//idvirus num de 1 a 10 digitos
//firma? 8-50string empieza por s4nd1eg0, escribir en focus automaticamente s4nd1eg0
//al de 15 segundos emitir mensaje jessie pinkman
var formulario = document.getElementById("miFormulario");

window.onload = iniciar;
//cuenta d 15 segundos sin hacer nada
document.onload = setTimeout(function(){alert("no seas como Jessie Pinkman");},15000);

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
    
}

function soporta(){
    if(typeof(Storage)!== "undefined"){
        if (localStorage.usuario!=null){
            document.getElementById("saludo").innerHTML="Hola otra vez "+localStorage.usuario+;
        }else{
            localStorage.usuario=prompt("Introduce tu nuevo usuario");
            document.getElementById("saludo").innerHTML="Bienvenido "+  localStorage.usuario+"!";
        }
        
    }
}


function error(e, error) {
    document.getElementById("mensajeError").innerHTML = error;
    elemento.className = "error";
    elemento.focus();
}


function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Venga, fijo que tienes un nombre.");
        
        
        return false;
    }
    return true;
}

function validaNumero() {
    var elemento = document.getElementById("identificador");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Sin ID no accedes, la vida es dura.");
        
        
        return false;
    }
    return true;
}
    
    function validaVirus() {
    var elemento = document.getElementById("ivirus");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Ya es dificil escoger un numero que no este entre 1 y 9999999999 eh?");
        
        
        return false;
    }
    return true;
}
        
//ni idea de que escriba automaticamente sandiego
function validaSandiego() {
    var elemento = document.getElementById("sandiego");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Si no la recuerdas tienes un problema");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Debe empezar por S4ND1EG0");
        } 
        return false;
    }
    return true;
}
function validar(e) {
    borrarError();
    if (validaNombre() && validaNumero() && validaVirus() && validaSandiego() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        
        return true
    } else {
        e.preventDefault();
        return false;
    }
}