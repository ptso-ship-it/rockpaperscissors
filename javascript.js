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

let PlayerChoice = prompt("Enter your choice", "")



console.log(computerPlay())
