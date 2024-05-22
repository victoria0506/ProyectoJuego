
//Variable del las celdas de juego
let juego = document.getElementsByClassName("celda")

//variable con valo boolean
let jugadorUno = true


//un for para recorrer todas las celdas del juego
for (let index = 0; index < juego.length; index++) {

    //evento para que cundo le den click se agrege una x || o
    juego[index].addEventListener("click", function(e){


///////// validar si la celda esta vacia /////////
    //console.log(ganador())

//validacion para funcionar si la celda esta vacia
    if (e.target.innerHTML == "" && !ganador()){
 
        //validamos para que se agreguen las x y o
        if (jugadorUno){

            // metodo para que se agregue 
            e.target.innerHTML = "✘"
            
            if (ganador()) {
                let simboloWn = document.getElementById("ganador")
                simboloWn.innerHTML =  " x ganador"
            } 
            jugadorUno = false 
    
        }else{
            e.target.innerHTML = "o" 
            if (ganador()) {
                let simboloWn = document.getElementById("ganador")
                simboloWn.innerHTML =  " o ganador"
            }
            jugadorUno = true

        }
        /*if (empate() && !ganador()) {
            let simboloWn = document.getElementById("ganador")
            simboloWn.innerHTML =  " Empate"
        }*/

    }

    })
}

// matriz con la maneras de ganar
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

// funcion para validar las pocisiones que ganan
function ganador(){

    // for para que recorra la matriz
    for (let index = 0; index < winnir.length; index++) {
 
        //costante con las posiciones que va a ser igual a las 3 posiciones en cada array de la matriz
        const [c1, c2, c3] = winnir[index] 
    
        // validamos las casillas con las pocisiones
        if (juego[c1].innerHTML && juego[c1].innerHTML === juego[c2].innerHTML && juego[c1].innerHTML == juego[c3].innerHTML){
           // si se cumple returne verdadero
           return true
        }
    }
    // si no falso
    return false
}

let array = []

function compuJuega() {

    for (let index = 0; index < juego.length; index++) {

        if (juego == ""){

            let compu = Math.floor(Math.random() * juego.length)

            juego[compu].innerHTML = "o"
    
            if (ganador()) {
                
                let simboloWn = document.getElementByI("ganador")
                simboloWn.innerHTML =  " o ganador"
            }
        }

        
    }
    

}


/*
function empate() {
    for (let index = 0; index < juego.length; index++) {

        if (juego[index] == "") {
            return false
            
        }
    }
    return true
}
*/




















