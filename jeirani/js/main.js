

function actionStart(action) {
    let actions  = ['✊🏻','🤚🏻','✌🏻']
    let programChose = actions[Math.floor(Math.random()*actions.length)]

    programInput.innerHTML = programChose

    winner(action, programChose)

}

function winner(one, two) {
    console.log(one,two);
    if(one === two) {
        console.log(0,'ფრე')
    }
    else if(one === "✊🏻" && two === "✌🏻") {
        console.log(1,'გამარჯვებული მე ვარ')
    }
    else if(one === "✌🏻" && two === "✊🏻") {
        console.log(2,'გამარჯვებულია პროგრამა')
    }
    else if(one === "✊🏻" && two === "🤚🏻") {
        console.log(2,'გამარჯვებულია პროგრამა')
    }
    else if(one === "🤚🏻" && two === "✊🏻") {
        console.log(1,'გამარჯვებული მე ვარ')
    }
    else if(one === "✌🏻" && two === "🤚🏻") {
        console.log(1,'გამარჯვებული მე ვარ')
    }
    else if(one === "🤚🏻" && two === "✌🏻") {
        console.log(2,'გამარჯვებულია პროგრამა')
    }
    console.log("%c--------------------", "color:green");
}