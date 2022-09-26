let res1 = document.querySelector("#res1")
let res2 = document.querySelector("#res2")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")

btn.addEventListener('click', () => {

    let num = Number(n1.value)
    let soma = 2022-num

    res1.innerHTML = `Sua idade é: ${soma}`

    if(soma<=16){
        res2.innerHTML = "Não Vota"
    }else if(soma >= 16 && soma <= 18 || (soma>70)){
        res2.innerHTML = "Opcional"
    }else{
        res2.innerHTML = "Obrigatório"
    }
})