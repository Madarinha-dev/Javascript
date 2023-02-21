function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.jpg')
                
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/ojovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/ajovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '225px'
        img.style.height = '225px'
        img.style.borderRadius = '50%'
    }
}