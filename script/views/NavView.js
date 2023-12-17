import View from "./View";

class NavView extends View {
  _parentEl = document.querySelector("nav");

  _generateMarkup() {
    return `
    <div class="container">
      <p class="greating">Welcome, ${this._data.name.split(" ")[0]}</p>
          <div class="logo">
            
          </div>
      <button class="logout-btn">Logout</button>
    </div>
    `;
  }
  changeClass() {
    this._parentEl.classList = "nav-app";
  }

  renderOriginal() {
    this._clear();
    const markup = `
    <div class="container">
    <p class="greating">Log in to get started</p>
    <div class="logo">
      <img src="/assets/pics/logo-no-background.webp" alt="logo" />
    </div>
    <button class="login-btn">Login</button>
    <!-- <button class="logout-btn hidden">Logout</button> -->
  </div>
    `;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerLogout(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const logout = e.target.closest(".logout-btn");
      if (!logout) return;
      handler();
    });
  }
}
export default new NavView();
