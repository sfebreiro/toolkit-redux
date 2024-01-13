import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByTwo } from '../src/store/slices/counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>count is {counter}</p>
      <div className="card">
        <button onClick={() => {dispatch(increment())}}>
          +1
        </button>
        <button onClick={() => {dispatch(decrement())}}>
          -1
        </button>
        <button onClick={() => {dispatch(incrementByTwo(100))}}>
          +2
        </button>
      </div>
    </>
  )
}

export default App
