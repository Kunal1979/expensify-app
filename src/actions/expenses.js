import uuid from 'uuid';

export const editExpense = (id,updates)=>{
    return {
        type:"EDIT_EXPENSE",
        id,
        updates
    }
  };
  
  export const removeExpense = ({id=1,description=''}={})=>({
        
          type:'REMOVE_EXPENSE',
          id:id
  
  });
     
      
  
  
  
  export const addExpense = (
  {
      description='',
      note='',
      amount=0,
      createdAt=0
  }
          ={})=>{
      return{
          type:'ADD_EXPENSE',
          expense:{
              id:uuid(),
              description,
              note,
              amount,
              createdAt
  
  
          }
      };
  };
  
  
  