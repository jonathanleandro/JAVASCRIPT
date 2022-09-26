let res = document.querySelector("#res");

let dataAtual = new Date();

let hora = dataAtual.getHours();
let minutos = dataAtual.getMinutes();

res.innerHTML = `Hora Atual: ${hora}:${minutos}` 