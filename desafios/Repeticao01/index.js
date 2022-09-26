let res = document.querySelector("#res")
let btn = document.getElementById("btn")
let n1 = document.getElementById("n1")
let cc = 1

btn.addEventListener('click', () => {
    
    let n = Number(n1.value)
 
    do{
        
        res.innerHTML = `Cambalhota x${n}`
        cc++
    }while(cc <= n)    
    
})
