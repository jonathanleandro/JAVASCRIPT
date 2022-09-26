let res = document.querySelector("#res")
let reload = document.getElementById("reload")
let btn = document.getElementById("btn")
let num = document.getElementById("n")

btn.addEventListener('click', () =>{
    reload.style.display = 'hidden'
    let n1 = Number(num.value)
    let nR = Math.random() * (5 - 1) + 1

    if(n1 != nR){
        res.innerHTML = `Errado, pensei no número ${nR}`
    }else{
        res.innerHTML = "Acertou"
    }

    reload.addEventListener('click', () =>{
        Location.reload()
    })
})