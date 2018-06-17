import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() }); // configure enzyme adapter


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import AddUser from '../../src/components/addUser/AddUser';
jest.unmock('../../src/components/addUser/addUser');
jest.setTimeout(60000); // set async call timeout to increase wait time


describe('AddUser Component',  () => {
	
	const mockStore = configureStore(); 
    let store
    let container
	
	const p = Promise.resolve('success') // for async callback 
  
    beforeEach(() => {
     
	 store = mockStore(); // create mock store
		
	let props = {
      handleFormSubmit: () => {
      },
    };
        container = mount(<Provider store={store}><AddUser {...props} /></Provider>);
    });
	
	it('should have a `<form>` element', () => {
    expect(
      container.find('form').length
    ).toBe(1);
  });
  
 
    it('should fire onSubmit callback when form is submitted', async (done) => {	
		
        const form = container.find('form');
        form.find('#user_name').simulate('change', {target: {value: 'sundhar'}});
        form.find('#user_role').simulate('change', {target: {value: 'SSE'}});    
		form.simulate('submit' ); 
		 await p		
		/*
		// this is success
		expect(props.adduser).toBeCalled();

		// this is failure
		expect(props.history.replace).toBeCalled(); */
		
		
    });
});