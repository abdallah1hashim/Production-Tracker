import * as module from "./module.js";
import "regenerator-runtime/runtime";
import FormView from "./views/FormView.js";
import appView from "./views/appView.js";
import WidgetView from "./views/WidgetView.js";
import MainView from "./views/MainView.js";
import NavView from "./views/NavView.js";
import DateView from "./views/DateView.js";
import FooterView from "./views/FooterView.js";
import SplTabView from "./views/SplTabView.js";
import SplTeamView from "./views/SplTeamView.js";
import HoursLabelerView from "./views/HoursLabeler.js";
import HoursTeamView from "./views/HoursTeamView.js";

const controlForm = async function () {
  // 1) render Login
  FormView.render();

  // check if user and pin are right
  if (module.state.users.includes(FormView.userName)) {
    console.log("user exists");
  }
};

const controlLoginPass = async function () {
  const user = document.querySelector(".log__user").value.trim().toUpperCase();
  // const pass = document.querySelector(".log__pass").value;

  if (!user) return;

  if (module.state.users.includes(user)) {
    console.log("user is right");
    // if (!pass) console.log("enter a valid pin");
    // else {
    // if (pass === module.state.pins[user]) {
    await module.getData();
    await module.getTeamData();

    module.state.curUser = user;
    module.setUserData();
    MainView.hideMain();
    appView.render(module.state.curUserDetails);
    appView.makeDark();
    NavView.changeClass();
    NavView.render(module.state.curUserDetails);
    appView.removeHide();
    // DateView.render();
    FooterView.makeDisapear();
    FormView.makeDisapear();
  } else {
    FormView.renderError();
  }
};

const controlFormClose = function () {
  console.log("form closed");
};

const controlSpl = async function () {

    const { month, day } = DateView.getDate();

    SplTabView.renderSpinner();
    SplTeamView.renderSpinner();
    HoursLabelerView.renderSpinner();
    HoursTeamView.renderSpinner();

    try {
      await module.getSplByDay(day, month);
      SplTabView.render(module.state);
    } catch (err) {
      SplTabView.renderError();
    }
    try {
      await module.getHours(day, month);
      HoursLabelerView.render(module.state);
    } catch (err) {
      HoursLabelerView.renderError();
    }
    try {
      await module.getTeamSplByDay(day, month);
      SplTeamView.render(module.state);
    } catch (err) {
      SplTeamView.renderError();
    }
    try {
      await module.getHoursTeam(day, month);
      HoursTeamView.render(module.state);
    } catch (err) {
      HoursTeamView.renderError();
    }

    WidgetView._hideView(document.querySelector(".holder"));
    WidgetView._ShowView(document.querySelector(".widget-con"));

};

const controlLogout = function () {
  appView._clear();
  DateView._clear();
  WidgetView._clear();
  window.location.reload();
};

// const controlSlide = function () {
//   window.currentHash = window.location.hash;
//   let activeLink = document.querySelector(`.tabs a`);

//   if (window.currentHash) {
//     const visibleHash = document.getElementById(
//       `${this.currentHash.replace("#", "")}`
//     );

//     if (visibleHash) {
//       activeLink = visibleHash;
//     }
//   }

//   activeLink.classList.add("active");
//   WidgetView._shiftTabs(activeLink.id);
// };

const init = function () {
  // NavView.addHandlerLogin(controlLogin);
  FormView.addHandlerCloseForm(controlFormClose);
  FormView.addHandlerRender(controlForm);
  FormView.addHandlerLogin(controlLoginPass);
  DateView.addHandlerdate(controlSpl);
  NavView.addHandlerLogout(controlLogout);
  WidgetView.addHandlerSlide();
  WidgetView.addHandlerSlideTeam();
};
// module.getData();
init();

module.getData();
