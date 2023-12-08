"use strict";
//////////////////////////////////
const ids = [
  494032, 422386, 853578, 709791, 500995, 326976, 767152, 804806, 768174,
];
// // Elements
const footer = document.getElementsByTagName("footer")[0];
const userInpt = document.querySelector(".log__user");
const passInpt = document.querySelector(".log__pass");
const loginForm = document.querySelector(".login");
const app = document.querySelector(".app");
const welcome = document.querySelector(".welcome");
const navButton = document.querySelector(".login-btn");
const closeLogin = document.querySelector(".close__login");
const overLay = document.querySelector(".overlay");
const formCon = document.querySelector(".form-con");
const wrngId = document.querySelector(".wrng__id");
const wrngPass = document.querySelector(".wrng__pass");

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
//////////////////////////////////
/////////////////

//functions
const RandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randColor = () =>
  `rgb(${RandomInt(0, 255)}, ${RandomInt(0, 255)}, ${RandomInt(0, 255)})`;
const show = function(el) {
  el.classList.add("opacity-100", "z-pop");
}
const hide = function(el) {
  el.classList.remove("opacity-100", "z-pop");
  el.classList.add("opacity-0", "z-drop");
}

// Events
footer.addEventListener("click", function() {
  this.style.backgroundColor = randColor();
});


navButton.addEventListener("click", () => {
  show(overLay);
})
closeLogin.addEventListener("click", () => {
  hide(overLay);
})
// overLay.addEventListener("click", (e)=> {
//   if (e.target != formCon)
//     hide(overLay);
// })

let us;

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!userInpt.value) return;

  if (ids.includes(+userInpt.value)) {

    us = users.find((u) => u.id === +userInpt.value);
    const pass = +us.pin;

    if (+passInpt.value !== pass) {
      console.log(passInpt)
      passInpt.classList.add("br-red");
      passInpt.focus();
      wrngPass.classList.add("opacity-100");
    };
    if (+passInpt.value === pass) {
      console.log("logged in");
      window.open("app.html", "_self");
    } else {
      console.log("smth wrong");
    }
  }
  else {
    wrngId.classList.add("opacity-100");
  }
});
