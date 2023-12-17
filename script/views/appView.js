import View from "./View";

class appView extends View {
  _parentEl = document.querySelector(".app .container .info");

  _generateMarkup() {
    return `
    <div class="h2-con w-100">
            <h2>User Details</h2>
          </div>
          <div class="details">
            <div class="user-icon">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="personal-info">
              <h3>${this._data.name}</h3>
              <div class="personal-info-text">
                <p>EMAIL: ${this._data.email}</p>
                <p>SHIFT: ${this._data.shift === "ON" ? "Over Night" : ""}</p>
                <p>LOCATION: ${this._data.location}</p>
                <p>TEAM: ${this._data.team}</p>
                <p>DEVICE: ${this._data.device}</p>
              </div>
            </div>
          </div>
    `;
  }

  makeDark() {
    document.body.style.backgroundColor = "var(--widget-background)";
  }
  removeHide() {
    const app = document.querySelector(".app");
    app.classList.remove("hide");
  }
  addHide() {
    const app = document.querySelector(".app");
    app.classList.add("hide");
  }
}

export default new appView();
