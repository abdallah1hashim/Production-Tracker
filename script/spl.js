"use strict";

const months = [
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
const ids = [
  494032, 422386, 853578, 709791, 500995, 326976, 767152, 804806, 768174,
];

const queuesName = [
  "perception_clm_deliverable_9",
  "A100 Full Scene Lidar Radar Daisy Max Range 200 Frames",
  "A110 Full Scene - Lidar + Radar, Max Range, 200 frames",
  "a110_surround_full_scene_lidar_image_150m_100_frames",
  "A100 DaisyML - Lidar, Daisy, 150m ROI, 200 frames",
  "A100 Full Scene - Lidar + Radar + Daisy + Image, Max Range, 200 frames",
  "A100 Full Scene Lidar Radar Daisy Max Range 100 Frames",
  "A100 Near Field - Lidar, Daisy, Image, 15m ROI, 200 frames",
  "A100 PoG - Lidar, Daisy, 150m ROI, 200 frames",
  "A100 Ultra Near Field Closed Course 10m 200 Frames",
  "A100 Ultra Near Field Closed Course 20m 100 Frames",
  "A100 Ultra Near Field Closed Course 20m 200 Frames",
  "A110 Construction and Lane Closed Zones - Lidar, 100m ROI, 200 frames",
  "A110 EMV - Lidar, 150m ROI (or track only), 200 frames",
  "A110 FP EMV - Lidar, 150m, 200 frames",
  "A110 Full Scene - Lidar + Image, 150m, 200 frames",
  "A110 Full-scene - Lidar, 150m ROI, 200 frames",
  "A110 Full-scene Parking Lots - Lidar, 150m ROI, 200 frames",
  "A110 Lane Closed - Lidar, 100m ROI, 200 frames",
  "A110 NCO Animals - Lidar + Image, 150m ROI, 200 frames",
  "A110 NCO Debris Lidar Image 150m 200 Frames",
  "A110 NCO FP - Lidar + Image, 150m ROI, 200 frames",
  "A110 Partial Scene CLM Lidar and Image 200 Frames",
  "A110 Small VRU - Lidar + Image, 100m ROI, 200 frames",
  "EMV MSL Human",
  "EMV MSL Search n Label",
  "FP school bus detection MSL",
  "a110_clm_full_scene_lidar_image_150m_100_frames",
  "a110_ultra_near_field_20m_200_frames",
  "emv_msl_human_high_pri",
  "fp_lrv_msl",
];
const allSpl = {};
const spl26nov = [
  [0, 0, 6.072918919, 0],
  [0, 1.297709841, 7.825626634, 0],
  [0.5183349027, 0, 0, 0],
  [0, 0, 13.58275165, 0],
  [0, 0, 7.017251875, 0],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 4.207866243, 0],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl27nov = [
  [0, 0, 0, 3.970672647],
  [0, 0.4132066889, 0, 0],
  [0.5203480058, 0, 0, 0],
  [0.3741663793, 0, 0, 0],
  [0.2923560735, 0, 0, 0],
  [0, 0, 0, 0],
  [0.3890450722, 0, 0, 0],
  [0.1256956249, 0, 0, 1.233875729],
  [0, 0, 0, -44.12193035],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl28nov = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl29nov = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl30nov = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl1dec = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl2dec = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl3dec = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl4dec = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl5dec = [
  [0, 0, 0, 6.072918919],
  [0, 1.297709841, 0, 7.825626634],
  [0.5183349027, 0, 0, 0],
  [0, 0, 0, 13.58275165],
  [0, 0, 0, 7.017251875],
  [0, 0.2886451966, 0, 0],
  [0.4417950512, 0, 0, 0],
  [0, 0, 0, 4.207866243],
  [0, 0, 0, 0],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
const spl6dec = [
  [0.1666479678, 0.05931224089, 2.056832418, 0],
  [0.08479180346, 0.07200493737, 0, 0],
  [0.2300630502, 0, 0, 0],
  [0.2300630502, 0, 0, 0],
  [0.1705829633, 0, 0, 8.822932156],
  [0, 0, 0, 0],
  [0.257119244, 0, 0, 0],
  [0.1043436217, 0, 0, 0],
  [0.1381339199, 0, 0, 1.306797399],
].map(function (row) {
  return row.map(function (cell) {
    return cell !== 0 ? cell : "";
  });
});
console.log(spl26nov);
const novSpl = {
  spl26: {
    month: `${months[10]}`,
    494032: spl26nov[0],
    422386: spl26nov[1],
    853578: spl26nov[2],
    709791: spl26nov[3],
    500995: spl26nov[4],
    326976: spl26nov[5],
    767152: spl26nov[6],
    804806: spl26nov[7],
    768174: spl26nov[8],
    hm: this,
  },
  spl27: {
    month: `${months[10]}`,
    494032: spl27nov[0],
    422386: spl27nov[1],
    853578: spl27nov[2],
    709791: spl27nov[3],
    500995: spl27nov[4],
    326976: spl27nov[5],
    767152: spl27nov[6],
    804806: spl27nov[7],
    768174: spl27nov[8],
  },
  spl28: {
    month: `${months[10]}`,
    494032: spl28nov[0],
    422386: spl28nov[1],
    853578: spl28nov[2],
    709791: spl28nov[3],
    500995: spl28nov[4],
    326976: spl28nov[5],
    767152: spl28nov[6],
    804806: spl28nov[7],
    768174: spl28nov[8],
  },
  spl29: {
    month: `${months[10]}`,
    494032: spl29nov[0],
    422386: spl29nov[1],
    853578: spl29nov[2],
    709791: spl29nov[3],
    500995: spl29nov[4],
    326976: spl29nov[5],
    767152: spl29nov[6],
    804806: spl29nov[7],
    768174: spl29nov[8],
  },
  spl30: {
    month: `${months[10]}`,
    494032: spl30nov[0],
    422386: spl30nov[1],
    853578: spl30nov[2],
    709791: spl30nov[3],
    500995: spl30nov[4],
    326976: spl30nov[5],
    767152: spl30nov[6],
    804806: spl30nov[7],
    768174: spl30nov[8],
  },
};
const decSpl = {
  spl1: {
    month: `${months[11]}`,
    494032: spl1dec[0],
    422386: spl1dec[1],
    853578: spl1dec[2],
    709791: spl1dec[3],
    500995: spl1dec[4],
    326976: spl1dec[5],
    767152: spl1dec[6],
    804806: spl1dec[7],
    768174: spl1dec[8],
  },
  spl2: {
    month: `${months[11]}`,
    494032: spl2dec[0],
    422386: spl2dec[1],
    853578: spl2dec[2],
    709791: spl2dec[3],
    500995: spl2dec[4],
    326976: spl2dec[5],
    767152: spl2dec[6],
    804806: spl2dec[7],
    768174: spl2dec[8],
  },
  spl3: {
    month: `${months[11]}`,
    494032: spl3dec[0],
    422386: spl3dec[1],
    853578: spl3dec[2],
    709791: spl3dec[3],
    500995: spl3dec[4],
    326976: spl3dec[5],
    767152: spl3dec[6],
    804806: spl3dec[7],
    768174: spl3dec[8],
  },
  spl4: {
    month: `${months[11]}`,
    494032: spl4dec[0],
    422386: spl4dec[1],
    853578: spl4dec[2],
    709791: spl4dec[3],
    500995: spl4dec[4],
    326976: spl4dec[5],
    767152: spl4dec[6],
    804806: spl4dec[7],
    768174: spl4dec[8],
  },
  spl5: {
    month: `${months[11]}`,
    494032: spl5dec[0],
    422386: spl5dec[1],
    853578: spl5dec[2],
    709791: spl5dec[3],
    500995: spl5dec[4],
    326976: spl5dec[5],
    767152: spl5dec[6],
    804806: spl5dec[7],
    768174: spl5dec[8],
  },
  spl6: {
    month: `${months[11]}`,
    494032: spl6dec[0],
    422386: spl6dec[1],
    853578: spl6dec[2],
    709791: spl6dec[3],
    500995: spl6dec[4],
    326976: spl6dec[5],
    767152: spl6dec[6],
    804806: spl6dec[7],
    768174: spl6dec[8],
  },
};

allSpl.November = novSpl;
allSpl.December = decSpl;
console.log(allSpl);
