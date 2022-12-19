const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

let counter = 0
let jokes =[{Q: "Where would you find a snowman dancing?" ,A: "At a snowball!"},{Q: "What do you call a blind reindeer?" ,A: "No-eye deer."}, {Q: "What do you call an old snowman?" ,A: "Water!"}, {Q: "What do snowmen have for breakfast?" ,A: "Snowflakes!"}, {Q: "What did the English teacher call Santa's helpers?" ,A: "Subordinate Clauses!"}, {Q:"What is a parents favorite Christmas carol?" ,A: "Silent Night~"}]
let num = Math.floor(Math.random() * jokes.length)

cracker.addEventListener('click', () => {
  if(counter < 1){
    counter++
  } else{
    wishes.textContent = "Dm @mayayt._ for full version of xmas card ;)  Enjoy some xmas joke here~"
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

function Loop(){      
  window.requestAnimationFrame(Loop);
  if(counter > 0 && counter < 13){
    cracker.style.transform = `scaleX(${1 + (counter / 100)})`
    counter -= 0.05
  }
}
Loop()
