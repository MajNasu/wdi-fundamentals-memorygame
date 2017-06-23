var cards = ["queen", "queen", "king", "king"];
var inPlay = [];

function checkForMatch(){
	if(inPlay[0] === inPlay[1]){
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardID){
	console.log("User flipped " + cards[cardID]);
	inPlay.push(cards[cardID]);

checkForMatch();

}
flipCard(0);
flipCard(2);