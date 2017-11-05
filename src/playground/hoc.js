import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>{

    return (
       <div>
         <h1>Info</h1>
         <p> this ia the content here  and prop is - {props.info}</p>
       </div>
    );
    
};
const withAdminWarning = (WrappedComponent)=>{
  return (props)=>{
    
    return (
      <div>
    <p>info component with some admin content  + {props.Info}</p>
    
    <WrappedComponent />
    </div>
    );

  }
};    
  

const requireAuthentication = (WrappedComponent)=>{
  return (props)=>{
    
    return (
      <div>
    
    
      {props.isAuthenticated ? <WrappedComponent />:<p>You need to login first to see the component - {props.isAuthenticated}</p>}
   
    
   
    </div>
    );

  }
};    

 const AdminInfo = withAdminWarning(Info);

 const RequireAdminInfo = requireAuthentication(Info);



//ReactDOM.render(<AdminInfo Info="some Info from HOC"/>,document.getElementById('app'));

ReactDOM.render(<RequireAdminInfo isAuthenticated={false}/>,document.getElementById('app'));
//ReactDOM.render(<Info info="this is test only"/>,document.getElementById('app'));