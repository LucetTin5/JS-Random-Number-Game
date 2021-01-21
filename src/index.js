const form1 = document.querySelector(".form1"),
    form2 = document.querySelector(".form2"),
    range = form1.querySelector(".chooseMax"),
    guess = form2.querySelector(".guess"),
    start = range.value,
    maxNum = document.querySelector(".maxNum"),
    game = document.querySelector(".afterplay");

let ANSWER = Math.floor(Math.random() * start);

function callGame(apple) {
    const intApple = parseInt(apple);
    const potato = document.querySelector(".gameDataP");
    const tomato = document.querySelector(".gameDataT");
    potato.innerText = `You chose: ${apple}, the machine chose: ${ANSWER}.`
    let result = "";
    if (intApple === ANSWER) {
        result = "won!";
        tomato.innerText = `You ${result}`
    }else{
        result = "lose!";
        tomato.innerText = `You ${result}`
        ANSWER = generateAnswer(maxNum.textContent);
    }
}
function handleGuess(event) {
    event.preventDefault();
    const guessValue = document.querySelector("#guess").value;
    if (guessValue !== "") { 
        callGame(guessValue);
    }
}
function generateAnswer(max) {
    return Math.floor(Math.random(0) * max);
}
function handleRange(event) {
    const currentValue = event.target.value;
    maxNum.innerText = currentValue;
    ANSWER = generateAnswer(currentValue);
}
function init() {
    maxNum.innerText = start;
    range.addEventListener("input", handleRange);
    form2.addEventListener("submit", handleGuess);
}
init();