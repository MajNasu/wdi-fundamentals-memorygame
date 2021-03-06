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
		cardIMG: "images/queen-of-diamonds.png"
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

//Sets current session score to be 0. highscoreStore is an attempt to store
//high scores regardless of window exiting and refresh. Currently doesn't work

var score = 0;
var highscoreStore = window.localStorage.getItem('highscoreStore');
if(window.localStorage.getItem('highscoreStore') == null){
				if (score > highscoreStore){
					window.localStorage.setItem("highscoreStore", score);
				} else {
					window.localStorage.setItem("highscoreStore", score);
		}
	}


//Check if both chosen cards are equal and if two cards were chosen. **doesn't wor

function checkForMatch(){
	if(inPlay.length === 2){
		if(inPlay[0] === inPlay[1]) {
			alert("You found a match!");
			score += 1;
			var updateScore = document.getElementById('currScore').innerHTML = score;
			var updateHScore = document.getElementById('highScore').innerHTML = score;
		
		} else {
			alert("Sorry, try again.");
		}
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
	if (inPlay.length === 2) {
        checkForMatch();
    }
	};


//Board creation with redefining source, data ID, and event listening.

function createBoard(){
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
}

//Card position randomizer with choice exclusion.

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

//Randomizes cards on render, then prints board

randomizer(cards);
createBoard();

//Button

function resetter(){
	inPlay.length = 0;
	var newBoard = document.getElementById("game-board").innerHTML = null;
	randomizer(cards);
	createBoard();
}

var button = document.getElementById("reset");
button.addEventListener('click', resetter);


//High Score Table
