function validar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre && email && mensaje){
        alert('Gracias por contactarnos, todos los datos completos');
    }else if(nombre || email || mensaje === null){
        alert ("Algunos campos estan incompletos")
    }else{
        alert ("No se ha enviado ningun dato");
    }
}