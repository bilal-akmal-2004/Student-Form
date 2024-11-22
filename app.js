function inValidEmail(e) {
  let inputElement = e.target;
  let spanElement = inputElement.nextElementSibling;
  let username = inputElement.value;
  if (
    username.indexOf("@") === -1 ||
    username.indexOf(".") === -1 ||
    username.length <= username.indexOf(".") + 2
  ) {
    spanElement.style.display = "block";
    spanElement.innerText = "Make sure to enter the correct email format !";
    return;
  }
  spanElement.style.display = "none";
  return;
}
function inValidPassword(e) {
  let inputElement = e.target;
  let spanElement = inputElement.nextElementSibling;
  let username = inputElement.value;
  if (username.length < 5) {
    spanElement.style.display = "block";
    spanElement.innerText = "Password should be 5 characters long";
    return;
  }
  spanElement.style.display = "none";
  return;
}
function inValidUserName(e) {
  let inputElement = e.target;
  let spanElement = inputElement.nextElementSibling;
  let username = inputElement.value;
  if (username.length < 3) {
    spanElement.style.display = "block";
    spanElement.innerText = "Username should be 3 characters long";
    return;
  }
  spanElement.style.display = "none";
  return;
}
function checkOnSubmit(e) {
  e.preventDefault();
}
