let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")

btn.addEventListener('click', () => {

    var i = 2
    var fat = 1

    let n = Number(n1.value)
    while(i<=n){
        fat = fat * i
        i++
    }

    res.innerHTML = `O fatorial de ${n} é igual a  ${fat}`
})