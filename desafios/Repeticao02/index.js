let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")

btn.addEventListener('click', () => {

    let n = Number(n1.value)

    for(var i =0; i<=n; i++){
        res.innerHTML = `Cambalhotas: x${i}`
    }
})