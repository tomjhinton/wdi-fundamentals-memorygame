

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
	index: 0
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
	index: 1,
},
{
	rank: "ace",
	suit: "hearts",
	cardImage: "images/Ace-of-hearts.png",
	index: 2,

},
{
	rank: "jack",
	suit: "hearts",
	cardImage: "images/jack-of-hearts.png",
	index: 3,

},
{
	rank: "jack",
	suit: "diamonds",
	cardImage: "images/jack-of-diamonds.png",
	index: 4,

},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
	index: 5,

},
{
	rank: "ace",
	suit: "diamonds",
	cardImage: "images/ace-of-diamonds.png",
	index: 6,

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
	index: 7,
},


{
	rank: "Match",
	suit: "Match",
	cardImage: "images/back-match.png",
	index: 7,
}
];

var cardsInPlayIndex = []

var cardsInPlay = [];


var score = 0;


const delay = ms => new Promise(res => setTimeout(res, ms));



var createBoard = function() {
	for (var i = 0; i < cards.length-1; i++ ) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game_board').appendChild(cardElement);
		cardsInPlayIndex =[];
		cardsInPlay = [];

	}

}

var checkForMatch = async () => {
	console.log(cardsInPlayIndex)
	if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] && cardsInPlay[0] !== "Match"
		&& cardsInPlay[1] !== "Match"){
	alert("You found a match!");
     cards.splice(cardsInPlayIndex[0], 1, cards[8]);
     cards.splice(cardsInPlayIndex[1], 1, cards[8]);
    score++
     document.getElementById('score').innerHTML="Matches found: "+ score
  	await delay(1000);
	
	document.getElementById('game_board').innerHTML=""
	
	createBoard();

 
   	}



    else if( cardsInPlay[0] === "Match" && cardsInPlay[1] === "Match" ){
   	
   	alert("Already matched, try Again");
	await delay(1000);
	document.getElementById('game_board').innerHTML=""
	createBoard();
        
        
         }
    
	
	

else if (cardsInPlay.length == 2 && cardsInPlay[0] !== cardsInPlay[1]){
	alert("Try Again");	
  await delay(1000);
	document.getElementById('game_board').innerHTML=""
	
	createBoard();

		



}


}








var flipCard = function() {
if(cardsInPlay.length < 2){
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
//console.log("User flipped " + cards[cardId].rank);
//console.log("User flipped " + cards[cardId].cardImage);
//console.log("User flipped " + cards[cardId].suit);
cardsInPlayIndex.push(cards[cardId].index);
cardsInPlay.push(cards[cardId].rank) ;
//console.log(cardsInPlayIndex);
checkForMatch();
}

;
}









createBoard();




