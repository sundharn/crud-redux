import * as types from './actionTypes';


export function createUser(data) {
  return {
    type: types.ADD_USER,
    data
  };
}

export function updateUser(id,data) {
  return {
    type: types.UPDATE_USER,
    id,
	data
  };
}

export function deleteUser(id) {
  return {
    type: types.DELETE_USER,
    id
  };
}

export function editUser(user) {
  return {
    type: types.EDIT_USER,
    user
  };
}


