
function hideShowPasw(img) {

    if(pasw.type === "password") {
        pasw.type = "text"
        img.src = "img/view.png"
    } else {
        pasw.type = "password"
        img.src = "img/hide.png"
    }
}