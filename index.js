//VARIABLES
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
    randomCard = Math.floor (2 + Math.random()*10)
    return randomCard
}

function startGame(){
    isAlive = true
    let firstCard =  getRandomCard()
    let secondCard =  getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent ="Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
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
        sum += card
        cards.push(card)
        renderGame()
    }
}
