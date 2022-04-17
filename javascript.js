function computerPlay(){
	let choice = Math.floor(Math.random() * 3+1);
	let result = "Test";
	if (choice === 1) {
		result = "Rock";
	} else if (choice === 2) {
		result = "Paper";
	} else {
		result = "Scissors";
	}
	return result
}


function decideWinner(one,two) {
	if (one === "Paper" && two ==="Scissors") {
		return "Computer played " + one + ". Player played " + two + ". Player wins."
	} else if (one === "Paper" && two === "Rock"){
		return "Computer played " + one + ". Player played " + two + ". Computer wins."
	} else if (one === "Scissors" && two === "Paper") {
		return "Computer played " + one + ". Player played " + two + ". Computer wins."
	} else if (one === "Scissors" && two === "Rock") {
		return "Computer played " + one + ". Player played " + two + ". Player wins."
	} else if (one === "Rock" && two === "Paper") {
		return "Computer played " + one + ". Player played " + two + ". Computer wins."
	} else if (one === "Rock" && two === "Scissors") {
		return "Computer played " + one + ". Player played " + two + ". Player wins."
	} else if (one === two) {
		return "Computer played " + one + ". Player played " + two + ". Result is a draw."
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		loop:
			while(true){
			    var playerChoice = prompt("Enter your choice? (Rock, Paper, Scissors)"); 
			    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1,playerChoice.length).toLowerCase()
			    switch (playerChoice) {
			        case "Rock": 
			            field = "Field 1";
			            break loop;
			        case "Paper": 
			            field = "Field 2";
			            break loop;
			        case "Scissors":
			            field = "Field 3";
			            break loop;
        default: alert("Please enter a valid sport");
    }
}
		console.log(decideWinner(computerPlay(), playerChoice));
	}
}

game()

