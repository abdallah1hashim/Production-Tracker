export default class View {
    _data;

  
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
}