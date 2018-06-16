import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';

const configureStore = initialState => {
    return createStore(
        userReducer, 
        initialState,
        applyMiddleware(thunk)
    );
};


export default configureStore;