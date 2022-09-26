let res1 = document.querySelector("#res1")
let res2 = document.querySelector("#res2")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")

btn.addEventListener('click', () => {

    let nasc = Number(n1.value)

    let ano = 2022-nasc
    
    res1.innerHTML = `Em que ano você nasceu: ${ano}`

    if(ano <= 18){
        res2.innerHTML = "Você é de Menor"
    }else{
        res2.innerHTML = "Você é de Maior"
    }
})