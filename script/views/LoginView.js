class LoginView {
  _parentEl = document.body;
  _data;
  formy;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    if (this._parentEl !== document.body) {
      this._clear;
    }
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    formy = this._parentEl.querySelector(".login");
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }

  _generateMarkup() {
    return `
            <div class="overlay z-pop opacity-100">
                <div class="form-con">
                    <form class="login">
                    <h3>Login</h3>
                    <div>
                        <input class="log__user" type="text" placeholder="username" />
                        <p class="wrng__id opacity-0">ID not found.</p>
                    </div>
                    <div>
                        <input class="log__pass" type="password" placeholder="pin" />
                        <p class="wrng__pass opacity-0">your pin is incorrect.</p>
                    </div>
                    <button class="log">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    </button>
                    </form>
                    <div class="close__login">❌</div>
                </div>
            </div>
        `;
  }

  addHandlerLogin(handler) {
    this._parentEl.querySelector(".login").addEventListener("submit", (e) => {
      e.preventDefault();

      const userName = document.body.querySelector(".log__user").value.trim();
      const userPin = document.body.querySelector(".log__pass").value;

      console.log(userName, userPin);
      handler();
    });
  }
}

export default new LoginView();
