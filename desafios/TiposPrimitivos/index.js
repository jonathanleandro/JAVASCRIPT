let res = document.querySelector("#res");

let btn = document.getElementById("btn");

btn.addEventListener('click', () => {

    let num = document.getElementById("n");
    let n1 = Number(num.value);
    res.innerHTML = `Número: ${n1}` 
})