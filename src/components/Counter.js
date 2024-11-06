import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { useState } from "react";
import { counterActions } from "../store/slices/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.counterSlice.counter);
  const showCounter = useSelector((state) => state.counterSlice.showCounter);
  const dispatch = useDispatch();
  const [increaseNumber, setIncreaseNumber] = useState(5);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(increaseNumber));
  };

  const increaseCountNumber = (event) => {
    setIncreaseNumber(+event.target.value);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <input type="number" onChange={increaseCountNumber} value={increaseNumber} />
      <div className="counter">
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
