let yo = document.getElementById("yo");
let cielo = document.getElementById("cielo");
let montaña = document.getElementById("montañita");
let sierra = document.getElementById("montañas");
let titulo = document.getElementById("titulo");
let mar = document.getElementById("mar");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if (value<380){
        yo.style.top = value * 0 + "px"
        mar.style.top = value * 0 + "px";
        montaña.style.top = value * 0.5 + "px";
        sierra.style.top = value * 0.3 + "px";
        titulo.style.left = value * 2 +"px";  
        cielo.style.top = value * 0.7 + "px"; 
    }
})

//este es un simple script para conseguir el efecto parallax de las imagenes