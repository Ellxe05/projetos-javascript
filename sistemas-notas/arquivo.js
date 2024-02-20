function calcular() {
    var txtn = document.querySelector('input#txtnota')
    var res = document.querySelector('div#res')
    var nota = Number(txtn.value)
    
    res.innerHTML = `<p>Sua nota atual é<strong>
    ${nota}</strong>.</p>`

    if (nota < 5) {
        res.innerHTML += 'Em <strong>RECUPERAÇÃO</strong>, se esforce.'
    } else {
        res.innerHTML += 'Em <strong>APROVAÇÃO</strong>, parabéns.'
    }
}
