import { useDispatch } from "react-redux";
import { setMode } from "../../features/mode";
import { useSelector } from "react-redux";
import { Modes } from "../../helpers/Variables";
import { useEffect } from "react";

function useMode() {
  const periods = useSelector((state) => state.counters.value);
  const selectedMode = useSelector((state) => state.mode.value);
  const dispatch = useDispatch();
  const changeMode = (mode) => {
    if (mode !== selectedMode) {
      dispatch(setMode(mode));
      Modes.forEach((m) => (m.active = m.name === mode));
    }
  };
  useEffect(() => {
    console.log(periods);
  }, [periods]);

  return [changeMode, selectedMode];
}
export default useMode;
