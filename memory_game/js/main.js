var cards = ["queen", "queen", "king", "king"];
var inPlay = [];

var c1 = cards[0];
inPlay.push(c1);
console.log("User flipped " + c1);

var c2 = cards[2];
inPlay.push(c2);
console.log("User flipped " + c2);

if(inPlay.length === 2){
	if(inPlay[0] === inPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}