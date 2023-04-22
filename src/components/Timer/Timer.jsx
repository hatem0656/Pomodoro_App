import { StyledTimer } from "./Timer.styled";
import useTimer from "./useTimer";
import convertNumber from "../../utiltis/convertNumber";
import { useRef } from "react";
const Timer = () => {
  const animation = useRef();
  const { toggleTimer, openSettings, seconds, minutes, buttonState } = useTimer(
    { animation }
  );

  return (
    <StyledTimer>
      <div>
        <span>{convertNumber(minutes)}</span>:
        <span>{convertNumber(seconds)}</span>
      </div>
      <button onClick={toggleTimer}>{buttonState}</button>
      <i className="bi bi-gear-fill" onClick={openSettings}></i>
      <canvas width="380" height="380" ref={animation}></canvas>
    </StyledTimer>
  );
};

export default Timer;
