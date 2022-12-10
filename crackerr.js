const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

let counter = 0
let jokes =[{Q: "Where would you find a snowman dancing?" ,A: "At a snowball!"},{Q: "What do you call a blind reindeer?" ,A: "No-eye deer."}, {Q: "Why are mummies such big fans of Christmas?" ,A: "Because they enjoy wrapping!"}, {Q: "What do you call an old snowman?" ,A: "Water!"}, {Q: "What do snowmen have for breakfast?" ,A: "Snowflakes!"}, {Q: "Why don’t penguins fly?" ,A: "Because they’re not tall enough to be pilots!"}]
let num = Math.floor(Math.random() * jokes.length)

cracker.addEventListener('click', () => {
  if(counter < 0){
    counter++
  } else{
    wishes.textContent = "May Santa bring you a joyous Christmas and a prosperous New Year! Enjoy some xmas joke here~"
    maya.textContent = "-Maya"
    instructions.textContent = ""
    joke.textContent = jokes[num].Q
    punchline.textContent = jokes[num].A
    leftCracker.style.animation = "left 1s forwards"
    rightCracker.style.animation = "right 1s forwards"
    message.style.animation = "title 1s forwards"
    jokeWrap.style.animation = "joke 2s forwards"
    cracker.style.transform = "scaleX(1)"
  }
})
