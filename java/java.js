



let juego = document.getElementsByClassName("celda")

let jugadorUno = true
//console.log(juego);


for (let index = 0; index < juego.length; index++) {

    juego[index].addEventListener("click", function(e){

    //console.log(jugadorUno);
    //console.log("diste click");

///////// validar si la celda esta vacia /////////
    if (e.target.innerHTML == "") {
        if (jugadorUno){

            e.target.innerHTML = "✘" 
            jugadorUno = false 
    
        }else{
            e.target.innerHTML = "o" 
            jugadorUno = true
        }
        juego.disabled = true
    }
    ganador()
    })
}

const winnir = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
//console.log(winnir);

function ganador() {
    for (let index = 0; index < winnir.length; index++) {
        //console.log(winnir[index])

        const [c1, c2, c3] = winnir[index] 
    
        if (juego[c1].innerHTML && juego[c1].innerHTML === juego[c2].innerHTML && juego[c1].innerHTML == juego[c3].innerHTML) {

        return console.log("Has ganado");

        }
    }
        return null
}

















