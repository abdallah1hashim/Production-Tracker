import View from "./View";

class DateView extends View {
  _parentEl = document.querySelector(".date");

  getDate() {
    const month = +this._parentEl.querySelector("#month").value;
    const day = +this._parentEl.querySelector("#day").value;
    return { month, day };
  }

  addHandlerdate(handler) {
    const btn = document.querySelector(".search");
    btn.addEventListener("click", () => {
      handler();
    });
  }
}

export default new DateView();
