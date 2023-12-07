"use strict";
//////////////////////////////////
// // Elements
const footer = document.getElementsByTagName("footer")[0];
const userInpt = document.querySelector(".log__user");
const passInpt = document.querySelector(".log__pass");
const loginForm = document.querySelector(".login");

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

const users = [];
class User {
  #date;
  constructor(id, name, device, pin, shift, floor, username) {
    this.id = id;
    this.name = name;
    this.device = device;
    this.pin = pin;
    this.shift = shift;
    this.floor = floor;
    this.#date = Date.now();
    this.dateS = this.getFormattedDate();
    this.username;
  }
  getFormattedDate() {
    const formattedDate = new Date(this.#date).toDateString();
    return formattedDate;
  }
}

const user1 = new User(
  422386,
  "Myad Mohamed Mohamed",
  "C-38",
  2255,
  "OverNight",
  "Fourth Floor"
);
users.push(user1);
console.log(user1);
//////////////////////////////////
/////////////////

//functions
const RandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randColor = () =>
  `rgb(${RandomInt(0, 255)}, ${RandomInt(0, 255)}, ${RandomInt(0, 255)})`;

// Events
footer.addEventListener("click", function () {
  this.style.backgroundColor = randColor();
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!userInpt.value) return;

  if (ids.includes(+userInpt.value)) {
    const us = users.find((u) => u.id === +userInpt.value);
  } else {
    alert("ID is wrong");
  }
});
