

// start the scores at 0
let homeScore = 0
let guestScore = 0
document.getElementById("home-total").textContent = homeScore
document.getElementById("guest-total").textContent = guestScore

// home score increase functions

let homeTotal = document.getElementById("home-total")

function home1() {
    homeScore += 1
    homeTotal.textContent = homeScore 
}

function home2() {
    homeScore += 2
    homeTotal.textContent = homeScore 
}

function home3() {
    homeScore += 3
    homeTotal.textContent = homeScore 
}

// guest score increase functions

let guestTotal = document.getElementById("guest-total")

function guest1() {
    guestScore += 1
    guestTotal.textContent = guestScore 
}

function guest2() {
    guestScore += 2
    guestTotal.textContent = guestScore 
}

function guest3() {
    guestScore += 3
    guestTotal.textContent = guestScore 
}

// new game rest funtion 

function newGame() {
    homeScore = 0
    guestScore = 0
    homeTotal.textContent = homeScore
    guestTotal.textContent = guestScore 
}