const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

nameInput.addEventListener("blur", (event) => {
  updateWarning(nameInput, acceptName(event.target.value));
});

emailInput.addEventListener("blur", (event) => {
  updateWarning(emailInput, acceptEmail(event.target.value));
});

phoneNumber.addEventListener("blur", (event) => {
  updateWarning(phoneNumber, acceptPhoneNumber(event.target.value));
});

passwordInput.addEventListener("blur", (event) => {
  updateWarning(passwordInput, notEmpty(event.target.value));
});

confirmPassword.addEventListener("blur", (event) => {
  updateWarning(confirmPassword, acceptPassword(event.target.value, passwordInput.value));
});

const theForm = document.getElementById("sign-up");

theForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameValid = acceptName(nameInput.value);
  const phoneNumberValid = acceptPhoneNumber(phoneNumber.value);
  const emailValid = acceptEmail(emailInput.value);
  const passwordValid = acceptPassword(confirmPassword.value, passwordInput.value);

  if (nameValid && emailValid && phoneNumberValid && passwordValid) {
    theForm.submit();
  }
});

function updateWarning(elem, valid) {
  if (valid) {
    elem.nextElementSibling.classList.remove("show");
    elem.classList.remove("error");
  }
  else {
    elem.nextElementSibling.classList.add("show");
    elem.classList.add("error");
  }
}

function acceptName(input) {
  return notEmpty(input);
}

function acceptEmail(input) {
  return notEmpty(input) && isEmail(input);
}

function acceptPhoneNumber(input) {
  return notEmpty(input) && isNum(input);
}

function acceptPassword(input, other) {
  console.log(notEmpty(input), match(input, other));
  return notEmpty(input) && match(input, other);
}

function notEmpty(input) {
  return input.trim().length > 0;
}

function isNum(input) {
  const reg = /^\d+$/;
  return reg.test(input);
}

function isEmail(input) {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegExp.test(input);
}

function match(a, b) {
  return a === b;
}