import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });  // configure enzyme adapter


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import ListUser from '../../src/components/listUser/ListUser';
jest.unmock('../../src/components/listUser/ListUser');

import EditUser from '../../src/components/editUser/EditUser';
jest.unmock('../../src/components/editUser/EditUser');

describe('ListUser', () => {
	
	// initialize initial state

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
    const mockStore = configureStore(); // create mock store

    let store;
    let container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = mount(<Provider store={store}><ListUser/></Provider>);
    });

    //This passes.
    it('renders the connected component', () => {
		
		console.log('container.length',container.length);
        expect(container.length).toBe(1);
		
		expect(container.find('h4').length).toBe(1); // check h4 tag exist
        expect(container.find('h4').text()).toBe('User List'); // check h4 text is User List

    });

    
    it('shows an li for each comment', () => {
		
		console.log('length',container.find('li').length);
        expect(container.find('li').length).toBe(3); // for pass
        //expect(container.find('li').length).toBe(0); // for fail
    });
	
	it('Delete Record when user click list', () => {		
		container.find('li').first().simulate('click'); // simulate click on first li element		
    });

});