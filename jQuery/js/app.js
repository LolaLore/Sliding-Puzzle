// cards array holds all cards
let $card =  $('.card');
let cards = [...$card]
console.log(cards);

// deck of all cards in game
const $deck = $('#card-deck');

// declaring move variable
let moves = 0;
let $counter = $('.moves');

// array for opened cards
var openedCards = [];

let $modal = $('.popup1')



// @description shuffles cards
// @param {array}
// @returns shuffledarray
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// @description shuffles cards when page is refreshed / loads
//document.body.onload = startGame();


// @description function to start a new play 
function startGame(){
    // shuffle deck
    cards = shuffle(cards);
	$deck.empty();
    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
	   $deck.append($(cards[i]));
	   
    }
	//$("#i1").attr("src","\"resorces/" + $(cards[0]) + ".png\"");
    
}

// @description count player's moves
function moveCounter(){
    $moves++; 
}

function leftArrowPressed() {
	var element = $('.freecard');
	var temporaryValue;
	for( var i = 0; i < cards.length; i++ )
	{
		if( cards[i].id === "freecard" )
		{
			temporaryValue = cards[i]; // carte libera
			switch (i) {
				case 0:
					cards[i]=cards[1];
					cards[1] = temporaryValue;
					isSolved();
				break;

				case 1:
					cards[i]=cards[2];
					cards[2] = temporaryValue;
					isSolved();
				break;

				case 2:
					
				break;

				case 3:
					cards[i]=cards[4];
					cards[4] = temporaryValue;
					isSolved();
				break;
				
				case 4:
					cards[i]=cards[5];
					cards[5] = temporaryValue;
					isSolved();
				break;
				
				case 5:
					
				break;
				
				case 6:
					cards[i]=cards[7];
					cards[7] = temporaryValue;
					isSolved();
				break;
				
				case 7:
					cards[i]=cards[8];
					cards[8] = temporaryValue;
					isSolved();
				break;
				
				case 8:
					
				break;
				
			}
			break;
		}
			
	}
	for (var i = 0; i < cards.length; i++){
        //deck.innerHTML = "";
        $deck.append($(cards[i]));
    }
}

function rightArrowPressed() {
	var element = $('.freecard');
	var temporaryValue;
	for( var i = 0; i < cards.length; i++ )
	{
		if( cards[i].id === "freecard" )
		{
			temporaryValue = cards[i]; // carte libera
			switch (i) {
				case 0:
					
				break;

				case 1:
					cards[i]=cards[0];
					cards[0] = temporaryValue;
					isSolved();
				break;

				case 2:
					cards[i]=cards[1];
					cards[1] = temporaryValue;
					isSolved();
				break;

				case 3:
					
				break;
				
				case 4:
					cards[i]=cards[3];
					cards[3] = temporaryValue;
					isSolved();
				break;
				
				case 5:
					cards[i]=cards[4];
					cards[4] = temporaryValue;
					isSolved();
				break;
				
				case 6:
					
				break;
				
				case 7:
					cards[i]=cards[6];
					cards[6] = temporaryValue;
					isSolved();
				break;
				
				case 8:
					cards[i]=cards[7];
					cards[7] = temporaryValue;
					isSolved();
				break;
				
			}
			break;
		}
			
	}
	for (var i = 0; i < cards.length; i++){
        //deck.innerHTML = "";
        $deck.append($(cards[i]));
    }
}

function upArrowPressed() {
	var element = $('.freecard');
	var temporaryValue;
	for( var i = 0; i < cards.length; i++ )
	{
		if( cards[i].id === "freecard" )
		{
			temporaryValue = cards[i]; // carte libera
			switch (i) {
				case 0:
					cards[i]=cards[3];
					cards[3] = temporaryValue;
					isSolved();
				break;

				case 1:
					cards[i]=cards[4];
					cards[4] = temporaryValue;
					isSolved();
				break;

				case 2:
					cards[i]=cards[5];
					cards[5] = temporaryValue;
					isSolved();
				break;

				case 3:
					cards[i]=cards[6];
					cards[6] = temporaryValue;
					isSolved();
				break;
				
				case 4:
					cards[i]=cards[7];
					cards[7] = temporaryValue;
					isSolved();
				break;
				
				case 5:
					cards[i]=cards[8];
					cards[8] = temporaryValue;
					isSolved();
				break;
				
				case 6:
					
				break;
				
				case 7:
					
				break;
				
				case 8:
					
				break;
				
			}
			break;
		}
			
	}
	for (var i = 0; i < cards.length; i++){
        //deck.innerHTML = "";
        $deck.append($(cards[i]));
    }
}

function downArrowPressed() {
	var element = $('.freecard');
	var temporaryValue;
	for( var i = 0; i < cards.length; i++ )
	{
		if( cards[i].id === "freecard" )
		{
			temporaryValue = cards[i]; // carte libera
			switch (i) {
				case 0:
					
				break;

				case 1:
					
				break;

				case 2:
					
				break;

				case 3:
					cards[i]=cards[0];
					cards[0] = temporaryValue;
					isSolved();
				break;
				
				case 4:
					cards[i]=cards[1];
					cards[1] = temporaryValue;
					isSolved();
				break;
				
				case 5:
					cards[i]=cards[2];
					cards[2] = temporaryValue;
					isSolved();
				break;
				
				case 6:
					cards[i]=cards[3];
					cards[3] = temporaryValue;
					isSolved();
				break;
				
				case 7:
					cards[i]=cards[4];
					cards[4] = temporaryValue;
					isSolved();
				break;
				
				case 8:
					cards[i]=cards[5];
					cards[5] = temporaryValue;
					isSolved();
				break;
				
			}
			break;
		}
			
	}
	for (var i = 0; i < cards.length; i++){
        //deck.innerHTML = "";
        $deck.append($(cards[i]));
    }
}

$(document).bind('keydown', function(e) { {                    
	switch (e.keyCode) {
		case 37:
			leftArrowPressed();
		break;

		case 39:
			rightArrowPressed();
		break;

		case 38:
			upArrowPressed();
		break;

		case 40:
			downArrowPressed();
		break;
	}
}});

function playAgain(){
    $modal.removeClass('show');
    startGame();
}

function isSolved()
{
	if( cards[0].id === "nr1"
		&&
		cards[1].id === "nr2"
		&&
		cards[2].id === "nr3"
		&&
		cards[3].id === "nr4"
		&&
		cards[4].id === "nr5"
		&&
		cards[5].id === "nr6"
		&&
		cards[6].id === "nr7"
		&&
		cards[7].id === "nr8"
	  )
	  {
		  $modal.addClass('show');
	  }
};

startGame();