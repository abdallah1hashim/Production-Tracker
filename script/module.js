// export { getJson } from "./helpers.js";

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
  users: [],
  pins: {},
  names: [],
  queues: {},
  curUser: {
    name: "",
    users: "",
  },
};

export const getData = async function () {
  try {
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1nt2hFgLSvFXHpHEgOe989W88u0xJlTfHgI8fd7_eaj8/values/'SPL%20Labeler26%2F11'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
    );

    if (!res.ok) throw new Error("faild to fetch data");

    const data = await res.json();

    // get all users
    data.values.forEach((value, i) => {
      if (i === 1 || i === 2) return;
      const name = value[3];
      const user = value[1].slice(0, 8);
      state.names.push(name);
      state.users.push(user);
    });

    // make pins
    state.users.map((u) => {
      state.pins[u] = u.slice(2, 6);
    });

    // get queue index and list
    data.values[0].forEach((value, i) => {
      if (i < 7 || value === "") return;

      state.queues[value] = {
        fp: i,
        qa: i + 1,
      };
    });

    console.log(state);
    return data;
  } catch (err) {
    console.error(err);
  }
};
//      `https://sheets.googleapis.com/v4/spreadsheets/1nt2hFgLSvFXHpHEgOe989W88u0xJlTfHgI8fd7_eaj8/values/'SPL%20Labeler26%2F11'!1:1029?key=AIzaSyA1DiDSTDT-E1KtlFhUpeecLxnKh_Uxxf8`
