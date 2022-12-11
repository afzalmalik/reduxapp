import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state => state.amount);
  
  return (
    <div className='container my-5'>
      <h1>Deposit/Withdraw Money</h1>
      {/* <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      <span>Update Balance</span>
      <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      <button className='btn btn-primary mx-2' onClick={() => { withdrawMoney(100) }}>-</button>
      <span>Update Balance ({balance})</span>
      <button className='btn btn-primary mx-2' onClick={() => { depositMoney(100) }}>+</button>
    </div>
  )
}

export default Shop