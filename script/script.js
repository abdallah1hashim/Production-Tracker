"use strict";
//////////////////////////////////
// // Elements
const footer = document.getElementsByTagName("footer")[0];
const userInpt = document.querySelector(".log__user");
const passInpt = document.querySelector(".log__pass");
const loginForm = document.querySelector(".login");
const app = document.querySelector(".app");
const welcome = document.querySelector(".welcome");
const navButton = document.querySelector(".login-btn");
const closeLogin = document.querySelector(".logout-btn");
const overLay = document.querySelector(".overlay");
const formCon = document.querySelector(".form-con");
const wrngId = document.querySelector(".wrng__id");
const wrngPass = document.querySelector(".wrng__pass");
const main = document.querySelector("main");
const info = document.querySelector(".info");
const greating = document.querySelector(".greating");
const search = document.querySelector(".search");
const dayInpt = document.querySelector("#day");
const monthInpt = document.querySelector("#month");
const spl = document.querySelector(".spl");
const splCon = document.querySelector(".spl-con");
const submit = document.querySelector(".num__submit");
const proHours = document.querySelector(".productive__hours");
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
  "Eyad Mohamed Mohamed",
  "C-38",
  4223,
  "OverNight",
  "Fourth Floor"
);
const user2 = new User(
  494032,
  "Mohamed saaid abd el aziz",
  "C-37",
  4940,
  "OverNight",
  "Fourth Floor"
);
const user3 = new User(
  853578,
  "Adel Sherif Abbas",
  "C-39",
  8535,
  "OverNight",
  "Fourth Floor"
);
const user4 = new User(
  709791,
  "Mahmoud youssry ghanem",
  "C-40",
  7097,
  "OverNight",
  "Fourth Floor"
);
const user5 = new User(
  500995,
  "Ahmed Ayman Mohamed",
  "C-41",
  5009,
  "OverNight",
  "Fourth Floor"
);
const user6 = new User(
  767152,
  "Ahmed Hussein Abdelreheem",
  "C-43",
  7671,
  "OverNight",
  "Fourth Floor"
);
const user7 = new User(
  804806,
  "Abdelrahman Alaa Abdelrasheed",
  "C-44",
  8048,
  "OverNight",
  "Fourth Floor"
);
const user8 = new User(
  768174,
  "fawzy sayd fawzy",
  "C-45",
  7681,
  "OverNight",
  "Fourth Floor"
);
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
//////////////////////////////////
/////////////////

//functions
function getKeyByValue(object, value) {
  return Object.keys(object).filter((key) => object[key] === value);
}
const RandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randColor = () =>
  `rgb(${RandomInt(0, 255)}, ${RandomInt(0, 255)}, ${RandomInt(0, 255)})`;
const show = function (el) {
  el.classList.add("opacity-100", "z-pop");
};
const hide = function (el) {
  el.classList.remove("opacity-100", "z-pop");
  el.classList.add("opacity-0", "z-drop");
};
const showInfo = function (o, el) {
  el.innerHTML = "";
  [
    ["Name:", o.name],
    ["device:", o.device],
    ["Floor:", o.floor],
    ["Shift:", o.shift],
  ].forEach((e) => {
    const p = document.createElement("p");
    p.textContent = `${e[0]} ${e[1]}`;
    el.appendChild(p);
  });
};

function greatingUser(name) {
  name = name.split(" ")[0];
  greating.textContent = `Welcome ${name}`;
}

function showSpl(m, d, id, el) {
  el.innerHTML = "";
  console.log(m.value, d.value);
  const userSpl = allSpl[m.value]["spl" + d.value][id];
  console.log(userSpl);
  const userSplWQ = [
    ["LIDAR", userSpl[0]],
    ["LIDAR QA", userSpl[1]],
    ["IMAGE", userSpl[2]],
    ["IMAGE QA", userSpl[3]],
  ];
  userSplWQ.forEach((e) => {
    const div = document.createElement("div");
    div.classList.add("d-flex", "flex-column", "spl__item");
    div.innerHTML = `
      <p class="spl-label">${e[0]}</p>
      <p>${e[1] == 0 ? "none" : Number(e[1]).toFixed(2)}</p>
    `;
    el.insertAdjacentElement("beforeend", div);
  });
}

const showSubmit = (m, d, id) => {
  submit.innerHTML = "";

  const i = ids.indexOf(id);
  generalQueues.forEach((q) => {
    if (allSumbit[m.value]["sub" + d.value][q][i] === 0) return;
    const div = document.createElement("div");
    div.classList.add("d-flex", "flex-column", "spl__item");
    div.innerHTML = `
      <p class="spl-label">${q}</p>
      <p>${allSumbit[m.value]["sub" + d.value][q][i]}</p>
    `;
    submit.insertAdjacentElement("beforeend", div);
  });
};

const showHours = (m, d, id) => {
  proHours.innerHTML = "";

  const i = ids.indexOf(id);
  const div = document.createElement("div");

  div.classList.add("d-flex", "flex-column", "spl__item");
  div.innerHTML = `
      <p>${allHours[m.value][d.value][i]}</p>
    `;
  proHours.insertAdjacentElement("beforeend", div);
};
// Events
footer.addEventListener("click", function () {
  this.style.backgroundColor = randColor();
});

navButton.addEventListener("click", () => {
  show(overLay);
});
closeLogin.addEventListener("click", () => {
  hide(overLay);
});
// overLay.addEventListener("click", (e)=> {
//   if (e.target != formCon)
//     hide(overLay);
// })

let us;

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!userInpt.value) return;

  if (ids.includes(+userInpt.value)) {
    us = users.find((u) => u.id === +userInpt.value);
    console.log(us);
    const pass = +us.pin;

    if (+passInpt.value !== pass) {
      console.log(passInpt);
      passInpt.classList.add("br-red");
      passInpt.focus();
      wrngPass.classList.add("opacity-100");
    }
    if (+passInpt.value === pass) {
      console.log("logged in");
      // window.open("app.html", "_self");
      hide(overLay);
      main.classList.add("hidden");
      main.classList.remove("d-flex");
      app.classList.remove("hidden");
      app.classList.add("d-flex");
      navButton.classList.add("hidden");
      closeLogin.classList.remove("hidden");
      ///////////////////////////////////////
      showInfo(us, info);
      greatingUser(us.name);
    } else {
      console.log("smth wrong");
    }
  } else {
    wrngId.classList.add("opacity-100");
  }
});

closeLogin.addEventListener("click", function () {
  console.log("clicked");
  main.classList.remove("hidden");
  main.classList.add("d-flex");
  app.classList.add("hidden");
  app.classList.remove("d-flex");
  navButton.classList.remove("hidden");
  closeLogin.classList.add("hidden");
});

search.addEventListener("click", function () {
  showSpl(monthInpt, dayInpt, us.id, splCon);
  showSubmit(monthInpt, dayInpt, us.id);
  showHours(monthInpt, dayInpt, us.id);
});
