import { getJson } from "./helpers.js";
import WidgetView from "./views/WidgetView.js";

export { getJson } from "./helpers.js";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const state = {
  hours: ["Lidar Hours", "Image Hours", "ATOT %"],
  data: [],
  users: [],
  teams: "",
  teamsIndex: {},
  usersIndex: {},
  pins: {},
  names: [],
  queues: {},

  curUser: "",
  teamsData: {},
  curUserDetails: {
    name: "",
    shift: "",
    location: "",
    device: "",
    email: "",
    team: "",
    hours: "",
  },
  day: "",
  month: "",
};

export const getData = async function () {
  try {
    const data = await getJson(
      `https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%2015%2F12'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
    );

    state.data = data.values;

    // get all users
    data.values.forEach((value, i) => {
      if (i === 1 || i === 2) return;
      const name = value[3];
      const user = value[1].slice(0, 8);
      state.names.push(name);
      state.users.push(user);
      state.usersIndex[user] = i;
    });

    // make pins
    state.users.map((u) => {
      state.pins[u] = u.slice(2, 6);
    });

    // get queue index and list
    data.values[1].forEach((value, i) => {
      if (i < 7 || value === "") return;

      state.queues[i] = value;
    });

    console.log(state);
    // console.log(data.values);
    // data.values.forEach(item =>{
    //   state.info.item[6];
    // })
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSplByDay = async function (d, m) {
  try {
    state.day = d;
    state.month = m;

    let data;

    if (d === 26) {
      data = await getJson(
        `https://sheets.googleapis.com/v4/spreadsheets/1nt2hFgLSvFXHpHEgOe989W88u0xJlTfHgI8fd7_eaj8/values/'SPL%20Labeler${d}%2F${m}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
      );
    }
    if (d !== 26) {
      data = await getJson(
        `https://sheets.googleapis.com/v4/spreadsheets/1nt2hFgLSvFXHpHEgOe989W88u0xJlTfHgI8fd7_eaj8/values/'SPL%20Labeler%20${d}%2F${m}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
      );
    }

    state.curUserDetails.curQueue = data.values[0];
    state.curUserDetails.spl = data.values[state.usersIndex[state.curUser]];
    console.log(state);
  } catch (err) {
    throw err;
  }
};

export const getTeamData = async function () {
  try {
    const data = await getJson(
      `https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Team%2015%2F12'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
    );
    const teams = data.values;

    state.teams = data.values.map((t) => t[1]);
    state.teams.forEach((t, i) => {
      state.teamsIndex[t] = {
        fp: i,
        qa: i + 1,
      };
    });
    console.log(teams);
    console.log(state);
  } catch (err) {
    console.error(err);
  }
};

export const getTeamSplByDay = async function (d, m) {
  try {
    state.day = d;
    state.month = m;

    const data = await getJson(
      `https://sheets.googleapis.com/v4/spreadsheets/1nt2hFgLSvFXHpHEgOe989W88u0xJlTfHgI8fd7_eaj8/values/'SPL%20TEAM%20${d}%2F${m}'!1:25?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
    );

    state.teamsData.spl = data.values;
    const index = state.teams.indexOf(state.curUserDetails.team);

    state.curUserDetails.teamspl = state.teamsData.spl[index];
  } catch (err) {
    console.error(err);
  }
};

export const setUserData = function () {
  state.curUserDetails.name = state.data[state.usersIndex[state.curUser]][3];
  state.curUserDetails.device = state.data[state.usersIndex[state.curUser]][5];
  state.curUserDetails.location =
    state.data[state.usersIndex[state.curUser]][6];
  state.curUserDetails.shift = state.data[state.usersIndex[state.curUser]][4];
  state.curUserDetails.team = state.data[state.usersIndex[state.curUser]][2];
  state.curUserDetails.email = state.data[state.usersIndex[state.curUser]][1];
  console.log(state.curUser);
};
//      `https://sheets.googleapis.com/v4/spreadsheets/18xHdeVeDhXQ-ksHQjCOVskG3XmIAE4mqat2Foq-jTdw/values/'SPL%20Labeler%2026%2F11'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`

export const getHours = async function (d, m) {
  try {
    const data = await getJson(
      `https://sheets.googleapis.com/v4/spreadsheets/14gN2ZKMFrqwKenVUarpSEC7WBZ4JwXWcMui21TpqWWY/values/'ATOT%20per%20labeler%20${d}%2F${m}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
    );
    state.curUserDetails.hours = data.values[state.usersIndex[state.curUser]];
  } catch (err) {
    console.error(err);
  }
};
export const getHoursTeam = async function (d, m) {
  try {
    const data = await getJson(
      `https://sheets.googleapis.com/v4/spreadsheets/14gN2ZKMFrqwKenVUarpSEC7WBZ4JwXWcMui21TpqWWY/values/'ATOT%20per%20Team%20${d}%2F${m}'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
    );
    const index = state.teams.indexOf(state.curUserDetails.team);

    state.teamsData.hours = data.values;
    state.curUserDetails.teamHours = state.teamsData.hours[index];
    console.log(state);
  } catch (err) {
    console.error(err);
  }
};
