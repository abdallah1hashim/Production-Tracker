import View from "./View";

class HoursLabelerView extends View {
  _parentEl = document.querySelector(".hours-labeler");
  _Hours = ["Lidar", "Image", "ATOT%"];
  _generateMarkup() {
    return `
        ${this._generatehours(this._data.curUserDetails)}
        `;
  }
  _generatehours(queues) {
    return queues.hours
      .map((li, i) => {
        if (i < 7) return;
        if (i > 9) return;
        if (!li) return;
        const mark = `
        <div class="lap-spl-text">
          <p>${this._Hours[i - 7]}</p>
          <h3>${isNaN(li) ? li : (+li).toFixed(1)} </h3>
        </div>
        `;
        return mark;
      })
      .join("");
  }
}

export default new HoursLabelerView();
