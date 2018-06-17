import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createUser} from '../../actions/userActions';
import '../../../public/css/AddUser.css';

class AddUser extends Component {
	
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const role =  this.getRole.value;
    const data = {
	  id:new Date(),	
      name,
      role,
	  editing:false
    }
	//console.log(data);
	
	this.props.dispatch(createUser(data));
    this.getName.value = '';
    this.getRole.value = '';
  }
render() {
return (
<div>
  <h4>React/Redux CRUD</h4>
 <hr/>
  <form onSubmit={this.handleSubmit}>
  
   <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input className="form-control" id="user_name" required type="text" ref={(input)=>this.getName = input} 
    placeholder="Enter Name" />
    </div>
  </div>
  
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Role</label>
    <div className="col-sm-10">
      <input  className="form-control" id="user_role" required type="text" ref={(input)=>this.getRole = input} 
    placeholder="Enter Role" />
    </div>
  </div>
  
  <div className="form-group row">
    <div className="offset-sm-5 col-sm-5">      
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>
  
    </form>
</div>
);
}
}

export default connect()(AddUser);