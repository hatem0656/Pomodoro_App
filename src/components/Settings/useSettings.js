// import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFont } from "../../features/font";
import { setSettings } from "../../features/settings";
import { Fonts, Colors } from "../../helpers/Variables";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setCounters } from "../../features/counters";
import { setColor } from "../../features/color";

const useSettings = () => {
  const selectedFont = useSelector((state) => state.font.value);
  const selectedColor = useSelector((state) => state.color.value);
  const periods = useSelector((state) => state.counters.value);
  const [initialPeriods] = useState(periods);
  const [initialFont] = useState(selectedFont); // save the initial font selected when the component is firstly renerdered to the page (when you click on setting)
  const [initialColor] = useState(selectedColor);
  const dispatch = useDispatch();

  const closeSettings = () => {
    //reseting the initial option (exit without saving changes)
    dispatch(setFont(initialFont));
    dispatch(setColor(initialColor));
    Fonts.forEach((f) => (f.active = f.name === initialFont));
    Colors.forEach((c) => (c.active = c.value === initialColor));
    dispatch(setSettings(false));
    dispatch(setCounters(initialPeriods));
  };

  const changeFont = (font) => {
    if (font !== selectedFont) {
      dispatch(setFont(font));
      Fonts.forEach((f) => (f.active = f.name === font));
    }
  };
  const changeColor = (color) => {
    if (color !== selectedColor) {
      dispatch(setColor(color));
      Colors.forEach((c) => (c.active = c.value === color));
    }
  };
  const applyChanges = () => {
    dispatch(setSettings(false));
  };
  return { closeSettings, changeFont, changeColor, applyChanges };
};

export default useSettings;
