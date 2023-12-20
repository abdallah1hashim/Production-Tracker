import View from "./View";

class HoursTeamView extends View {
  _parentEl = document.querySelector(".hours-Team");
  _Hours = ["Lidar", "Image", "ATOT%"];
  _generateMarkup() {
    return `
        ${this._generatehours(this._data.curUserDetails)}
        `;
  }
  _generatehours(queues) {
    return queues.teamHours
      .map((li, i) => {
        if (i < 3) return;
        if (!li) return;
        const mark = `
        <div class="lap-spl-text">
          <p>${this._Hours[i - 3]}</p>
          <h3>${isNaN(li) ? li : (+li).toFixed(1)} </h3>
        </div>
        `;
        return mark;
      })
      .join("");
  }
}

export default new HoursTeamView();
