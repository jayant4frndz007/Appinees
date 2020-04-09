import React,{Component} from 'react';
import  {connect} from 'react-redux';

 class DashBoardPage extends Component{
    
    render(){
        return(<div>
            <h2>DashBoardPage</h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                <th key='id'>ID</th>
                <th key='name'>NAME</th>
                <th key='age'>AGE</th>
                <th key='gender'>GENDER</th>
                <th key='email'>EMAIL</th>
                <th key='no'>phoneNo</th>
                </tr>
                </thead>  
                <tbody>
                {
                    this.props.user.map((row)=>{
                    return <React.Fragment>
                        <tr>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.gender}</td>
                        <td>{row.email}</td>
                        <td>{row.phoneNo}</td>
                        </tr>
                    </React.Fragment>
                    })
                }    
                </tbody>  
            </table>
            
        </div>)
    }
}

const mapStateToProps=(state)=>{
    return{
      user:state.user,
      
    }
   }

   export default connect(mapStateToProps,null)(DashBoardPage);