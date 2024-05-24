
//Variable del las celdas de juego
let juego = document.getElementsByClassName("celda")
let jugador = document.getElementById("jugador")

//variable con valor boolean para cambiar entre jugadores
let jugadorUno = true

let jugadorActivo = true

for (let index = 0; index < juego.length; index++) {

    juego[index].addEventListener("click", function () {

        if (juego[index].innerHTML === "" && jugadorActivo && !empate()) {

            if (jugadorUno) {

                juego[index].innerHTML = "✘";

                if (ganador()) {

                    let simboloWn = document.getElementById("ganador");

                    simboloWn.innerHTML = "✘ ganaste";

                    jugadorActivo = false;  

                } else if (empate()) {

                    let simboloWn = document.getElementById("ganador");

                    simboloWn.innerHTML = "Empate";

                } else {

                    jugador.innerHTML = "O Turno";

                    jugadorUno = false;
                    
                    juegaCompu();
                }
            }
        }
    });
}


// matriz con la maneras de ganar
const winnir = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


// funcion para validar las pocisiones que ganan
function ganador() {

    // for para que recorra la matriz
    for (let index = 0; index < winnir.length; index++) {

        //costante con las posiciones que va a ser igual a las 3 posiciones en cada array de la matriz
        const [c1, c2, c3] = winnir[index]

        // validamos las casillas con las pocisiones
        if (juego[c1].innerHTML && juego[c1].innerHTML === juego[c2].innerHTML && juego[c1].innerHTML == juego[c3].innerHTML) {
            // si se cumple returne verdadero
            return true
        }
    }
    // si no falso
    return false
}


function juegaCompu(juego) {

    setTimeout(() => {
        for (let index = 0; index < 30; index++) {

            let random = Math.floor(Math.random() * 9);

            if (juego[random].innerHTML === "" && jugadorActivo) {

                juego[random].innerHTML = "O";

                if (ganador()) {

                    let simboloWn = document.getElementById("ganador");
                    simboloWn.innerHTML = "O ganaste";
                    jugadorActivo = false;  

                } else if (empate()) {

                    let simboloWn = document.getElementById("ganador");
                    simboloWn.innerHTML = "Empate";

                } else {

                    jugador.innerHTML = "✘ Turno";
                    jugadorUno = true;

                }
                break;
            }
        }
    }, 1000);
 
}

function empate() {
    for (let index = 0; index < juego.length; index++) {

        if (juego[index] === "") {

            return false

        }
    }
    return true
}

















