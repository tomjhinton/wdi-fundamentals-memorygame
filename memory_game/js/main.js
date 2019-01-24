

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1])
alert("You found a match!");
else
	alert("Try Again");	

}

var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]) ;}

flipCard(2);
flipCard(1);

checkForMatch();


