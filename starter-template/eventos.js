console.log('Cargando JavaScript');
console.log("Loading JavaScript Events");


function myAction(onmouseover) {
    alert("Pasa el mouse sobre los botones para encontrar la información de tu interés");
    var data= document.getElementById('home');
    data.style.backgroundColor= "orange";

}

function myAction2(onclick) {
    alert("Acá podrás conocer un poco más sobre mi perfil");
    var data= document.getElementById('cv');
    data.style.backgroundColor= "yellow";

}

function myAction3(onclick) {
    alert(" Bienvenid@s al Home");
    var data= document.getElementById('home');
    data.style.backgroundColor= "orange";

}

function myAction4(onclick) {
    alert(" Bienvenid@s al Home");
    var data= document.getElementById('home');
    data.style.backgroundColor= "orange";

}

var elementsdiv =document.querySelectorAll('div')
console.log(elementsdiv[4])

function myAction5(){
    elementsdiv = document.getElementById('foto1');
    elementdiv[4].innerHTML= "Hola Soy Daniel Sánchez " 
}
