import { combineReducers } from 'redux'
import {removeItem} from '../helpers/reducerHelp.js'



const byId = (state={}, action) =>{
	switch(action.type){
		case "ADD_TODO":
			return {...state, [action.id]:{copy:action.copy, cat:action.category ,completed:false}}
		case "DELETE_TODO":	
			let newState = Object.assign({}, state) //copy object
			delete newState[action.id] // delete object
			return newState
		default:
			return state;
	}
}

const allIds = (state=[], action) =>{
	switch(action.type){
		case "ADD_TODO":
			return state.concat(action.id);
		case "DELETE_TODO":
			const index = state.indexOf(action.id)
		    return removeItem(state, index)
		default:
			return state;
	}
}


const toDoReducers = combineReducers({
    byId:byId,
    allIds:allIds
});


export default toDoReducers