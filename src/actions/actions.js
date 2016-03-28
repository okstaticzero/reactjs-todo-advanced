let actions = {
	addCategory:function(text){
		return{
			type:'ADD_CATEGORY',
			text:text,
			id:Date.now()
		}
	},
	removeCategory:function(id){
		return{
			type:'REMOVE_CATEGORY',
			id:id
		}
	},
	addTodo:function(text,categoryID){
		return{
			type:'ADD_TODO',
			text:text,
			categoryID:categoryID,
			id:Date.now()
		}
	},
	toggleTodo:function(id,categoryID,value){
		return{
			type:'TOGGLE_TODO',
			id:id,
			categoryID:categoryID,
			checked:value
		}
	},
	undo:function(){
		return{
			type:'UNDO'
		}
	}
}

export default actions;