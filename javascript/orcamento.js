

let bikgraft = document.querySelector('#E1')
let seguro = document.querySelector('#E2')
    bikgraft.addEventListener('click',OpenFirst)
    seguro.addEventListener('click',OpenSecond)

let bicicletas = document.querySelector('.secao-1')
let seguros = document.querySelector('.secao-2')

function OpenFirst(){
    titulo.innerHTML = 'ESCOLHA A SUA:'
    bicicletas.style.display = 'flex'
    seguros.style.display = 'none'
}

function OpenSecond(){
    titulo.innerHTML = 'ESCOLHA O PLANO:'
    bicicletas.style.display = 'none'
    seguros.style.display = 'flex'
}


let tipo1 = document.querySelector('#b1')
let tipo2 = document.querySelector('#b2')
let tipo3 = document.querySelector('#b3')
    tipo1.addEventListener('click', FirstValue)
    tipo2.addEventListener('click', SecondValue)
    tipo3.addEventListener('click', ThirdValue)

let valor1 = document.querySelector('.valor-1')
let valor2 = document.querySelector('.valor-2')
let valor3 = document.querySelector('.valor-3')

let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')

function FirstValue(){
    valor1.style.opacity = '1'
    one.style.backgroundColor = 'white'
    one.style.color = 'black'

    valor2.style.opacity = '0'
    two.style.backgroundColor = '#2E2E2E'
    valor3.style.opacity = '0'
    three.style.backgroundColor = '#2E2E2E'
}
function SecondValue(){
    valor2.style.opacity = '1'
    two.style.backgroundColor = 'white'

    valor1.style.opacity = '0'
    one.style.backgroundColor = '#2E2E2E'
    valor3.style.opacity = '0'
    three.style.backgroundColor = '#2E2E2E'
}
function ThirdValue(){
    valor3.style.opacity = '1'
    three.style.backgroundColor = 'white'

    valor1.style.opacity = '0'
    one.style.backgroundColor = '#2E2E2E'
    valor2.style.opacity = '0'
    two.style.backgroundColor = '#2E2E2E'
}



let tipo4 = document.querySelector('#b4')
let tipo5 = document.querySelector('#b5')
    tipo4.addEventListener('click', FourValue)
    tipo5.addEventListener('click', FiveValue)

let valor4 = document.querySelector('.valor-4')
let valor5 = document.querySelector('.valor-5')
let four = document.querySelector('#four')
let five = document.querySelector('#five')


function FourValue(){
    valor4.style.opacity = '1'
    four.style.backgroundColor = 'white'

    valor5.style.opacity = '0'
    five.style.backgroundColor = '#2E2E2E'
}
function FiveValue(){
    valor5.style.opacity = '1'
    five.style.backgroundColor = 'white'

    valor4.style.opacity = '0'
    four.style.backgroundColor = '#2E2E2E'
}