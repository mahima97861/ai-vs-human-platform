function start() {
  window.location.href = "battle.html";
}

/* Typing */
let text = "AI vs Human Intelligence";
let i = 0;

function typing() {
  if(i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();