let res1 = document.querySelector("#res1")
let res2 = document.querySelector("#res2")
let res3 = document.querySelector("#res3")
let res4 = document.querySelector("#res4")
let res5 = document.querySelector("#res5")
let res6 = document.querySelector("#res6")

let btnAdd = document.getElementById("btn-add")
let btnCalc = document.getElementById("btn-calc")

let n1 = document.getElementById("n1")

let cc = 0
let cPar = 0
let cImpar = 0
let cCem = 0
let media = 0

btnAdd.addEventListener('click', () => {

    let n = Number(n1.value)
    cc++
    
    if(n%2==0){
        cPar++
    }else{
        cImpar++
    }

    if(n>=100){
        cCem++
    }

    media = (media + n)/cc
})

btnCalc.addEventListener('click', () => {

    res1.innerHTML = `RESULTADO:`
    res2.innerHTML = `Total de Valores: ${cc}`
    res3.innerHTML = `Total de Par: ${cPar}`
    res4.innerHTML = `Total de Impar: ${cImpar}`
    res5.innerHTML = `Média dos Valores: ${media}`
    res6.innerHTML = `Total de números acima de 100: ${cCem}`
})