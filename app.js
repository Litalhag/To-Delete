const number = document.querySelector(".number");
const buttonsContainer = document.querySelector(".buttons-container");

function clickHandler(e) {
  const clickedElement = e.target;

  if (clickedElement.nodeName === "BUTTON") {
    const updateNumber = Number(number.textContent);
    const targetId = clickedElement.id;

    if (targetId === "increase") {
      number.textContent = updateNumber + 1;
    } else if (targetId === "decrease") {
      number.textContent = updateNumber - 1;
    } else if (targetId === "reset") {
      number.textContent = 0;
    }
  }
}

buttonsContainer.addEventListener("click", clickHandler);
