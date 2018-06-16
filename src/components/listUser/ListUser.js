import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListUser.css';
import {EDIT_USER} from '../../actions/actionTypes';


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
          onClick={()=>this.props.dispatch({type:EDIT_USER,user:user})}
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