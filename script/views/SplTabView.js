import View from "./View";

class SplLabelerView extends View {
  _parentEl = document.querySelector(".spl__labeler");
  _generateMarkup() {
    return `
        ${this._generateSpl(this._data.curUserDetails)}
        `;
  }
  _generateSpl(queues) {
    return queues.spl
      .map((li, i) => {
        if (i < 7) return;
        if (!li) return;
        return `
            <div class="lap-spl-text">
              <p>${
                this._data.curUserDetails.curQueue[i]
                  ? this._data.curUserDetails.curQueue[i]
                  : this._data.curUserDetails.curQueue[i - 1] + " QA"
              }</p>
              <h3>${(+li).toFixed(3)}</h3>
            </div>
            `;
      })
      .join("");
  }
}

export default new SplLabelerView();
