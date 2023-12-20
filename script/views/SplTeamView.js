import View from "./View";

class SplTeamView extends View {
  _parentEl = document.querySelector(".spl__Team");
  _generateMarkup() {
    return `
        ${this._generateSplForTeam(this._data.curUserDetails)}
        `;
  }
  _generateSplForTeam(queues) {
    return queues.teamspl
      .map((li, i) => {
        if (i < 3) return;
        if (!li) return;
        return `
        <div class="lap-spl-text">
          <p>${
            this._data.teamsData.spl[0][i]
              ? this._data.teamsData.spl[0][i]
              : this._data.teamsData.spl[0][i - 1] + "QA"
          }</p>
          <h3>${(+li).toFixed(3) || "NONE"}</h3>
        </div>
        `;
      })
      .join("");
  }
}

export default new SplTeamView();
