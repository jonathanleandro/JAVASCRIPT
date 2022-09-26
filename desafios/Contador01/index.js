let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")
let cc = 1

btn.addEventListener('click', () => {

    let num = Number(n1.value)

    while(cc<=num){
        res.innerHTML = `Cambalhota x${cc}`
        cc++
    }
})