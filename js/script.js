
let score1 = 0;
let scoreHome = document.getElementById('scoreHome');

function addOne() {
    score1 += 1;
    scoreHome.textContent = score1;
}

function addTwo() {
    score1 += 2;
    scoreHome.textContent = score1;
}
function addThree() {
    score1 += 3;
    scoreHome.textContent = score1;
}

let score2 = 0;
let scoreGuest = document.getElementById('scoreGuest');

function guestAddOne() {
    score2 += 1;
    scoreGuest.textContent = score2;
}
function guestAddTwo() {
    score2 += 2;
    scoreGuest.textContent = score2;
}
function guestAddThree() {
    score2 += 3;
    scoreGuest.textContent = score2;
}

/* SAVE RESULTS */

let homeResults = document.getElementById('homeResults');
let guestResults = document.getElementById('guestResults');

function save() {
    homeResults.textContent += score1 + '-';
    score1 = 0;
    guestResults.textContent += score2 + '-';
    score2 = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}