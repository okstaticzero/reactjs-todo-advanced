

export const showCategory = (id) =>{
	return{
		type:"SHOW_CATEGORY",
		id
	}
}

export const addCategory = (title, id) =>{
	//redux-thunk enabled - multiple dispatches
	return function(dispatch) {
    	dispatch({
			type:"ADD_CATEGORY",
			title,
			id
		})
		dispatch({
			type:"SHOW_CATEGORY",
			id
		})
   }
}

export const addTodo = (category, copy, id) =>{
	return{
		type:"ADD_TODO",
		category,
		copy,
		id
	}
}

export const deleteTodo = (id) =>{
	return{
		type:"DELETE_TODO",
		id
	}
}

export const deleteCategory = (id) =>{
	return function(dispatch, getState) {
    	dispatch({
			type:"DELETE_CATEGORY",
			id
		})
		//delete all todos in this category
        let todos = getState().ob.present.todos.byId;
        for (var key in todos) {
		   	if(todos[key].cat === id ){
		      dispatch({
				type:"DELETE_TODO",
				id:key
				})
		   	}
		 }

		//default back to 'Show All' if we are removing ucurrently selected category 
		if(getState().ob.present.currentCat === id){
			dispatch({
				type:"SHOW_CATEGORY",
				id:"ALL"
			})
		}
   }
}