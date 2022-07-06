const cards = [
    {
        name: "chesseburger",
        img: "img/cheeseburger.png"
    }, {
        name: "fries",
        img: "img/fries.png"
    }, {
        name: "hotdog",
        img: "img/hotdog.png"
    }, {
        name: "ice-cream",
        img: "img/ice-cream.png"
    }, {
        name: "milkshake",
        img: "img/milkshake.png"
    }, {
        name: "pizza",
        img: "img/pizza.png"
    }, {
        name: "chesseburger",
        img: "img/cheeseburger.png"
    }, {
        name: "fries",
        img: "img/fries.png"
    }, {
        name: "hotdog",
        img: "img/hotdog.png"
    }, {
        name: "ice-cream",
        img: "img/ice-cream.png"
    }, {
        name: "milkshake",
        img: "img/milkshake.png"
    }, {
        name: "pizza",
        img: "img/pizza.png"
    }
];

cards.sort(() => 0.5 - Math.random());

const chosenCards = [];

function createBoard() {
    const container = document.getElementById("container");

    for (let i = 0; i < cards.length; i++) {
        const cardHolder = document.createElement("div");
        cardHolder.className = "card-holder";
        cardHolder.setAttribute("data-id", i);
        const cardHolderInner = document.createElement("div");
        cardHolderInner.className = "card-holder-inner";
        cardHolderInner.id = "card-" + i;
        
        const cardFront = document.createElement("div");
        cardFront.className = "card-front";
        cardFront.innerHTML = `<img src='img/hellomdfk.jpg' alt='hellomdfk' style='width:100px;height:100px;' data-id="${i}" onclick="flipCard(${i}, '${cards[i].name}')">`

        const cardBack = document.createElement("div");
        cardBack.className = "card-back";
        cardBack.innerHTML = `<img src="${cards[i].img}" alt="${cards[i].name}" style="width:100px;height:100px;">`;

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

    console.log(firstCard, secondCard);
}

createBoard();

//     setTimeout(() => { inner.style.transform = "rotateY(360deg)"; }, 1000)