function menuDown() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("active")

    menuIcon.src = menu.classList.contains("active") ? 'img/close.png' : 'img/menu.png'
}