import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../public/css/EditUser.css';
import {updateUser,deleteUser} from '../../actions/userActions';

class EditUser extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newRole = this.getRole.value;
  const data = {
    newName,
    newRole
  }
  this.props.dispatch(updateUser(this.props.user.id, data))
}
render() {
return (
<div>
<h4>React/Redux CRUD</h4>
 <hr/>
  <form onSubmit={this.handleEdit}>
  
	  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input className="form-control" required id="user_name" type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.user.name} placeholder="Enter Name" />
    </div>
  </div>
  
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Role</label>
    <div className="col-sm-10">
      <input  className="form-control" required type="text" id="user_role" ref={(input)=>this.getRole = input} 
    defaultValue={this.props.user.role} placeholder="Enter Role" />
    </div>
  </div>
  
  <div className="form-group row">
    <div className="offset-sm-5 col-sm-7">      
      <button type="button" onClick={()=>this.props.dispatch(deleteUser(this.props.user.id))} className="btn btn-danger">Delete</button>
      <button type="submit" className="btn btn-primary">Update</button>
    </div>
  </div>
  
   </form>
</div>
);
}
}
export default connect()(EditUser);
