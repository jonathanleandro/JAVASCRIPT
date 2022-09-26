let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n = document.getElementById("ano")
let dataAtual = new Date()
let ano = dataAtual.getFullYear()

btn.addEventListener('click', () =>{

    let n1 = Number(n.value)
    let s = ano - n1

    if(s <= 0 || s>110){
        window.alert("ERRO, Ano inválido, tente novamente")
    }else if(s >= 1 && s <= 11){
        res.innerHTML = `Você tem ${s}, você é Criança`
    }else if(s >= 12 && s < 18){
        res.innerHTML = `Você tem ${s}, você é Adolecente`
    }else if(s >= 18 && s < 60){
        res.innerHTML = `Você tem ${s}, você é Adulto`
    }else{
        res.innerHTML = `Você tem ${s}, você é Velho`
    }
})