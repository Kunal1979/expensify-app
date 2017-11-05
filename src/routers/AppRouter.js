import React from 'react';
import {BrowserRouter , Route, Switch,Link , NavLink} from 'react-router-dom';
import expenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';


  

  
  const NotFoundPage = ()=>{
      return  <div>This is page not found 404 
      <Link to="/"> Go Home </Link>  <br/>
     </div>
    };
   
    
  
  
  
 

    const AppRouter = ()=>{
     return (
        <BrowserRouter>
        <div> 
          <Header />
        <Switch>
          <Route path="/" component={expenseDashboardPage}  exact={true}/>
    
          <Route path="/create" component={AddExpensePage} />
    
          <Route path="/edit/:id" component={EditExpensePage} />
    
          <Route path="/help" component={HelpPage} />
          <Route  component={NotFoundPage} />
          
        </Switch>
        </div>
        
        </BrowserRouter>

      );

    };
 export default AppRouter;