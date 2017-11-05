
import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props)=>{
  console.log(props);
    return  <div>This is my add expense component
        <ExpenseForm onSubmit={(expense)=>{
          console.log(expense);
          props.dispatch(addExpense(expense));
          props.history.push('/');
        }}/>
    </div>
  };

  export default connect()(AddExpensePage); 