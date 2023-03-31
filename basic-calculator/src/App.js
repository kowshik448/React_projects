import { useReducer } from 'react';
import './App.css';
import Calculator from './components/calculator';
import reducer  from './reducers/reducer';

function App() {

  const [state,dispatch] = useReducer(reducer,{})

  return (
    <div className="App">
      <Calculator state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
