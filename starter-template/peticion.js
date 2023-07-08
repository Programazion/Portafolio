console.log("Loading Javascript");
//Funcion guardar contacto y enviar a la Base de datos
function saveContacto(){


let nombreContacto = document.getElementById("nombre");
let apellidosContacto = document.getElementById("apellidos");
let telefonoContacto = document.getElementById("telefono");
let emailContacto = document.getElementById("email");
let requerimientoContacto = document.getElementById("requerimiento");


let contacto ={
    nombre: nombreContacto.value,
    apellidos: apellidosContacto.value,
    telefono: telefonoContacto.value,
    email: emailContacto.value,
    requerimiento: requerimientoContacto.value
}

console.log(contacto);

let url= "http://localhost:8000/api/respuesta";
let params ={
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(contacto),
}
fetch(url,params).then(response =>{

    console.log(response);

    if (response.status==201){

        alert("Envío exitoso <<Pronto uno de nuestros agentes te contactará>>");
    }if(response.status==500){
    alert("Enviaste el formulario Incompleto, Pero no te preocupes te contactaremos a la mayor brevedad ");
    }

});  
    return true
}//fin de la función saveContacto()

//Función para buscar contacto
function getContacto(){

let url= "http://localhost:8000/api/peticion";
let params ={
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response)=>{
        console.log(response);
        
        if (response.status==200){

            alert("Búsqueda exitosa <<Revisa en el ménú Promise result el array de la Base de datos");
            console.log(response.json());
        }if
            (response.status==500){
            alert("Error en la búsqueda faltan datos en el formulario intenta de nuevo")
        }       

    });
        return true;
}
// Fin de la función getContacto()
