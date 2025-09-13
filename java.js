
function greetMe() {
  const name = document.getElementById("nameInput").value;
  const message = name ? "Hello, " + name + "!" : "Hello!";
  document.getElementById("greeting").textContent = message;
}

let isWhite = true;
function toggleBackground() {
  if (isWhite) {
    document.body.style.backgroundColor = "lightblue";
  } else {
    document.body.style.backgroundColor = "white";
  }
  isWhite = !isWhite;
}

