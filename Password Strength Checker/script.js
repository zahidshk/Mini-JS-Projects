const inputField = document.getElementById("password");
const outputField = document.getElementById("output");

inputField.addEventListener("input", () => {
  let password = inputField.value;

  if (password.length < 8) {
    outputField.innerText = "Password is too short";
    outputField.style.color = "red";
  } else {
    if (password.search(/[a-z]/) === -1) {
      outputField.innerText = "❌ Password is missing a Lowercase letter.";
      outputField.style.color = "red";
    } else if (password.search(/[A-Z]/) === -1) {
      outputField.innerText = "❌ Password is missing an Uppercase letter.";
      outputField.style.color = "red";
    } else if (password.search(/[0-9]/) === -1) {
      outputField.innerText = "❌ Password is missing a Numeric character.";
      outputField.style.color = "red";
    } else if (
      password.search(
        /[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/
      ) === -1
    ) {
      outputField.innerText = "❌ Password is missing a Special character.";
      outputField.style.color = "red";
    } else {
      outputField.innerHTML = "✅ Password is strong";
      outputField.style.color = "green";
    }
  }
});
