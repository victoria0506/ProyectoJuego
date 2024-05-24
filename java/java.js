
// Variable de las celdas de juego
let juego = document.getElementsByClassName("celda")
let jugador = document.getElementById("jugador")

// Variable con valor boolean para cambiar entre jugadores
let jugadorUno = true

// Variable para mantener el estado del juego
let juegoActivo = true

for (let index = 0; index < juego.length; index++) {
    
    juego[index].addEventListener("click", function () {

        if (juego[index].innerHTML === "" && juegoActivo && !empate()) {

            if (jugadorUno) {

                juego[index].innerHTML = "✘"

                if (ganador()) {

                    let simboloWn = document.getElementById("ganador")
                    simboloWn.innerHTML = "✘ ganaste"
                    juegoActivo = false
                    
                } else if (empate()) {

                    let simboloWn = document.getElementById("ganador")
                    simboloWn.innerHTML = "Empate"

                } else {

                    jugador.innerHTML = "O Turno"
                    jugadorUno = false
                    juegaCompu()

                }
            }
        }
    });
}

// Matriz con las maneras de ganar
const winnir = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// Función para validar las posiciones que ganan
function ganador() {

    for (let index = 0; index < winnir.length; index++) {

        const [c1, c2, c3] = winnir[index]

        if (juego[c1].innerHTML && juego[c1].innerHTML === juego[c2].innerHTML && juego[c1].innerHTML === juego[c3].innerHTML) {

            return true
        }

    }

    return false
}


function juegaCompu() {

    setTimeout(() => {

        for (let index = 0; index < 30; index++) {

            let random = Math.floor(Math.random() * 9)

            if (juego[random].innerHTML === "" && juegoActivo) {

                juego[random].innerHTML = "O"

                if (ganador()) {

                    let simboloWn = document.getElementById("ganador")
                    simboloWn.innerHTML = "O ganaste"
                    juegoActivo = false 

                } else if (empate()) {

                    let simboloWn = document.getElementById("ganador")
                    simboloWn.innerHTML = "Empate"

                } else {

                    jugador.innerHTML = "✘ Turno"
                    jugadorUno = true

                }
                break
            }
        }
    }, 1000)
}


function empate() {
    for (let index = 0; index < juego.length; index++) {

        if (juego[index].innerHTML === "") {

            return false
        }
    }

    return true
}

















