
 
import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss' ;
import configureStore  from './store/configureStore' ;
import {addExpense} from './actions/expenses';
import {setTextFilter,setSortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';

const store = configureStore();
console.log(store.getState());

// store.dispatch(addExpense({description:'Rent Bill ',amount:400,createdAt:4000}));

store.dispatch(addExpense({description:'Water Bill',amount:700,createdAt:8000}));

store.dispatch(addExpense({description:'Gas Bill',amount:300,createdAt:6000}));

store.dispatch(setTextFilter({text:''}));
//store.dispatch(setTextFilter({text:'water'}));

// setTimeout(()=>{
//     store.dispatch(setTextFilter({text:'rent'}));

// },3000);

const state = store.getState();

store.dispatch(setSortByAmount());
// store.dispatch(setTextFilter());
const visibleExpense = getVisibleExpenses(state.expenses,state.filters);



console.log(visibleExpense);
console.log("app.js is running");

const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
    
)
 
 
ReactDOM.render(jsx,document.getElementById('app'));





