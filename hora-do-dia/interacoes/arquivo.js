function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`

    if (hora >= 0 && hora < 17) {
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#d1ac00'
    } else {
    if (hora >= 17 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#E57C04'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#131200'
        }
    }
}

