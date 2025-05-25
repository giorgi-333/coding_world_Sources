
let calc = document.querySelector("#calc")

calc.addEventListener("keyup", event => {
    
    if (event.keyCode == 13) {
        let result = eval(event.target.value)
        event.target.value += "=" + result
    }
})