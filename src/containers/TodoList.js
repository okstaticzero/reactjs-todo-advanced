import { connect } from 'react-redux'
import React from 'react'
import {deleteTodo } from "../actions"
import Todo from "../presentation/Todo.js"

const TodoList = ({todos, todoFiltered, currentCat, deleteTodo}) => (
    <div>  
    	<ul className="todos">
    	  {
    	  	todoFiltered.map(id =>(
            <Todo key={id} id={id} copy={todos.byId[id].copy} deleteTodo={deleteTodo}/>
    	  ))}
    	</ul>
    </div>  
)

const getTodosList = (todos, currentCat) =>{
  switch(currentCat){
    case "ALL" :
      return todos.allIds
    default:
       return todos.allIds.filter( item =>{
          return currentCat === todos.byId[item].cat
       })

  }
}

const mapStateToProps = state => {
  return {
    currentCat: state.ob.present.currentCat,
    todos:state.ob.present.todos,
    todoFiltered: getTodosList(state.ob.present.todos, state.ob.present.currentCat)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo:(todoID) =>{
        dispatch(deleteTodo(todoID))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)