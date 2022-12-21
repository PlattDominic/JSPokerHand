/*
- Dominic Martinez
- Project: JS Poker Hand
- Description: Uses HTML and JS to hand out cards
- Due Date: 1/5/2023
*/


let cardImages = document.getElementById('card-images').querySelectorAll('img');
let dealButton = document.getElementById('deal-btn');

let currentCard;
let CardNumTracker;

let StartDealing = () => {

    dealButton.disabled = true;
    currentCard = 1;
    CardNumTracker = [];

    cardImages.forEach(img => img.src = 'img/mariocard.jpg');

    setTimeout(HandOutCard, 500);
}

let HandOutCard = () => {
    cardNum = GetCardNum();

    document.getElementById(`${currentCard}`).src = `img/${cardNum}.png`; 

    if (++currentCard > 10) {
        dealButton.disabled = false;
        return;
    }

    setTimeout(HandOutCard, 500);
}

let GetCardNum = () => {
    let randCardNum = Math.floor(Math.random() * (52 - 1 + 1) + 1);
    
    if (CardNumTracker.includes(randCardNum)) {
        return GetCardNum();
    }

    CardNumTracker.push(randCardNum);

    return randCardNum;
}

