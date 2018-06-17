import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() }); // configure enzyme adapter

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';
//import { spy } from 'sinon';

import EditUser from '../../src/components/editUser/EditUser';
jest.unmock('../../src/components/editUser/EditUser');
jest.setTimeout(60000) ; // set async call timeout to increase wait time


describe('EditUser Component', () => {
	
	const mockStore = configureStore();
    let store
    let container
	const EditUserMock = jest.fn(() => Promise.resolve({}));
	const props = {
	user: EditUserMock
	};
	
	 const onClick = jest.fn();
	 const onSubmit = jest.fn();
  
    beforeEach(() => {
        store = mockStore(); // create mock store
        container = mount(<Provider store={store}><EditUser {...props} /></Provider>);
    });

    it('should fire onSubmit callback when form is submitted for update user', (done) => {
		
		const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        const form = container.find('form');
        form.find('#user_name').simulate('change', {target: {value: 'Bingu'}});
        form.find('#user_role').simulate('change', {target: {value: 'QA'}});       
        form.simulate('submit');		
        expect(EditUserMock.mock.calls.length).toBe(1);
    });
	
	it('should fire onSubmit callback when form is submitted for delete user', (done) => {	
		
        const form = container.find('form');
        form.find('.btn-danger').simulate('click');      	
        
    });
});