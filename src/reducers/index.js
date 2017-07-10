import { combineReducers } from 'redux'
import todos from './todos'
import categories from './categories'

const currentCat = (state="ALL", action) =>{
	switch(action.type){
		case "SHOW_CATEGORY":
           return action.id;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	currentCat:currentCat,
  	todos: todos,
  	categories: categories
})

export default todoApp