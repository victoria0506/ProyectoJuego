

let jugadorUno = true
let juego = document.getElementsByClassName("celda")

//console.log(juego);

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];



for (let index = 0; index < juego.length; index++) {
    juego[index].addEventListener("click", function(e){
        console.log("diste click");
        juego.innerText = "✘"




    })
}


/*
let imprimir = e.target.innerHTML = jugadorUno? "✘" : "◯"
    
jugadorUno = !jugadorUno
*/



