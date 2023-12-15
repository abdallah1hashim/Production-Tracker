import * as module from "./module.js";
import "regenerator-runtime/runtime";
import NavView from "./views/NavView.js";
import LoginView from "./views/LoginView.js";

const controlLogin = function () {
  // 1) render Login
  LoginView.render(module.getData());

  // check if user and pin are right
  // if (module.state.users.includes(LoginView.userName)) {
  //   console.log("user exists");
  // }
};

const controlLoginPass = function () {
  console.log("success");
};

const init = function () {
  NavView.addHandlerLogin(controlLogin);
  LoginView.addHandlerLogin(controlLoginPass);
};
// module.getData();
init();

module.getData();
