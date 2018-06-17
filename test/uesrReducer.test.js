import expect from 'expect';
import userReducer from '../src/reducers/userReducer';
import {createUser,updateUser,deleteUser} from '../src/actions/userActions';

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
    ];

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  })   
 
})

test('should add a user', () => {
    const user = {       
            id:4,
			name: 'Jack',
            role: 'QA',
            editing: false
    };

    const action = {
        type: 'ADD_USER',
        data:user
    };

    const state = userReducer(initialState, action);
    expect(state).toEqual([...initialState, user]);
});


test('should delete a user', () => {
    const action = {
        type: 'DELETE_USER',
        id: 2
    };

    const state = userReducer(initialState, action);
    expect(state).toEqual([initialState[0], initialState[2]]);
});

test('should edit a User', () => {
    const name = 'Sundhar';
	const updateUser = {
		newName: 'Sundhar',
		newRole: 'Senior Software Engineer'
	  };

    const action = {
        type: 'UPDATE_USER',
        id: 2,
        data: updateUser
    };

    const state = userReducer(initialState, action);
    expect(state[1].name).toBe(name);
});