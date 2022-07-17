CARDS.sort(() => 0.5 - Math.random());

let chosenCards = [];

function createBoard() {
    const container = document.getElementById("holder");
    for (let i = 0; i < CARDS.length; i++) {
        const cardHolder = document.createElement("div");
        cardHolder.className = "card-holder";
        cardHolder.setAttribute("data-id", i);
        const cardHolderInner = document.createElement("div");
        cardHolderInner.className = "card-holder-inner";
        cardHolderInner.id = "card-" + i;
        
        const cardFront = document.createElement("div");
        cardFront.className = "card-front";
        cardFront.innerHTML = `<img src='img/dangyeu.jpg' alt='dangyeu' style='width:100px;height:100px;' data-id="${i}" onclick="flipCard(${i}, '${CARDS[i].name}')">`

        const cardBack = document.createElement("div");
        cardBack.className = "card-back";
        cardBack.innerHTML = `<img src="${CARDS[i].img}" alt="${CARDS[i].name}" style="width:100px;height:100px;">`;

        cardHolderInner.append(cardFront);
        cardHolderInner.append(cardBack);
        cardHolder.append(cardHolderInner);

        container.appendChild(cardHolder);
    }   
}

function flipCard(id, name) {
    const inner = document.getElementById("card-" + id);
    inner.style.transform = "rotateY(180deg)";

    const chosenCard = {
        id,
        name
    };
    chosenCards.push(chosenCard);

    if (chosenCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const firstCard = chosenCards[0];
    const secondCard = chosenCards[1];

    const firstInner = document.getElementById("card-" + firstCard.id);
    const secondInner = document.getElementById("card-" + secondCard.id);

    if (firstCard.name !== secondCard.name) {
        setTimeout(() => { 
            firstInner.style.transform = "rotateY(360deg)"; 
            secondInner.style.transform = "rotateY(360deg)"; 
        }, 500);
    } else {
        setTimeout(() => { 
            firstInner.style.display = "none";
            secondInner.style.display = "none";
        }, 1000);
    }
    chosenCards = [];
}

createBoard();