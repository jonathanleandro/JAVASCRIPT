let res1 = document.querySelector("#res1")
let res2 = document.querySelector("#res2")
let res3 = document.querySelector("#res3")
let res4 = document.querySelector("#res4")
let res5 = document.querySelector("#res5")
let btn = document.getElementById("btn")
let num = document.getElementById("n")

btn.addEventListener('click', () =>{

    let n1 = Number(num.value)
    res1.innerHTML = "Resto da divisão por 2: " + (n1%2)

    res2.innerHTML = "Elevado ao Cubo: " + Math.pow(n1,3)

    res3.innerHTML = "Raiz Quadrada: " + Math.sqrt(n1)

    res4.innerHTML = "Raiz Cubica: " + Math.cbrt(n1)

    res5.innerHTML = "Valor Absoluto " + Math.abs(n1)
})