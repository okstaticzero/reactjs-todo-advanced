import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers'
import data from './data/todos.js'
import { loadState, saveState } from './helpers/localStorage'
import undoable from 'redux-undo';

//console.log(data)
let initialData = data // dummy data
const persistedData = loadState()

//if we have data saved to local storage, use it
if(persistedData){
	initialData = persistedData
}

//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduced = combineReducers({
    ob:undoable(reducers)
});

let store = createStore(
	reduced,
	initialData,
  	composeEnhancers(
  		applyMiddleware(thunk)
	));

//save to localStorage

store.subscribe(() =>{
  saveState(store.getState())
})


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
