let randomNumber1 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber1)

let image1 = `images/dice${randomNumber1}.png`
let dice1 = document.querySelectorAll("img")[0]
dice1.setAttribute("src", image1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber2)

let image2 = `images/dice${randomNumber2}.png`
let dice2 = document.querySelectorAll("img")[1]
dice2.setAttribute("src", image2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}