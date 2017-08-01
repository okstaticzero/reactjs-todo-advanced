import { combineReducers } from 'redux'
import {removeItem} from '../helpers/reducerHelp.js'


export const byId = (state={}, action) =>{
	switch(action.type){
		case "ADD_CATEGORY":
        	return {...state, [action.id]:{title:action.title, todos:[]}}
    case "DELETE_CATEGORY":	
			let newState = Object.assign({}, state) //copy object
			delete newState[action.id] // delete object
			return newState	
    	default:
		return state;
	}    
	
}

export const allIds = (state=[], action) =>{
	console.log(action.type)
	switch(action.type){
		case "ADD_CATEGORY":
        	return state.concat(action.id);
       	case "DELETE_CATEGORY":
			const index = state.indexOf(action.id)
		    return removeItem(state, index) 	
    	default:
			return state;
	}    
}

const categoryReducer = combineReducers({
    byId:byId,
    allIds:allIds
});


export default categoryReducer