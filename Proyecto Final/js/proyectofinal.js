
let front = document.getElementById("frente");
let fondo = document.getElementById("fondo");
let cielo = document.getElementById("cielo");
let titulo = document.getElementById("titulo");


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if (value<380){
        cielo.style.top = value * 0.5 + "px"
        front.style.top = value * 0 + "px";
        fondo.style.top = value * 0.4 + "px";
        titulo.style.left = value * 2 + "px";  
    }
})

//este es un simple script para conseguir el efecto parallax de las imagenes