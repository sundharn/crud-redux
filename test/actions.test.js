//actions.test.js

import {createUser,updateUser,deleteUser} from '../src/actions/userActions';

test('should return createUSer action', () => {
    const user = { 
			id:1,
            name: 'Jack',
            role: 'QA',
            editing: false
    };
    const action = createUser(user);
    expect(action).toEqual({
        type: 'ADD_USER',
        data: user
    });
});

test('should return deleteUser action', () => {
	
	const action = deleteUser(2);
    expect(action).toEqual({
        type: 'DELETE_USER',
        id: 2
    });
});

test('should return updateUser action', () => {
	
	const user = {       
            newName: 'Jack',
            newRole: 'QA'
    };
	
    const action = updateUser(2, user);
    expect(action).toEqual({
        type: 'UPDATE_USER',
        id: 2,
        data: user
    });
});