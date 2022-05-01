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

const container = document.querySelector("#container")

let i = 0;

let playerWin = 0;
let computerWin = 0;

function playRound(one,two) {
	let result = "test"
	if (one === "Paper" && two ==="Scissors") {
		result  = "Computer played " + one + ". Player played " + two + ". Player wins."
		playerWin++
	} else if (one === "Paper" && two === "Rock") {
		result  =  "Computer played " + one + ". Player played " + two + ". Computer wins."
		computerWin++
	} else if (one === "Scissors" && two === "Paper") {
		result  =  "Computer played " + one + ". Player played " + two + ". Computer wins."
		computerWin++
	} else if (one === "Scissors" && two === "Rock") {
		result  =  "Computer played " + one + ". Player played " + two + ". Player wins."
		playerWin++
	} else if (one === "Rock" && two === "Paper") {
		result  =  "Computer played " + one + ". Player played " + two + ". Player wins."
		playerWin++
	} else if (one === "Rock" && two === "Scissors") {
		result  =  "Computer played " + one + ". Player played " + two + ". Computer wins."
		computerWin++
	} else if (one === two) {
		result  =  "Computer played " + one + ". Player played " + two + ". Result is a draw."
	}
	console.log([one, two, result])
	const display = document.createElement("div");
	display.textContent = result;
	container.appendChild(display);
	i++
	return i
}

function counter(round) {
	if (round % 5 === 0) {
		const stoppage = document.createElement("div");
		if (playerWin > computerWin) {
			stoppage.textContent = "Player wins by a score of: " + playerWin + 
			" to: " + computerWin;
			container.appendChild(stoppage);
			playerWin = 0;
			computerWin = 0;
		} else if (playerWin === computerWin) {
			stoppage.textContent = "There's a draw. Both players scored: " + computerWin;
			container.appendChild(stoppage);
			playerWin = 0;
			computerWin = 0;
		} else {
			stoppage.textContent = "Computer wins by a score of: " + computerWin + " to: " + playerWin;
			container.appendChild(stoppage);
			playerWin = 0;
			computerWin = 0;
		}
	}
}


//document.getElementById("Rock").onclick = console.log(playRound(computerPlay(),"Rock"))

//console.log(playRound(computerPlay,playerPlay))




/* function game() {
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
*/

