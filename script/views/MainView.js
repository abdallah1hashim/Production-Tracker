import View from "./View";

class MainView extends View {
  _parentEl = document.querySelector("main");

  _generateMarkup() {
    return `
    <main class="d-flex align-items-center p-0">
      <div class="container">
        <div class="welcome">
          <h1>OverNight Poduction Tracker</h1>
          <div class="img__holder">
            <img src="/assets/pics/8-bTniNGuczY85cuG-removebg.webp" />
          </div>
        </div>
      </div>
    </main>
    `;
  }
  hideMain() {
    this._parentEl.classList.add("d-none");
  }
  showMain() {
    this._parentEl.classList.remove("d-none");
  }
}

export default new MainView();
