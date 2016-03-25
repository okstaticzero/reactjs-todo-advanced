
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import reduce from './reducers/Reducer';
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
        }, {
            id: 1,
            text: 'save state to local storage',
            checked:false
        }]
    }]
}

var store = createStore(reduce, initialState);


// Render the main component into the dom
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
