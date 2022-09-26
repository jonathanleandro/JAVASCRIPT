let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")

btn.addEventListener('click', () => {

    let num = Number(n1.value)

    if(num%2==0){
        res.innerHTML = "Par"
    }else{
        res.innerHTML  = "Impar"
    }
})
