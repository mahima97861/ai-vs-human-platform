let data = [
  {text: "I process data efficiently.", ans: "AI"},
  {text: "I feel emotions deeply.", ans: "Human"},
  {text: "I learn from datasets.", ans: "AI"},
  {text: "I think creatively.", ans: "Human"}
];

let i = 0;
let score = 0;

function load() {
  document.getElementById("text").innerText = data[i].text;
}

function guess(choice) {
  if(choice === data[i].ans) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = "❌ Wrong!";
  }

  i++;

  if(i < data.length) {
    setTimeout(() => {
      load();
      document.getElementById("result").innerText = "";
    }, 1000);
  } else {
    document.getElementById("text").innerText = "Game Over!";
    document.getElementById("result").innerText = "Score: " + score;
  }
}

load();