export const LightTheme = {
  // mainColor: "#f87373",
  // secondaryColor: "#10132c",
  // bkColor: "#171b3c",
  // fontColor: "#e7ecff",
  // headColor: "#fff",
  // hoverColor: "hsl(236, 33%, 92%)",
  // selectionColor: "hsl(235, 87%, 69%)",
};

export let Modes = [
  { name: "pomodoro", period: 25, active: true },
  { name: "short break", period: 5, active: false },
  { name: "long break", period: 15, active: false },
];

export const Fonts = [
  {
    name: "'Nunito Sans',sans-serif",
    active: true,
  },
  {
    name: "'Sansita', sans-serif;",
    active: false,
  },
  {
    name: "'Open Sans', sans-serif;",
    active: false,
  },
];
export const Colors = [
  {
    value: "#f87373",
    active: true,
  },
  {
    value: "#70f4fa",
    active: false,
  },
  {
    value: "#d981f7",
    active: false,
  },
];

export let DarkTheme = {
  mainColor: "#f87373",
  secondaryColor: "#10132c",
  bkColor: "#171b3c",
  fontColor: "#5c6085",
  fontFamily: Fonts[0].name,
  headColor: "#fff",
  hoverColor: "hsl(236, 33%, 92%)",
  selectionColor: "hsl(235, 87%, 69%)",
  settingbk: "#fff",
};
