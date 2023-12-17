class FooterView {
  _parenEl = document.querySelector(".footer");

  makeDisapear() {
    this._parenEl.innerHTML = "";
  }
}

export default new FooterView();
