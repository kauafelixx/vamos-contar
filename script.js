function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Falta informações')
    } else {
        resultado.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido, considere PASSO 1')
            p = 1
        }

        if (i < f) {
            for (var cont = i; cont <= f; cont += p) {
                resultado.innerHTML += `   ${cont} ${String.fromCodePoint(0x1F449)}`

            }
        } else {
            for (var cont = i; cont >= f; cont -= p) {
                resultado.innerHTML += `   ${cont} ${String.fromCodePoint(0x1F449)}`

            }
        }

    }
}