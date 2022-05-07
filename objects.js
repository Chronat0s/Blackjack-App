let hands = ["rock", "paper", "scissors"]

function getHand (){
    let hand = Math.floor(Math.random() * 3)
    console.log(hands[hand])
}

getHand()