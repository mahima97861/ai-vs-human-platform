let questions = [
  {q: "2 + 2", a: "4"},
  {q: "Capital of India?", a: "delhi"},
  {q: "5 * 6", a: "30"},
  {q: "AI full form?", a: "artificial intelligence"}
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[index].q;
}

function checkAnswer() {
  let user = document.getElementById("answer").value.toLowerCase();

  if(user === questions[index].a) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = "❌ Wrong!";
  }

  index++;

  if(index < questions.length) {
    setTimeout(() => {
      loadQuestion();
      document.getElementById("result").innerText = "";
    }, 1000);
  } else {
    document.getElementById("question").innerText = "Game Over!";
    document.getElementById("result").innerText = "Score: " + score;
  }

  document.getElementById("answer").value = "";
}

loadQuestion();