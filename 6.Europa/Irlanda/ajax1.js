

window.onload=function(){
    
    document.getElementById("bares").addEventListener("change",mostrarInfo);
    
};
function inicio(){
    document.getElementById("bares").addEventListener("change",mostrarInfo);
    
    
}
function mostrarInfo(e){
    var cadena = e.target.value;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("info").innerHTML = this.responseText;
        }
    };
    xhr.open("GET","arrayBares.php?bar="+cadena,true);
    xhr.send();
}