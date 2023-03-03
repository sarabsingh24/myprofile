import React,{useEffect} from 'react'
import {UPDATE_CART} from './action-type'
import {updateMyCart} from './action/Action'
import { useSelector,useDispatch } from "react-redux";
function MyFile() {
    const  {count} = useSelector((state) => state.createCountReducer);
   
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(updateMyCart(29));
},[])
  return <div>MyFile {count}</div>;
}

export default MyFile