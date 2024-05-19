



let juego = document.getElementsByClassName("celda")

let jugadorUno = true
//console.log(juego);

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

for (let index = 0; index < juego.length; index++) {

    juego[index].addEventListener("click", function(e){

    //console.log(jugadorUno);
    //console.log("diste click");

    if (jugadorUno){

        e.target.innerHTML = "✘" 
        jugadorUno = false 

    }else{
        e.target.innerHTML = "o" 
        jugadorUno = true
    }
    juego.disabled = true

    })
}


function Winners() {
    
}


















let ganador = document.getElementById("ganador")


let bntReiniciar = document.getElementById("reiniciar")
bntReiniciar.addEventListener("click", function(){

})


