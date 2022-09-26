let res = document.querySelector("#res");

let larguraj = window.innerWidth;
let alturaj = window.innerHeight;

let largurat = screen.width;
let alturat = screen.height;

res.innerHTML = `Resolução da Tela: ${largurat}x${alturat} / Resolução da Janela: ${larguraj}x${alturaj}`
