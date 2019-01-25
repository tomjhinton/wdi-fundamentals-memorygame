

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];



var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1])
alert("You found a match!");
else
	alert("Try Again");	

}

var flipCard = function(cardId) {
console.log("User flipped " + cards[cardId].rank);
console.log("User flipped " + cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].suit);

cardsInPlay.push(cards[cardId].rank) ;}

flipCard(0);
flipCard(1);

checkForMatch();


