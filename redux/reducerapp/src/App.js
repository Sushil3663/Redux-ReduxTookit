import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber } from './action/index'
import { decNumber } from './action/index'

const App = () => {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h1>Increment and Decrement Counter</h1>
      <h4>Using React and Counter</h4>

      <div className= "quantity">
        <a href className="minus" title='Decrement' onClick={()=> dispatch(decNumber(5))}><span>-</span></a>
        <input type="text" name='quantity' className='quantityinput' value= {myState}/>
        <a href className="plus" title='Incerement' onClick={()=> dispatch(incNumber(5))}><span>+</span></a>


      </div>

    </div>
  )
}

export default App