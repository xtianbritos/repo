//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    let usuario = JSON.parse(localStorage.getItem("Usuario"));
    document.getElementById("userLog").innerHTML=usuario.nombre;
});