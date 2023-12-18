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
  _renderSpinner(){
    this._clear();
    const mark = `
      <div class="spinner">
        <i class="fa-solid fa-spinner"></i>
      </div>
    `
    this._parentEl.insertAdjacentHTML("afterbegin", mark);
  }
}
