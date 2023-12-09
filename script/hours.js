const allHours = {};
const hoursNov = {
  26: [3.12, 5.42, 5.5, 3.43, 4.42, 4.17, 4.74, 5.52, 3.59],
  27: [4.73, 5.55, 5.42, 4.28, 4.63, 0.0, 4.16, 5.37, 4.93],
  28: [0.94, 4.54, 6.42, 4.43, 5.44, 0.0, 0.69, 6.4, 5.6],
  29: [2.98, 4.71, 5.82, 5.17, 5.98, 0.0, 4.65, 5.47, 4.43],
  30: [3.12, 5.42, 5.5, 3.43, 4.42, 4.17, 4.74, 5.52, 3.59],
};
const hoursDec = {
  1: [5.88, 6.79, 6.87, 3.97, 6.12, 0.0, 4.19, 4.92, 4.88],
  2: [4.51, 4.52, 5.94, 0.41, 5.97, 0.0, 1.04, 6.05, 5.89],
  3: [5.89, 4.1, 6.25, 5.6, 6.44, 0.0, 4.43, 6.53, 5.57],
  4: [4.78, 5.11, 5.16, 5.08, 5.68, 0.0, 4.01, 5.65, 4.97],
  5: [0.65, 5.4, 0.84, 0.0, 4.97, 0.0, 1.0, 5.4, 4.38],
  6: [5.04, 5.11, 5.15, 5.38, 5.61, 0.0, 4.42, 4.94, 5.16],
  7: [4.69, 1.88, 1.41, 4.94, 0.0, 0.0, 1.29, 1.65, 4.31],
};
allHours.November = hoursNov;
allHours.December = hoursDec;
