function tryToDraw() {
  let name = prompt("What is your name?");
  if (name !== "") {
    alert(
      "Thank you for reading my article, dear " + name + "! Happy drawing 😊"
    );
  } else {
    alert("Thank you for reading my article! Happy drawing 😊");
  }
}
let drawButton = document.querySelector("#button-id");
drawButton.addEventListener("click", tryToDraw);
