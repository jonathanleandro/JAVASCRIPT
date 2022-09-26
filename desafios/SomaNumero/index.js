let res1 = document.querySelector("#res1")
let res2 = document.querySelector("#res2")
let btnAdd = document.getElementById("btn-add")
let btnSomar = document.getElementById("btn-somar")
let n1 = document.getElementById("n1")
let soma = 0
let i = 0

btnAdd.addEventListener('click', () => {
    let n = Number(n1.value)
    i++
    soma = soma + n
    res1.innerHTML = `Total de números: ${i}`
})

btnSomar.addEventListener('click', () => {
    
    res2.innerHTML = `Soma Total: ${soma}`
})
