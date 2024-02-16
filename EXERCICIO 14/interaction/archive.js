function load() {
    let msg = document.getElementById('message')
    let pt = document.getElementById('image')
    let date = new Date()
    let hour = date.getHours()
    msg.innerHTML = `São <strong>${hour} horas.</strong>`

    if (hour >= 5 && hour < 12) {
        // MORNING
        pt.src = 'images/morning.jpg'
        document.body.style.background = '#88c1e7'
    } else {
        if (hour >= 12 && hour < 16) {
            // AFTERNOON
            pt.src = 'images/afternoon.jpg'
            document.body.style.background = 'green'
        } else {
            if (hour >= 16 && hour <= 18) {
                // SUNSET
                pt.src = 'images/sunset2.jpg'
                document.body.style.background = '#d5b942'
            } else {
                // NIGHT
                    pt.src = 'images/night2.jpg'
                    document.body.style.background = '#101119'
            }
        }
    }
}