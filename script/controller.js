import * as module from "./module.js";
import "regenerator-runtime/runtime";
import FormView from "./views/FormView.js";

const controlForm = function () {
  // 1) render Login
  FormView.render(module.getData());

  // check if user and pin are right
  if (module.state.users.includes(FormView.userName)) {
    console.log("user exists");
  }
};

const controlLoginPass = () => {
  const user = document.querySelector(".log__user").value.trim();
  const pass = document.querySelector(".log__pass").value;

  console.log(module.state.pins);
  console.log(module.state.users);
  if (!user) return;

  if (module.state.users.includes(user)) {
    console.log("user is right");
    if (!pass) console.log("enter a valid pin");
    else {
      if (pass === module.state.pins[user]) {
        
      } else {
        console.log("wrong pass");
      }
    }
  } else {
    console.log("no user found");
  }
};

const controlFormClose = function () {
  console.log("form closed");
};

const init = function () {
  // NavView.addHandlerLogin(controlLogin);
  FormView.addHandlerCloseForm(controlFormClose);
  FormView.addHandlerRender(controlForm);
  FormView.addHandlerLogin(controlLoginPass);
};
// module.getData();
init();

module.getData();
