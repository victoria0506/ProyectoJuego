



let juego = document.getElementsByClassName("celda")

let jugadorUno = true



for (let index = 0; index < juego.length; index++) {

    juego[index].addEventListener("click", function(e){


///////// validar si la celda esta vacia /////////
    //console.log(ganador())
    if (e.target.innerHTML == "" && !ganador() ) {
        if (jugadorUno){
            e.target.innerHTML = "✘" 
            jugadorUno = false 
    
        }else{
            e.target.innerHTML = "o" 
            jugadorUno = true
        }

    }else{

    }

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

let simboloWn = document.getElementById("ganador")

function ganador(){

    for (let index = 0; index < winnir.length; index++) {

        const [c1, c2, c3] = winnir[index] 
    
        if (juego[c1].innerHTML && juego[c1].innerHTML === juego[c2].innerHTML && juego[c1].innerHTML == juego[c3].innerHTML){

           simboloWn.innerHTML = juego[c1].innerHTML + " Ganador"

           return true
        }
    }
    return false
}

let btnreiniciar = document.getElementById("reiniciar")























