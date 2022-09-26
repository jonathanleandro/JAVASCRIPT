let res = document.querySelector("#res")

let btn = document.getElementById("btn")

let n1 = document.getElementById("n1")

let n2 = document.getElementById("n2")

btn.addEventListener('click', () =>{

    let n1Num = Number(n1.value)
    let n2Num = Number(n2.value)
    
    let s = (n1Num+n2Num)/2

    res.innerHTML = `A soma entre ${n1Num} + ${n2Num} = ${s}`
})