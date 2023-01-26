let homeScore = 0;
let guestScore = 0;

let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");

//add to home score
function addOneHome() {
    homeScore += 1;
    //console.log(homeScore);
    home.textContent = homeScore;
}

function addTwoHome() {
    homeScore += 2;
    //console.log(homeScore);
    home.textContent = homeScore;
}

function addThreeHome() {
    homeScore += 3;
    //console.log(homeScore);
    home.textContent = homeScore;
}

//add to guest score
function addOneGuest() {
    guestScore += 1;
    //console.log(homeScore);
    guest.textContent = guestScore;
}

function addTwoGuest() {
    guestScore += 2;
    //console.log(homeScore);
    guest.textContent = guestScore;
}

function addThreeGuest() {
    guestScore += 3;
    //console.log(homeScore);
    guest.textContent = guestScore;
}

//reset the counters
function updateValue() {
    home.textContent = homeScore;
    guest.textContent = guestScore;
}

function reset() {
    //console.log("Click");
    homeScore = 0;
    guestScore = 0;

    updateValue();
}