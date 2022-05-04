let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
function startGame(){
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
    sumEl.textContent ="Sum: " + sum
    cardsEl.textContent= "Cards: " + firstCard + " " + secondCard
}
