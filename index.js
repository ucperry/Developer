let homeTimeoutsLeftEl = document.getElementById("homeTimeoutsLeft-el")
let awayTimeoutsLeftEl = document.getElementById("awayTimeoutsLeft-el")

let homeTOL = 5
let awayTOL = 5
let gametime = 

function lessHomeTimeouts() {
   if (homeTOL > 0) {
    homeTOL = homeTOL - 1} else {homeTOL=0}
    homeTimeoutsLeftEl.innerText = homeTOL
}

function lessAwayTimeouts() {
   if (awayTOL > 0) {
    awayTOL = awayTOL - 1} else {awayTOL=0}
    awayTimeoutsLeftEl.innerText = awayTOL
}

function increaseGameClock() {

}