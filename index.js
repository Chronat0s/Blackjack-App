//VARIABLES
let spadeCardsImageArray = [
    {
        id: "2",
        card : `<img class="card__image" src="assets/2OfDiamonds.png">`,
        value: "2"
    },
    {
        id: "3",
        card : `<img class="card__image" src="assets/3OfDiamonds.png">`,
        value: "3"
    },
    {
        id: "4",
        card : `<img class="card__image" src="assets/4OfDiamonds.png">`,
        value: "4"
    },
    {
        id: "5",
        card : `<img class="card__image" src="assets/5OfDiamonds.png">`,
        value: "5"
    },
    {
        id: "6",
        card : `<img class="card__image" src="assets/6OfDiamonds.png">`,
        value: "6"
    },
    {
        id: "7",
        card : `<img class="card__image" src="assets/7OfDiamonds.png">`,
        value: "7"
    },
    {
        id: "8",
        card : `<img class="card__image" src="assets/8OfDiamonds.png">`,
        value: "8"
    },
    {
        id: "9",
        card : `<img class="card__image" src="assets/9OfDiamonds.png">`,
        value: "9"
    },
    {
        id: "10",
        card : `<img class="card__image" src="assets/10OfDiamonds.png">`,
        value: "10"
    },
    {
        id: "11",
        card : `<img class="card__image" src="assets/JackOfSpades.png">`,
        value: "10"
    },
    {
        id: "12",
        card : `<img class="card__image" src="assets/QueenOfSpades.svg">`,
        value: "10"
    },
    {
        id: "13",
        card : `<img class="card__image" src="assets/KingOfSpades.png">`,
        value: "10"
    },
    {
        id: "14",
        card : `<img class="card__image" src="assets/AceOfSpades.png">`,
        value: "11"
    },
]

let heartCardsImageArray = [
    {
        id: "2",
        card : `<img class="card__image" src="assets/2OfHearts.png">`,
        value: "2"
    },
    {
        id: "3",
        card : `<img class="card__image" src="assets/3OfHearts.png">`,
        value: "3"
    },
    {
        id: "4",
        card : `<img class="card__image" src="assets/4OfHearts.png">`,
        value: "4"
    },
    {
        id: "5",
        card : `<img class="card__image" src="assets/5OfHearts.png">`,
        value: "5"
    },
    {
        id: "6",
        card : `<img class="card__image" src="assets/6OfHearts.png">`,
        value: "6"
    },
    {
        id: "7",
        card : `<img class="card__image" src="assets/7OfHearts.png">`,
        value: "7"
    },
    {
        id: "8",
        card : `<img class="card__image" src="assets/8OfHearts.png">`,
        value: "8"
    },
    {
        id: "9",
        card : `<img class="card__image" src="assets/9OfHearts.png">`,
        value: "9"
    },
    {
        id: "10",
        card : `<img class="card__image" src="assets/10OfHearts.png">`,
        value: "10"
    },
    {
        id: "11",
        card : `<img class="card__image" src="assets/JackOfHearts.png">`,
        value: "10"
    },
    {
        id: "12",
        card : `<img class="card__image" src="assets/QueenOfHearts.png">`,
        value: "10"
    },
    {
        id: "13",
        card : `<img class="card__image" src="assets/KingOfHearts.png">`,
        value: "10"
    },
    {
        id: "14",
        card : `<img class="card__image" src="assets/AceOfHearts.png">`,
        value: "11"
    },
]

let clubCardsImageArray = [
    {
        id: "2",
        card : `<img class="card__image" src="assets/2OfClubs.png">`,
        value: "2"
    },
    {
        id: "3",
        card : `<img class="card__image" src="assets/3OfClubs.png">`,
        value: "3"
    },
    {
        id: "4",
        card : `<img class="card__image" src="assets/4OfClubs.png">`,
        value: "4"
    },
    {
        id: "5",
        card : `<img class="card__image" src="assets/5OfClubs.png">`,
        value: "5"
    },
    {
        id: "6",
        card : `<img class="card__image" src="assets/6OfClubs.png">`,
        value: "6"
    },
    {
        id: "7",
        card : `<img class="card__image" src="assets/7OfClubs.png">`,
        value: "7"
    },
    {
        id: "8",
        card : `<img class="card__image" src="assets/8OfClubs.png">`,
        value: "8"
    },
    {
        id: "9",
        card : `<img class="card__image" src="assets/9OfClubs.png">`,
        value: "9"
    },
    {
        id: "10",
        card : `<img class="card__image" src="assets/10OfClubs.png">`,
        value: "10"
    },
    {
        id: "11",
        card : `<img class="card__image" src="assets/JackOfClubs.png">`,
        value: "10"
    },
    {
        id: "12",
        card : `<img class="card__image" src="assets/QueenOfClubs.png">`,
        value: "10"
    },
    {
        id: "13",
        card : `<img class="card__image" src="assets/KingOfClubs.png">`,
        value: "10"
    },
    {
        id: "14",
        card : `<img class="card__image" src="assets/AceOfClubs.png">`,
        value: "11"
    },
]

let diamondCardsImageArray = [
    {
        id: "2",
        card : `<img class="card__image" src="assets/2OfDiamonds.png">`,
        value: "2"
    },
    {
        id: "3",
        card : `<img class="card__image" src="assets/3OfDiamonds.png">`,
        value: "3"
    },
    {
        id: "4",
        card : `<img class="card__image" src="assets/4OfDiamonds.png">`,
        value: "4"
    },
    {
        id: "5",
        card : `<img class="card__image" src="assets/5OfDiamonds.png">`,
        value: "5"
    },
    {
        id: "6",
        card : `<img class="card__image" src="assets/6OfDiamonds.png">`,
        value: "6"
    },
    {
        id: "7",
        card : `<img class="card__image" src="assets/7OfDiamonds.png">`,
        value: "7"
    },
    {
        id: "8",
        card : `<img class="card__image" src="assets/8OfDiamonds.png">`,
        value: "8"
    },
    {
        id: "9",
        card : `<img class="card__image" src="assets/9OfDiamonds.png">`,
        value: "9"
    },
    {
        id: "10",
        card : `<img class="card__image" src="assets/10OfDiamonds.png">`,
        value: "10"
    },
    {
        id: "11",
        card : `<img class="card__image" src="assets/JackOfDiamonds.png">`,
        value: "10"
    },
    {
        id: "12",
        card : `<img class="card__image" src="assets/QueenOfDiamonds.png">`,
        value: "10"
    },
    {
        id: "13",
        card : `<img class="card__image" src="assets/KingOfDiamonds.png">`,
        value: "10"
    },
    {
        id: "14",
        card : `<img class="card__image" src="assets/AceOfDiamonds.png">`,
        value: "11"
    },
]

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

//FUNCTIONS
function getRandomCard(){
    randomCard = Math.floor (2 + Math.random()*13)
    randomSuit = Math.floor (1 + Math.random()*4)
    console.log(randomSuit)
    if(randomSuit === 1){
        randomCard = spadeCardsImageArray[randomCard - 2]
    }
    else if(randomSuit === 2){
        randomCard = heartCardsImageArray[randomCard - 2]
    }
    else if(randomSuit === 3){
        randomCard = clubCardsImageArray[randomCard - 2]
    }
    else{
        randomCard = diamondCardsImageArray[randomCard - 2]
    }
    return randomCard
}

function startGame(){
        sum = 0
        cards = []
        isAlive = true
        hasBlackjack = false
        isAlive = true
        let firstCard =  getRandomCard()
        let secondCard =  getRandomCard()
        cards = [firstCard, secondCard]
        for (let i = 0; i < cards.length; i++){
            sum += parseInt(cards[i].value)
        }
        console.log(cards)
        renderGame()
}

function renderGame(){
    sumEl.textContent ="Sum: " + sum
    cardsEl.innerHTML = "Cards: "

    for(let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += cards[i].card + " "
    }

    if (sum <= 20){
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21){
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    // CASH OUT!
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum = 0
        for (let i = 0; i < cards.length; i++){
            sum += parseInt(cards[i].value)
        }
        renderGame()
    }
}

renderCardImage(2)