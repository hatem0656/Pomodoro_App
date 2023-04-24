import { CounterStyled, CounterContainer } from "./Counter.styled";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounters } from "../../features/counters";

const Counter = ({ title, initial, ind }) => {
  const [count, setCount] = useState(initial);
  const periods = useSelector((state) => state.counters.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCounters(
        periods.map((counter, index) => (index === ind ? count : counter))
      )
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <CounterStyled>
      <h5>{title}</h5>
      <CounterContainer>
        <h2>{count}</h2>
        <i
          className="bi bi-chevron-up"
          onClick={() => setCount((prev) => prev + 1)}
        ></i>
        <i
          className="bi bi-chevron-down"
          onClick={() => setCount((prev) => prev - 1)}
        ></i>
      </CounterContainer>
    </CounterStyled>
  );
};
export default Counter;
