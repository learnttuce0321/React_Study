import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase, ToggleEvent } from '../store/counter';
const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  console.log(counter)

  const incrementHandler = () => {
    dispatch(increment())
  }

  const increaseHandler = () => {
    dispatch(increase({amount: 10}))
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(ToggleEvent())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { counter.showCounter ? <div className={classes.value}>{counter.counter}</div> : null}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
