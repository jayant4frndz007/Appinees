import React,{ Component } from "react";
import  {connect} from 'react-redux';
import './App.css';
 class Login extends Component{
    constructor(props){
        super(props);
    }

    
    render(){
        return(<div>
    
            <div className="row">
            <div className="col-md-4"></div>
            
              <div className="col-md-4" id="loginForm">
                
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
                  <button type="submit" className="btn btn-info" onClick={()=>{props.login('hruSday@gmail.com','hruday123')}}>Login</button>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-4"></div>  
              </div>    
                   
                   </div>);
    }
}
const mapStateToProps=(state)=>{
    return{
      message:state.message,
      signal:state.signal
    }
   }
   const mapDispatchToProps=(dispatch)=>{
    return {
      login:(arg1,arg2)=>{
        dispatch({
          type:'LOGIN',
          data:{
            user:arg1,
            pass:arg2
          }
        })
      },
      
    }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Login);