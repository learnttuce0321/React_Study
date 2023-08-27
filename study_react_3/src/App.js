import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react'

function reducer(state, action) {
  if (action.type === 'INCREASE_AGE') {
    return {
      ...state,
      age: state.age + 1
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { name: 'Ju', age: 22 })
  function clickHandler() {
    dispatch({ type: 'INCREASE_AGE' })
  }
  return (
    <>
      <h1>{state.name}</h1>
      <h1>{state.age}</h1>
      <button onClick={clickHandler}>Increase Age</button>
    </>
  );
}

export default App;
