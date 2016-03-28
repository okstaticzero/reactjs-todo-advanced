
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import reducer from './reducers/Index';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

var initialState = {
    categories: [{
        text: 'Monday’s List',
        id: 789,
        todos: [{
            id: 0,
            text: 'add redux',
            checked:true
        },
        {
            id: 1,
            text: 'implement undo / redo',
            checked:true
        }, {
            id: 2,
            text: 'save state to local storage',
            checked:true
        }]
    }]
}

var store;
if(!localStorage.getItem('todoStore')) {
    //if no local storage set, then use defualt above
  store = createStore(reducer, initialState);
} else {
    //else grab data from local storage
  store = createStore(reducer, JSON.parse(localStorage.getItem('todoStore')));
}



store.subscribe(() =>
    //store state whenever it changes
    localStorage.setItem('todoStore', JSON.stringify(store.getState()))
)

// Render the main component into the dom
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
