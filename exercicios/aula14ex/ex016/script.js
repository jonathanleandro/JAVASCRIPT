function contar(){
    var Tinicio = document.getElementById('inicio')
    var Tfim = document.getElementById('fim')
    var Tpasso = document.getElementById('passo')
    var res = document.getElementById('res')

    if(Tinicio.value.length == 0 || Tfim.value.length == 0 || Tpasso.value.length == 0){
        res.innerHTML += 'Impossível Contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(Tinicio.value)
        var f = Number(Tfim.value)
        var p = Number(Tpasso.value)
        
        if(p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p=1
        }
        if(i<f){
        for(var c = i; c<=f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}`}
        }else{
            for(var c = i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
        }
    }
        res.innerHTML += `\u{1F3C1}`
    }
    
    }
