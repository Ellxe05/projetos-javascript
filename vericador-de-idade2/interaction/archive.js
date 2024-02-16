function verify() {
    var date = new Date()
    var year = date.getFullYear()

    let fyear = document.getElementById('txty')
    let res = document.querySelector('div#res')

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        res.innerHTML = 'ERRO! Verifique e preencha os dados corretamente e tente novamente!'
    } else {
        let fsex = document.getElementsByName('radsex')
        let yo = year - Number(fyear.value)
        let gender = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'photo')
        
        if (fsex[0].checked) {
            gender = 'Homem'
            // CRIANÇA
            if (yo >= 0 && yo < 13) {
                img.setAttribute('src', 'images/child-m.jpg')
            } else {
                // JOVEM
                if (yo < 18) {
                img.setAttribute('src', 'images/young-m.jpg')
            } else {
                // ADULTO
                if (yo < 59) {
                    img.setAttribute('src', 'images/adult-m.jpg')
                } else {
                    // IDOSO
                    img.setAttribute('src', 'images/old-m.jpg')
                }
            }
            }
        } else {
            if (fsex[1].checked) {
                gender = 'Mulher'
                // CRIANÇA
                if (yo >= 0 && yo < 13) {
                    img.setAttribute('src', 'images/child-f.jpg')
                } else {
                    // JOVEM 
                    if (yo < 18) {
                        img.setAttribute('src', 'images/young-f.jpg')
                    } else {
                        // ADULTA 
                        if (yo < 59) {
                            img.setAttribute('src', 'images/adult-f.jpg')
                        } else {
                            // IDOSO
                            img.setAttribute('src', 'images/old-f.jpg')
                        }
                    }
                }
            }
        }
        res.innerHTML = `Detectamos <strong>${gender} com ${yo} anos.</strong> <br>`
        res.appendChild(img)
    }
}
