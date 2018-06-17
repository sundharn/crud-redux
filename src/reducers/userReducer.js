import {ADD_USER,EDIT_USER,DELETE_USER,UPDATE_USER} from '../actions/actionTypes';

const initialState = [
  {
    id:1,
	name: 'Alice',
    role: 'Software Engineer',
	editing:false
  },
  {
    id:2,
	name: 'Bob',
    role: 'Senior software engineer',
	editing:false
  },
  {
    id:3,
	name: 'Martin',
    role: 'QA',
	editing:false
  }
]

const userReducer = (state = initialState, action) => {
  switch(action.type) {
	  case ADD_USER:
      return state.concat([action.data]);	  
	  case EDIT_USER:  
	  return state.map((user)=>user.id=== action.user.id ? {...user,editing:!user.editing}:user)  	 
	  case DELETE_USER:
      return state.filter((user)=>user.id !== action.id);
	  case UPDATE_USER:
      return state.map((user)=>{
        if(user.id === action.id) {
          return {
             ...user,
             name:action.data.newName,
             role:action.data.newRole,
             editing: !user.editing
          }
        } else return user;
      })
    default:
      return state;
  }
}
export default userReducer;