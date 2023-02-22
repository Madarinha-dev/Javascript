function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var resposta = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Falta dados !!')
    } else {
        resposta.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo invalido! considerando PASSO 1')
            p = 1
        }

        if (i < f) { //contagem crescente
            for(var c = i; c <= f; c += p) {
                resposta.innerHTML += ` 👉 ${c}`
            }
        } else { //contagem regressiva
            for (var c = i; c >= f; c-= p) {
                resposta.innerHTML += ` 👉 ${c}`
            }
        }
        resposta.innerHTML += ` 🏴󠁲󠁵󠁣󠁨󠁥󠁿`
    }
}