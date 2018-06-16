import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUser from '../components/addUser/AddUser';
import EditUser from '../components/editUser/EditUser';

class UserForm extends Component {
	render(){
	
	let array = this.props.users.filter(item => item.editing);	
	let length = array.length;
	let user = array[0];
	
        return (
             <div>                    
            {length>0 ? <EditUser user={user} key={user.id} /> :<AddUser  />}           
            </div>
        );
    }
} 


const mapStateToProps = (state) => {
    return {
        users: state
    }
}
export default connect(mapStateToProps)(UserForm);