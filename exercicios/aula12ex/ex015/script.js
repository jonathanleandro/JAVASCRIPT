function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >=0 && idade <10){
                img.setAttribute('src', 'CriançaM.jpg')
            }else if(idade <21){
                img.setAttribute('src', 'JovemM.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'Adulto.jpg')
            }else{
                img.setAttribute('src', 'Velho.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade <10){
                img.setAttribute('src', 'CriançaF.jpg')
            }else if(idade <21){
                img.setAttribute('src', 'JovemF.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'Adulta.jpg')
            }else{
                img.setAttribute('src', 'Velha.jpg')
            }
        }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`  
            res.appendChild(img)
    }

        }
