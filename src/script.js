/*
- Dominic Martinez
- Project: JS Poker Hand
- Description: Uses HTML and JS to hand out cards
- Due Date: 1/5/2023
*/

// The delay between handing out cards
const HANDOUTDELAY = 500;

// Get all images from the card-image div, will be used to reset card images back to default
let cardImages = document.getElementById('card-images').querySelectorAll('img');
// Get the deal button, so it can be disabled when cards are being handed out
let dealButton = document.getElementById('deal-btn');

// CurrentCard will be used to determine which HTML Image to change when handing out cards
let currentCard;

// CardNumTracker will keep track of all card numbers used so far, so a card is not handed out more than once
let CardNumTracker;


// Function will be called when user presses Deal Cards button, 
// Will start process for handing out cards
let StartDealing = () => {

    // Disable deal cards button, so user can't start another process
    dealButton.disabled = true;

    // Reset currentCard to 1, and reset CardNumTracker array
    currentCard = 1;
    CardNumTracker = [];

    // Change all card images back to default back card image
    cardImages.forEach(img => img.src = 'img/mariocard.jpg');

    // Set Timeout for 500ms, and call the HandOutCard function to begin handing out cards
    setTimeout(HandOutCard, HANDOUTDELAY);
}

// Hands out one random card, will execute itself every 500ms using a Timeout
let HandOutCard = () => {
    // Gets a random card number, this number will be used to determine which card image to use
    cardNum = GetCardNum();

    // Using the currentCard value to determine which HTML image to change, 
    // Change that image using the cardNum value to determine which image to use
    document.getElementById(`${currentCard}`).src = `img/${cardNum}.png`; 

    // If the post incremented value of currentCard is more than 10, 
    // That means all cards have been dealt, and now can be dealt again
    if (++currentCard > 10) {
        // Reenable deal cards button, so it can be dealt again 
        dealButton.disabled = false;
        return;
    }

    // Set Timeout for 500ms, so this function can rerun and hand out another card
    setTimeout(HandOutCard, HANDOUTDELAY);
}

// Returns a random card number (1-52), will be used to determine which card to hand out
let GetCardNum = () => {
    // Gets a random number from 1-52
    let randCardNum = Math.floor(Math.random() * (52 - 1 + 1) + 1);
    
    // Checks if number already exists in CardNumTracker
    // If so, return a different value by calling GetCardNum again
    if (CardNumTracker.includes(randCardNum)) {
        return GetCardNum();
    }

    // Add new number to CardNumTracker so it can't chosen again
    CardNumTracker.push(randCardNum);

    // Return the random card number
    return randCardNum;
}

