
// Variable de las celdas de juego
let juego = document.getElementsByClassName("celda")
let jugador = document.getElementById("jugador")

// Variable con valor boolean para cambiar entre jugadores
let jugadorUno = true

// Variable para mantener el estado del juego
let jugadorActivo = true


//con un for vamos a recorrer todas las casillas
for (let index = 0; index < juego.length; index++) {
    
    //a las casillas le vamos a agregar un evento click 
    juego[index].addEventListener("click", function () {
    
        //validamos de las casillas recorridas en el FOR sean estrictamente igual a vacio Y el juego este activo Y exista envates
        if (juego[index].innerHTML === "" && jugadorActivo && !empate()) {

            //validamos que seaa el juagador
            if (jugadorUno) {

                //si lo anterior se cumple, imprima X
                juego[index].innerHTML = "✘"

                //si X gana imprime que gano
                if (ganador()) {

                    //variables del h2 
                    let simboloWn = document.getElementById("ganador")
                    //mensaje que gano
                    simboloWn.innerHTML = "✘ ganaste"
                    //al haber un ganador el juego se detiene
                    jugadorActivo = false
                    
                    //validamos el empate
                }if(empate()) {

                    //de existir empate imprimimos el mensaje de mepate
                    let simboloWn = document.getElementById("ganador")
                    simboloWn.innerHTML = "Empate"

                }else{

                    // imprimimos los turnos correspodiente al jugador en este caso la X
                    jugador.innerHTML = "O Turno"
                    jugadorUno = false
                    //llamamos a la funcion de la computadora para que al dar click, y cumplir con el setTimeout dado, se lleve a cabo la funcion
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
     // recorremos la matriz con un for para 
    for (let index = 0; index < winnir.length; index++) {

         // estso va a ser una constente con las tres formas de ganar que va ser igual a la matriz recorrida en el for
        const [c1, c2, c3] = winnir[index]

            //validamos las posciciones
        if (juego[c1].innerHTML && juego[c1].innerHTML === juego[c2].innerHTML && juego[c1].innerHTML === juego[c3].innerHTML) {
            //si es verdadero retorna un verdaadero
            return true
        }

    }
    //si no un falso
    return false
}

//Funcion para que la computadora juegue
function juegaCompu() {

    //Esperar para que la computadora responda
    setTimeout(() => {

        //For para recorrer 
        for (let index = 0; index < 30; index++) {

            ////variable para que elija un espacio aleatoria
            let random = Math.floor(Math.random() * 9)

            ///validacion para que si la casilla esta vacia Y el juego sigue activo
            if (juego[random].innerHTML === "" && jugadorActivo) {

                //imprima la O de manera aleatoria
                juego[random].innerHTML = "O"

                //validacion de para ver si O gano
                if (ganador()) {

                    //varriable de el h2 donde se imprime el resultado
                    let simboloWn = document.getElementById("ganador")
                    //cuando gana se envia este mensaje
                    simboloWn.innerHTML = "O ganaste"
                    //se detine el juego
                    jugadorActivo = false 


                    //validacion para los empates
                }if(empate()) {

                    //variable de el h2 para imprimir el resultado
                    let simboloWn = document.getElementById("ganador")
                    //si empata imprimi esto
                    simboloWn.innerHTML = "Empate"

                }else{
                     //imprimir los turnos, cuando O juegue sera el turno de X
                    jugador.innerHTML = "✘ Turno"
                    jugadorUno = true

                }
                //se detiene el ciclo
                break
            }
        }
        //tiempo de respuesta de la O
    }, 1000)
}

//funcion de empate
function empate() {
    //recorremos con un FOR las casillas
    for (let index = 0; index < juego.length; index++) {
          
        //validamos si las casillas de index son == a vacio retornamos un falso
        if (juego[index].innerHTML === "") {

            return false
        }
    }
 //si no un verdadwero
    return true
}

















