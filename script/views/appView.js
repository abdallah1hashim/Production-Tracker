import View from "./View";

class appView extends View {
  parenEl = document.body;

  _generateMarkup() {
    return `
        <div class="app flex-column hidden">
      <div class="info d-flex justify-content-between">
        <p class="device">DEVICE: C-01</p>
        <p class="name">NAME: name</p>
        <p class="id">ID: 132654</p>
      </div>
      <div class="date d-flex flex-row justify-content-center">
        <select class="form-select" id="month" name="month">
          <option value="">month</option>
          <option value="November" selected>November</option>
          <option value="December">December</option>
        </select>
        <select class="form-select" id="day" name="day">
          <option value="">day</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30" selected>30</option>
          <option value="31">31</option>
        </select>
        <button class="search">Search</button>
      </div>
      <div class="all__details d-flex flex-row justify-content-between">
        <div class="room__details">
          <div class="room__spl room-sec">
            <p class="room__label">Room SPL:</p>
            <p class="room__numbers spl-con">0.00</p>
          </div>
          <div class="room__submit room-sec">
            <p class="room__label">Room Submit:</p>
            <p class="room__numbers">0</p>
          </div>
          <div class="room__production-hrs room-sec">
            <p class="room__label">Room productive hours:</p>
            <p class="room__numbers">0.0</p>
          </div>
        </div>
        <div class="indi__details d-flex flex-column gap-5">
          <div class="spl user__details">
            <p class="user__label">Your SPL:</p>
            <div class="user__spl user__numbers spl-con">0.00</div>
            <p class="note">
              ⚠️ you will recive deduction based on your avrage SPL if more than
              0.31
            </p>
          </div>
          <div class="submit user__details">
            <p class="user__label">number of submit:</p>
            <p class="num__submit user__numbers">0</p>
          </div>
          <div class="production-hrs user__details">
            <p class="user__label">Your productive hours:</p>
            <p class="productive__hours user__numbers">0.0</p>
            <p class="note">
              ⚠️ you should Target 6.5 hours per day to avoid any deduction
            </p>
          </div>
        </div>
      </div>
    </div>
        `;
  }
}
