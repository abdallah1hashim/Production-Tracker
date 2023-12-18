class FormView {
  _parentEl = document.querySelector(".login");
  _container = document.querySelector(".overlay");
  _data;
  formy;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    this._container.classList = "overlay z-pop opacity-100";
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }

  _generateMarkup() {
    return `
          <h3>Search</h3>
          <div>
            <input class="log__user" type="text" placeholder="username" />
          </div>
          <button type="submit" class="log">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
          <div class="close__login">❌</div>
          <div class="login__error"></div>
          `;
  }
  // <div>
  //   <input class="log__pass" type="password" placeholder="pin" />
  // </div>
  addHandlerRender(handler) {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", function (e) {
      const btn = e.target.closest(".login-btn");

      if (!btn) return;
      handler();
    });
  }

  makeDisapear() {
    this._clear();
    this._container.classList = "overlay z-drop opacity-0";
  }

  renderError() {
    // const parent = document.querySelector("login__error")
    const parent = document.querySelector(".login__error");
    const markup = `
    <p>Icorrect username or password</p>
    `;

    parent.innerHTML = "";
    parent.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerLogin(handler) {
    document.addEventListener("DOMContentLoaded", () => {
      this._parentEl.addEventListener("submit", (e) => {
        e.preventDefault();

        handler();
      });
    });
  }

  addHandlerCloseForm(handler) {
    this._container.addEventListener("click", (e) => {
      const closeBtn = e.target.closest(".close__login");
      const divCon = e.target.closest(".div-con");

      if (closeBtn) {
        this._clear();
        this._container.classList = "overlay z-drop opacity-0";
      }

      // if (this._parentEl) {
      //   this._clear();
      //   this._parentEl.classList = "overlay z-drop opacity-0";
      // }
    });
  }
}

export default new FormView();
