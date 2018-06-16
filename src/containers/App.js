import React, { Component } from 'react';
import UserForm from './UserForm';
import ListUser from '../components/listUser/ListUser';
import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App container">
	<div className="row">
        <div className="col-2 px-1 border border-left-0" id="sticky-sidebar">
		<ListUser />
		</div>
		<div className="col" id="main">
		<UserForm />
		</div>
	</div>       
    </div>
    );
    }
  }
export default App;