import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {connect} from 'react-redux';
import DashBoardPage from './DataDisplay';


function App(props) {
  console.log(props);
  
  return (
    <div className="App">
     
      
      
     {!props.signal && <div>
    
<div className="row">
<div className="col-md-4"></div>

  <div className="col-md-4" id="loginForm">
    <div id="msg"> {!props.signal && props.message}</div>
    <h3>Login</h3>
      <div className="form-horizontal" >
  <div className="form-group">
    <label className="control-label col-sm-3" for="email">UserName:</label>
    <div className="col-sm-9">
      <input type="email" className="form-control" id="email" placeholder="Enter email"/>
    </div>
  </div>
  <div className="form-group">
    <label className="control-label col-sm-3" for="pwd">Password:</label>
    <div className="col-sm-9">
      <input type="password" className="form-control" id="pwd" placeholder="Enter password"/>
    </div>
  </div>
  
  <div className="form-group" >
    <div className="col-sm-offset-5 col-sm-10">
      <button type="submit" className="btn btn-info" onClick={()=>{props.login()}}>Login</button>
    </div>
  </div>
</div>
</div>
<div className="col-md-4"></div>  
  </div>    
       
       </div>
     }
      {props.signal && <DashBoardPage/>}
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    message:state.message,
    signal:state.signal
  }
 }
 const mapDispatchToProps=(dispatch)=>{
  return {
    login:()=>{
      var user=document.getElementById('email').value;
      var pass=document.getElementById('pwd').value;
      if(user != '' && pass != '' && user != null && pass != null){
        dispatch({
          type:'LOGIN',
          data:{
            user:user,
            pass:pass
          }
        })
      }else{
        dispatch({
          type:'MISSING',
          data:{
            user:user,
            pass:pass
          }
        })
      }
      
    },
    
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(App);
  
