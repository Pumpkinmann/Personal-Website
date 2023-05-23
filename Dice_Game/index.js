randomNumber1 = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);
result = document.querySelectorAll("div > img") ;
result[0].src = `Images/dice${randomNumber1}.png` ;
result[1].src = `Images/dice${randomNumber2}.png` ;
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
}

else {
    document.querySelector("h1").textContent = "Draw!"
}
