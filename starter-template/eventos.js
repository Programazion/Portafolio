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
    alert("Curriculum por Cambio de imagenes, En esta página puedes evidenciar 3 funciones para cambiar y esconder fotos");
    var data= document.getElementById('home');
    data.style.backgroundColor= "orange";

}

var elementsdiv =document.querySelectorAll('div')
console.log(elementsdiv[4])

function changeImage(){
    var foto1 = document.getElementById('foto1');
    var foto2 = document.getElementById('foto2');
    var foto3 = document.getElementById('foto3');
    foto1.src= "about.jpg";
    foto2.src = "crea.jpg"; 
    foto3.src= "4a.png";
}

function changeImage2(){
    var foto1 = document.getElementById('foto1');
    var foto2 = document.getElementById('foto2');
    var foto3 = document.getElementById('foto3');
    foto1.src= "Imagen3.png";
    foto2.src = "Imagen2-modified.png"; 
    foto3.src= "educacion.png";
}

function changeImage3(){
    var foto1 = document.getElementById('foto1');
    var foto2 = document.getElementById('foto2');
    var foto3 = document.getElementById('foto3');
    foto1.src= "about.jpg";
    foto2.src = "crea.jpg"; 
    foto3.src= "4a.png";
}