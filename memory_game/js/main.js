//Global variables 'CARDS' and 'INPLAY'

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

// Checks if two cards have been chosen.

if (inPlay.length === 2) {

}

//Check if both chosen cards are equal.

function checkForMatch(){
	if(inPlay[0] === inPlay[1]){
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

//Flip card with animation

function flipCard() {
	var cardID = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardID].cardIMG);
	inPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardIMG);
	console.log(cards[cardID].suit);



//Board creation with redefining source, data ID, and event listening.

function createBoard(){
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	}
}

createBoard();

//Card position randomizer

function randomizer(cards) {
	var curIndex = cards.length, tempV, tempIndex;
	while(0 !== curIndex){
		var randIndex = Math.floor(Math.random() * curIndex);
		curIndex -= 1;

		tempV = cards[curIndex];
		cards[curIndex] = cards[randIndex];
		cards[randIndex] = tempV;
	}
	
	return cards;
}

//Randomizer call function

var doTheRandom = randomizer(cards);

//Button

var button = document.createElement("button")
button.innerHTML = "Reset and Shuffle";

var reset = document.getElementById(".reset")[0];
reset.appendChild(button);

button.addEventListener("click", doTheRandom);


