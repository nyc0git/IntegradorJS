const valorTicket = 200

function calcTotal() {

    let cant = document.getElementById("cant").value

    let selector = document.getElementById("selector").value

    let desc

    if (selector == 1) {
        desc = 80
    } else if (selector == 2) {
        desc = 50

    }
    else {

        desc = 15
    }

    let total=cant*valorTicket

    total-=total*desc/100



    document.getElementById("total")



}
