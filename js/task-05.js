const ref = {
  nameInput: document.querySelector(`#name-input`),
  nameOutput: document.querySelector(`#name-output`),
};

console.log(ref.nameInput);
console.log(ref.nameOutput);

ref.nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (event.currentTarget.value !== "") {
    ref.nameOutput.textContent = event.currentTarget.value;
  } else {
    ref.nameOutput.textContent = "Anonymous";
  }
}
