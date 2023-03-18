

function actionStart(action) {
    let actions  = ['✊🏻','🤚🏻','✌🏻']
    
    let programChose = actions[Math.floor(Math.random()*actions.length)]

    // if(Number(myResult.innerHTML) < Number(programResult.innerHTML) - 2) {
    //     programChose = "->"
    // }

    programInput.innerHTML = programChose

    winner(action, programChose)

}

function winner(one, two) {
    console.log(one,two);
    if(one === two) {
        console.log(0,'ფრე')
    }
    else if(
        (one === "✊🏻" && two === "✌🏻") || 
        (one === "🤚🏻" && two === "✊🏻") ||
        (one === "✌🏻" && two === "🤚🏻")
        ) {
            myResult.innerHTML = Number(myResult.innerHTML) + 1
    }
    else {
        programResult.innerHTML = Number(programResult.innerHTML) + 1
    }
    console.log("%c--------------------", "color:green");
}