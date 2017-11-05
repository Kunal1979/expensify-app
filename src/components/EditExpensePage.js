import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props)=>{
    console.log('ee');
   console.log(props);
    return (
        
        <div>This is my edit  expense page for {props.match.params.id}
        <ExpenseForm expense = {props.expense}/>
        </div>
    ) 
    
  };

 const mapStateToProps = (state,props)=>{
     return (
         {expense:state.expenses.find((expense)=>expense.id ===props.match.params.id)
           
 }
);
};

  export default connect(mapStateToProps) (EditExpensePage);