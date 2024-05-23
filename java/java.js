
//Variable del las celdas de juego
let juego = document.getElementsByClassName("celda")
let jugador = document.getElementById("jugador")

//variable con valor boolean para cambiar entre jugadores
let jugadorUno = true

for (let index = 0; index < juego.length; index++) {

    juego[index].addEventListener("click", function () {

        if (juego[index].innerHTML === "" && !ganador()) {

            juego[index].innerHTML = "✘"
            jugador.innerHTML = " X Turno"
                
            if (ganador()) {
        
                let simboloWn = document.getElementById("ganador")
                simboloWn.innerHTML = " X ganaste"
            }
            jugadorUno = false
            
            juegaCompu(juego)

            if (ganador()) {

                let simboloWn = document.getElementById("ganador")
                simboloWn.textContent = "O ganaste"

            }

            jugador.innerHTML = "O Turno"
            
            jugadorUno = true
           
        }
    })
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
console.log(winnir);

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

    for (let index = 0; index < 30; index++) {

        let ramdom = Math.floor(Math.random()*9)     

        //console.log(ramdom)
    
        let convert = parseInt(ramdom)
           
        if (juego[convert].textContent === "") {

            setTimeout(() => {

                juego[convert].innerHTML = "O"

            }, 1000);

            break
        }
            
    }
         
}


function empate() {
    for (let index = 0; index < juego.length; index++) {

        if (juego[index] == "") {

            return false

        }
    }
    return true
}
/*
else{(empate() != ganador())

    let simboloWn = document.getElementById("ganador")
    simboloWn.innerHTML =  " Empate"

}
*/
















