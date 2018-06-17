import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../public/css/ListUser.css';
import {editUser} from '../../actions/userActions';


class ListUser extends Component {
	
   render() {
        return (
		<div>
		<h4 className="pt-4">User List</h4>
            <div className="pt-5 sticky-top">
                <ul>
        {this.props.users.map((user) => (
                    <li className="hand" 
          key={user.id}
          onClick={()=>this.props.dispatch(editUser(user))}
          >{user.name}</li>				
					
                ))}    
        </ul>        			                			
        </div>        			
        </div>           
             
        );
    }
}

 const mapStateToProps = (state) => {
    return {
        users: state
    }
} 
export default connect(mapStateToProps)(ListUser);