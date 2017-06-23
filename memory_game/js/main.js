var cards = [
	{ 
		rank: "queen",
		suit: "hearts",
		cardIMG: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardIMG: "images/queen-of-diamondss.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardIMG: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardIMG: "images/king-of-diamonds.png"
	}
];

var inPlay = [];

function checkForMatch(){
	if(inPlay[0] === inPlay[1]){
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardID){
	console.log("User flipped " + cards[cardID].rank);
	inPlay.push(cards[cardID].rank);

checkForMatch();

console.log(cards[cardID].cardIMG);
console.log(cards[cardID].suit);

}
flipCard(0);
flipCard(2);