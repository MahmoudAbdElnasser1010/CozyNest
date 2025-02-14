import React from 'react'
import style from './Brands.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increase, increaseByNum, decrease } from '../../redux/counteSlice';

export default function Brands() {

  let {count} = useSelector((store) => store.counterReducer)
  let dispatch = useDispatch();
  
  return <>
    <h2>Brands {count}</h2>
    <button onClick={() => dispatch(increase())}>Increase</button>
    <button onClick={() => dispatch(decrease())}>Decrease</button>
    <button onClick={() => dispatch(increaseByNum(10))}>Increase by 10</button>
  
  </>
}
