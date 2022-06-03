//VARIABLES
let cardsImageArray = [
    {
        id: "2",
        card : `<img class="card__image" src="assets/2.png">`,
        value: "2"
    },
    {
        id: "3",
        card : `<img class="card__image" src="assets/3.png">`,
        value: "3"
    },
    {
        id: "4",
        card : `<img class="card__image" src="assets/4.png">`,
        value: "4"
    },
    {
        id: "5",
        card : `<img class="card__image" src="assets/5.png">`,
        value: "5"
    },
    {
        id: "6",
        card : `<img class="card__image" src="assets/6.png">`,
        value: "6"
    },
    {
        id: "7",
        card : `<img class="card__image" src="assets/7.png">`,
        value: "7"
    },
    {
        id: "8",
        card : `<img class="card__image" src="assets/8.png">`,
        value: "8"
    },
    {
        id: "9",
        card : `<img class="card__image" src="assets/9.png">`,
        value: "9"
    },
    {
        id: "10",
        card : `<img class="card__image" src="assets/10.png">`,
        value: "10"
    },
    {
        id: "11",
        card : `<img class="card__image" src="assets/Jack.png">`,
        value: "10"
    },
    {
        id: "12",
        card : `<img class="card__image" src="assets/Queen.svg">`,
        value: "10"
    },
    {
        id: "13",
        card : `<img class="card__image" src="assets/King.png">`,
        value: "10"
    },
    {
        id: "14",
        card : `<img class="card__image" src="assets/Ace.png">`,
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

let player = {
    name: "Iraklis",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//FUNCTIONS
function getRandomCard(){
    randomCard = Math.floor (2 + Math.random()*13)
    randomCard = cardsImageArray[randomCard - 2]
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