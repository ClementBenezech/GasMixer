export const minSafePPO2 = 0.16;
export const maxSafePPO2 = 1.4;

export const oxygenColor = "#0aad9e";
export const nitrogenColor = "#00a0db";

/* export const dangerColor = "#ed5418";
export const safeColor = "#24a412"; */

export const dangerColor = "#ff21d2";
export const safeColor = "#0087ff";

export type Theme = {
  dangerColor: string;
  safeColor: string;
};

export type Themes = {
  [key: string]: Theme;
};

export const themes: Themes = {
  bluePink: {
    dangerColor: "#ff21d2",
    safeColor: "#0087ff",
  },
  greenRed: {
    dangerColor: "#ed5418",
    safeColor: "#24a412",
  },
  blueOrange: {
    dangerColor: "rgb(238, 157, 0)",
    safeColor: "rgb(6, 180, 198)",
  },
  royalBlueBloodRed: {
    dangerColor: "    rgb(223, 18, 18)",
    safeColor: "rgb(18, 110, 253)",
  },
};
