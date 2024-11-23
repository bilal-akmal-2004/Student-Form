let users = [];
function User(username, password, email, gender, city) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.gender = gender;
  this.city = city;
}
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
}
function checkOnSubmit(e) {
  e.preventDefault();

  // Radio Button Code here
  let radio = document.getElementsByName("gender");
  let isRadioSelected = false;

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      // console.log(radio[i].value);
      isRadioSelected = true;
      break;
    }
  }

  if (!isRadioSelected) {
    alert("Must select a radio button!");
  }
  //  selcet code here
  let selectButtonCities = document.getElementById("cities");
  if (selectButtonCities.selectedIndex == 0) {
    alert("Must select a city!");
  } else {
    // console.log(selectButtonCities.value);
  }
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const city = selectButtonCities.value;
  const gender = document.querySelector('input[name="gender"]:checked');

  let emailExists = false;
  let usernameExists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      emailExists = true;
      break;
    }
    if (users[i].username === username) {
      usernameExists = true;
      break;
    }
  }
  if (emailExists) {
    alert("Email already exists!");
    return;
  }

  if (usernameExists) {
    alert("Username already exists!");
    return;
  }
  const newUser = new User(username, password, email, gender.value, city);
  users.push(newUser);

  alert("User registered successfully!");

  console.log(users);
}
