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
        {/* Buttons will be changed to icons*/}
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </CounterContainer>
    </CounterStyled>
  );
};
export default Counter;
// setCounters((arr) => [...arr, initial]);
// setCounters(counters.map((counter,index) =>
// (index === id) ? count : counter
//  ))
