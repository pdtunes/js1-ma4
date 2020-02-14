/* Write code that checks that the firstName input's value is at least 2 characters long when the form is submitted.

Show/hide the error message every time the validation runs. */

const firstName = document.querySelector("#firstName");
const button = document.querySelector("button");

firstName.addEventListener("keyup", checkLength);

button.addEventListener("click", event => {
  event.preventDefault();
});

function checkLength(event) {
  const inputValue = event.target.value;

  if (checkInputLength(inputValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}

function checkInputLength(value) {
  console.log(value.length);
  if (value.length > 2) {
    return true;
  } else {
    return false;
  }
}
