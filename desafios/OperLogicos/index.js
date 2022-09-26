let res = document.querySelector("#res")
let btn = document.getElementById("btn")

let n1 = document.getElementById("x")
let n2 = document.getElementById("y")
let n3 = document.getElementById("z")

btn.addEventListener('click', () => {

    let x = Number(n1.value)
    let y = Number(n2.value)
    let z = Number(n3.value)

    if(x<y && y<z){
        res.innerHTML = "True"
    }else{
        res.innerHTML = "False"
    }
})