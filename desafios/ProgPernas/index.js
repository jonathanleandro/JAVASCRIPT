let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")

btn.addEventListener('click', () => {

    let num = Number(n1.value)
   

     switch(num){

        case 1:
            res.innerHTML = "Sací"
            break;

        case 2:
            res.innerHTML = "Bípede"
            break;
            
        case 4:
            res.innerHTML = "Quadrúpede"
            break;
            
        case 6:
            res.innerHTML = "Aranha"    
            break;

        case 8:
            res.innerHTML = "Aranha"    
            break;    

        default:
            res.innerHTML = "ET";    
    }
})