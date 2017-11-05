import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do , YYYY'));

export default class ExpenseForm extends React.Component
{
    constructor(props)
    {

        super(props);
        this.state = {
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount*100).toString():'',
            createdAt:props.expense? moment(props.expense.createdAt):moment(),
            calendarFocused:false,
            error:''
        };
    }
    
    
    onDescriptionChange = (e)=>{

       const description = e.target.value;
       this.setState(()=>{ return {description} });
    };
    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>{ return {note} });
    }; 
    onAmountChange=(e)=>{
      const amount = e.target.value;
      if(amount.match(/^\d*(\.\d{0,2})?$/))
      {
        this.setState(()=>{return {amount}})
      }
      
    };
    onDateChange = (createdAt)=>{
        if(createdAt)
        {
            this.setState(()=>{return {createdAt}});
        }
      
    };
    onFocusChange = ({focused})=>{
        return (
           this.setState(()=>{return ({calendarFocused:focused}) }) 
        )
    };
    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description|| !this.state.amount )
        {
            this.setState(()=>{
                return ({error:'please enter the amount and description!'})
            })
        }
        else
        {
            this.setState(()=>{
                return ({error:''})
            });
            this.props.onSubmit({
                description:this.state.description,
                note:this.state.note,
                amount:parseFloat(this.state.amount,10)*100,
                createdAt:this.state.createdAt.valueOf()

            });

        }
    };
 render(){
     return (
         <div>Expense Form 
         <form onSubmit={this.onSubmit}>
           <input type='text' 
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange} 
            />
            <input type='number' 
            placeholder="Amount"
            autoFocus
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
            <SingleDatePicker
               date = {this.state.createdAt}
               onDateChange = {this.onDateChange}
               focused = {this.state.calendarFocused}
               onFocusChange = {this.onFocusChange}
               numberOfMonths={1}
               isOutsideRange={()=>{return false;}}
            />
            <textarea
              placeholder="Add a note for your expense" value={this.state.note}
              onChange={this.onNoteChange}>
            </textarea>

            <button> Add Expense </button>
            <p>{this.state.error}</p>
         </form>
         
         
         </div>
     )
 }

} 