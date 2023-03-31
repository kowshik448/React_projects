import React, { useReducer } from 'react';
import { useEffect } from 'react';
import './App.css';
import { reducer } from './reducers/reducer';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  const [state, dispatch] = useReducer(reducer,{
    products:[],
    cart:[],
  })
  const fetchData = async ()=>{
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    dispatch({
      type:'ADD_PRODUCTS',
      payload:data.products,
    })
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log(state);

  return (
    <div style={{display:"flex",}}>
      <Products state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
