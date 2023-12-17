import * as module from "./module.js";
import "regenerator-runtime/runtime";
import FormView from "./views/FormView.js";
import appView from "./views/appView.js";
import WidgetView from "./views/WidgetView.js";
import MainView from "./views/MainView.js";
import NavView from "./views/NavView.js";
import DateView from "./views/DateView.js";
import FooterView from "./views/footerView.js";
import footerView from "./views/footerView.js";

const controlForm = async function () {
  // 1) render Login
  FormView.render();

  // check if user and pin are right
  if (module.state.users.includes(FormView.userName)) {
    console.log("user exists");
  }
};

const controlLoginPass = async function () {
  const user = document.querySelector(".log__user").value.trim();
  const pass = document.querySelector(".log__pass").value;

  if (!user) return;

  if (module.state.users.includes(user)) {
    console.log("user is right");
    if (!pass) console.log("enter a valid pin");
    else {
      if (pass === module.state.pins[user]) {
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
        WidgetView.addHolder();
        FooterView.makeDisapear();
        FormView.makeDisapear();
      } else {
        FormView.renderError();
      }
    }
  } else {
    FormView.renderError();
  }
};

const controlFormClose = function () {
  console.log("form closed");
};

const controlSpl = async function () {
  const { month, day } = DateView.getDate();

  await module.getSplByDay(day, month);
  await module.getTeamSplByDay(day, month);

  WidgetView.render(module.state);
};

// const controlSPLQ = function (o) {
//   console.log("yes");

//   console.log(module.state);
//   // LabelerSPLView.render(module.state);
// };

const controlLogout = function () {
  appView._clear();
  DateView._clear();
  WidgetView._clear();
  window.location.reload();
};

const init = function () {
  // NavView.addHandlerLogin(controlLogin);
  FormView.addHandlerCloseForm(controlFormClose);
  FormView.addHandlerRender(controlForm);
  FormView.addHandlerLogin(controlLoginPass);
  DateView.addHandlerdate(controlSpl);
  NavView.addHandlerLogout(controlLogout);
  // WidgetView.addHandlerPickLQ(controlSPLQ);
};
// module.getData();
init();

module.getData();
