var formulario = document.getElementById("miFormulario");

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

//funcion para añadir los cuatro campos al marcar el checkbox y borrarlos si se desmarca.
function dynInput(cbox) {
      if (cbox.checked) {
        var input = document.createElement("input");
        var input2 = document.createElement("input");
        var input3 = document.createElement("input");
        var input4 = document.createElement("input");
        input.type = "number";
        input2.type="radio";
        input3.type="radio";
        input4.type="radio";
        var div = document.createElement("div");
        var div2=document.createElement("div");
        var div3=document.createElement("div");
        var div4=document.createElement("div");
        div.id = cbox.name;
        div2.id = cbox.name+1;
        div3.id = cbox.name+2;
        div4.id = cbox.name+3;
        div.min = 10000;
        div.max = 99999;
        /*div.required;
        div.required=true;*/
        div.innerHTML = "Numero de socio" + cbox.name;
        div2.innerHTML = "Infantil";
        div3.innerHTML = "Juvenil";
        div4.innerHTML = "Senior";
        div.appendChild(input);
        div2.appendChild(input2);
        div3.appendChild(input3);
        div4.appendChild(input4);
        document.getElementById("insertinputs").appendChild(div);
        document.getElementById("insertinputs").appendChild(div2);
        document.getElementById("insertinputs").appendChild(div3);
        document.getElementById("insertinputs").appendChild(div4);
      } else {
        document.getElementById(cbox.name).remove();
        document.getElementById(cbox.name+1).remove();
        document.getElementById(cbox.name+2).remove();
        document.getElementById(cbox.name+3).remove();
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
            error(elemento, "Venga, fijo que tienes un nombre.")
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Estoy seguro de que tu nombre tiene mas de 1 y menos de 16 caracteres.");
        }
        
        return false;
    }
    return true;
}
function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir un teléfono")
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "El telefono debe tener 9 numeros");
        } 
        return false;
    }
    return true;
}
function validar(e) {
    borrarError();
    if (validaNombre() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        contForfait();
        cuentaSocios();
        return true
    } else {
        e.preventDefault();
        return false;
    }
}