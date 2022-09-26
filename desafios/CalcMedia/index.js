let res = document.querySelector("#res")
let btn = document.getElementById("btn")

let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")

btn.addEventListener('click', () => {

    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)

    let m = (nota1 + nota2)/2

    res.innerHTML = `Sua média foi:  ${m}`

    if(m>=9){
        res.innerHTML = `Sua média foi:  ${m}, Parabens!!!`
    }
})