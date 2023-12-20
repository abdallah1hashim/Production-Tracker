export default class View {
  _data;

  render(data) {
    this._data = data;
    this._clear();
    const markup = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }
  renderSpinner() {
    this._clear();
    const mark = `
      <div class="spinner">
        <i class="fa-solid fa-spinner"></i>
      </div>
    `;
    this._parentEl.insertAdjacentHTML("afterbegin", mark);
  }
  renderError(msg) {
    this._clear();
    const message = `<p style="color:red">Faild to fetch your data :< Make sure you entered the right date!"</p>`;
    this._parentEl.insertAdjacentHTML("afterbegin", message);
  }
  _hideView(el = this._parentEl) {
    el.classList.add("opacity-0");
    el.classList.add("z-drop");
  }
  _ShowView(el = this._parentEl) {
    el.classList.remove("opacity-0");
    el.classList.remove("z-drop");
  }
}
