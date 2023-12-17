import View from "./View";

class widget extends View {
  _parentEl = document.querySelector(".widget-con");

  renderError() {
    this._clear();
    const message = `<p style="color:red">Faild to fetch your data :< Make sure you entered the right date!"</p>`;
    this._parentEl.insertAdjacentHTML("afterbegin", message);
  }

  _generateMarkup() {
    return `
          <div class="wid">
            <h2 class="wid-heading">Labeler</h2>
            <div class="content">
              <ul class="tabs">
                <li><a class="active" title="SPL" href="#tab1"><i class="fa-solid fa-gauge"></i>SPL</a></li>
                <li><a title="Time" href="#tab2"><i class="fa-solid fa-clock"></i>Hours</i></a></li>
              </ul>
              <div class="tab-content-wrapper">

                <article class="tab-content" id="tab1-content">

                    ${this.generateOptions(this._data.curUserDetails)}
                  

                </article>

                <article class="tab-content" id="tab2-content">
                  <p>Your Hours</p>
                  <h3>0.00</h3>
                </article>
              </div>
            </div>  
          </div>
          <div class="wid">
            <h2 class="wid-heading">Team</h2>
            <div class="content">
              <ul class="tabs">
                <li><a class="active" title="SPL" href="#tab1"><i class="fa-solid fa-gauge"></i>SPL</a></li>
                <li><a title="Time" href="#tab2"><i class="fa-solid fa-clock"></i>Hours</i></a></li>
              </ul>
              <div class="tab-content-wrapper">

                <article class="tab-content" id="tab1-content">
                ${this.generateOptionsForTeam(this._data.curUserDetails)}
                </article>

                <article class="tab-content" id="tab2-content">
                  <p>Your Hours</p>
                  <h3>0.00</h3>
                </article>
              </div>
            </div>  
          </div>
    `;
  }

  // ${this.generateOptionsForTeam(this._data.queues)};
  generateOptions(queues) {
    return queues.spl
      .map((li, i) => {
        if (i < 7) return;
        if (!li) return;
        return `
        <div class="lap-spl-text">
          <p>${this._data.queues[i]}</p>
          <h3>${(+li).toFixed(3) || "NONE"}</h3>
        </div>
        `;
      })
      .join("");
  }
  generateOptionsForTeam(queues) {
    return queues.teamspl
      .map((li, i) => {
        if (i < 3) return;
        if (!li) return;
        return `
        <div class="lap-spl-text">
          <p>${this._data.queues[i + 4]}</p>
          <h3>${(+li).toFixed(3) || "NONE"}</h3>
        </div>
        `;
      })
      .join("");
  }

  addHolder() {
    const child = `<div class="holder"></div>`;
    this._parentEl.insertAdjacentHTML("afterbegin", child);
  }
}

// getQueue() {
//   let lablersQ = document.querySelector(".Labeler-spl-options").value;
//   let teamQ = document.querySelector(".team-spl-options").value;
//   return { lablersQ, teamQ };
// }

// addHandlerPickLQ(handler) {
//   // this._parentEl.addEventListener("click", (e) => {
//   //   const optionQ = e.target.closest(".labelerBtn");
//   //   if (!optionQ) return;
//   const labelerDropdown = this._parentEl.querySelector(
//     ".Labeler-spl-options"
//   );

//   if (labelerDropdown) {
//     labelerDropdown.addEventListener("change", () => {
//       const labelersQ = labelerDropdown.value;
//       console.log(labelersQ);
//       handler();
//     });
//   } else {
//     console.error("Labeler dropdown element not found.");
//   }
//   // }
// }

export default new widget();
