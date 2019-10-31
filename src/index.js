import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import { requestPosts, requestUsers } from './reducers'
import App from './App';

const logger = createLogger() 

const rootReducers = combineReducers({requestPosts, requestUsers})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, 
				document.getElementById('root')
			    );