//pegar valor do imput com id
//inner html
//colocar valor no array
//pegar valor de arry e colcoar em uma div
let velocidades = []

let x = document.querySelector("#x");
let y = document.querySelector("#y");
let velocidadeMedia = document.querySelector("#velocidadeMedia");

let btncalcular = document.querySelector("#calcular");

btncalcular.addEventListener('click',calcular)


function calcular() {
    velocidadeMedia.value = (x.value / y.value).toFixed(2)

}
