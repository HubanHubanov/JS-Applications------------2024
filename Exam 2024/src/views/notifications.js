const container = document.getElementById("errorBox");
const msgArea = document.querySelector("span");

export function notify(message) {
  msgArea.textContent = message;
  container.style.display = "block";

  setTimeout(() => container.style.display = "none", 3000)
}

