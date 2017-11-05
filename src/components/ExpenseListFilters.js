import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';
import {setSortByDate, setSortByAmount} from '../actions/filters';
const ExpenseListFilters = (props)=>{
  return (
      <div>
       <input type='text' value={props.filters.text.text} onChange={(e)=>{
           {props.dispatch(setTextFilter({text:e.target.value}))};
           
       }}/>
       <select value={props.filters.sortBy} onChange={(e)=>{
           console.log(e.target.value);
           e.target.value==='date'?props.dispatch(setSortByDate()):props.dispatch(setSortByAmount());
       }}> 
          <option value="date">Date</option>
          <option value="amount">Amount</option>
       </select>
    </div>
)

}
const stateToPropsMap=(state)=>{
    return {filters:state.filters};
 };
 export default connect(stateToPropsMap)(ExpenseListFilters);
