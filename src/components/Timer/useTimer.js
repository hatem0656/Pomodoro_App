import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSettings } from "../../features/settings";
import { Modes } from "../../helpers/Variables";
import draw from "../../utiltis/draw";

const useTimer = ({ animation }) => {
  const selectedMode = useSelector((state) => state.mode.value);
  const selectedColor = useSelector((state) => state.color.value);
  const settingsState = useSelector((state) => state.settings.value);
  const periods = useSelector((state) => state.counters.value);
  const dispatch = useDispatch();
  const [firstTime, setFirstTime] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [modeDuration, setModeDuration] = useState(periods[0]);
  const [minutes, setMinutes] = useState(periods[0]);
  const [buttonState, setButtonState] = useState("start");
  const [time, setTime] = useState(null);
  const [drawer, setDrawer] = useState(null);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);

      draw(0, animation, selectedColor);
    }

    if (seconds === 0 && buttonState !== "start") {
      if (minutes > 0) {
        setTimeout(() => {
          setSeconds(59);
          setMinutes((prev) => prev - 1);
        }, 1000);
      } else if (minutes === 0) {
        setMinutes(modeDuration);
        pauseTimer();
        setFirstTime(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingsState, seconds, minutes, buttonState]);

  useEffect(() => {
    switch (selectedMode) {
      case Modes[0].name:
        setMinutes(periods[0]);
        setModeDuration(periods[0]);
        break;
      case Modes[1].name:
        setMinutes(periods[1]);
        setModeDuration(periods[1]);
        break;
      case Modes[2].name:
        setMinutes(periods[2]);
        setModeDuration(periods[2]);
        break;
      default:
        break;
    }
    setSeconds(0);
    pauseTimer();
    setFirstTime(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode, periods]);

  const startTimer = () => {
    setButtonState("pause");
    setDrawer(draw(modeDuration, animation));

    setTime(
      setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000)
    );
  };

  const pauseTimer = () => {
    clearInterval(time);
    clearInterval(drawer);
    setButtonState("start");
  };

  const toggleTimer = () => {
    buttonState === "start" ? startTimer() : pauseTimer();
  };

  const openSettings = () => dispatch(setSettings(true));

  return { toggleTimer, openSettings, seconds, minutes, buttonState };
};

export default useTimer;
