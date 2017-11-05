import React from 'react';
import {connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseList = (props)=>{
  return(
      <div>
    <h2>Expenses list</h2>
    <ExpenseListFilters/>
    <div>{props.expenses.map((expense)=>{
        //return (<ExpenseListItem key={expense.id} {...expense}/>)
        return (<ExpenseListItem key={expense.id} expense = {expense}/>)
    }

)}</div>

    </div>
  );

};


const mapStateToProps = (state)=>{
    return ({

         expenses:selectExpenses(state.expenses,state.filters),
         filters:state.filters
    }
       
    );
};

export default connect(mapStateToProps)(ExpenseList);
