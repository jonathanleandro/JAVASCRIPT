function calcular(){
var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')

if(num.value.length==0){
    window.alert('[ERRO] Valor Inválido')
}else{
    var n = Number(num.value)
    tab.innerHTML = ''
for(var i=1; i<=10; i++){
    var item = document.createElement('option')

    item.text = `${n} x ${i} = ${n*i}`
    item.value = `tab${i}`
    tab.appendChild(item)
}
}
}