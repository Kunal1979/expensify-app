import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeExpense} from '../actions/expenses';
// const ExpenseListItem=({description,amount,createdAt}) =>{
//     return (
//         <div>Expense detail
//         <p>{description}</p>
//         <p>{amount} - {createdAt}</p>
//         </div>

//     )
// };
const ExpenseListItem=(props) =>{
    return (
        <div>Expense detail
        <Link to={'/edit/' + props.expense.id}> <h2>{props.expense.description}</h2> </Link> 
        
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
        <p><button onClick={()=>{
            return props.dispatch(removeExpense({id:props.expense.id}))
        }
            
        }>Remove</button></p>
        </div>

    )
};
export default connect()(ExpenseListItem);