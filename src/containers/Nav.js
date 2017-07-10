import { connect } from 'react-redux'
import React from 'react'
import { showCategory, deleteCategory } from "../actions"

const Nav = ({categories, currentCat, showCat, deleteCategory}) => (
	<ul className="nav">
		<li key="all">
         	<button id="ALL" className={check("ALL", currentCat)} onClick={() =>showCat("ALL")}>Show All Todos</button>
         </li>
	  {
	  	categories.allIds.map(id =>(
         <li key={id}>
         	<button id={id} className={check(id,  currentCat)} onClick={() =>showCat(id)}>{ categories.byId[id].title }</button>
          <button onClick={() => deleteCategory(id)} className="btn btn-default btn-xs cat-delete">X</button>
         </li>
	  ))}
	</ul>

)

const check = (id, catID) =>{
	if(id === catID){
      return "btn btn-primary"
	}
	return "btn btn-default"
}

const mapStateToProps = state => {
  return {
    currentCat: state.ob.present.currentCat,
    categories: state.ob.present.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCategory: (id) =>{
      dispatch(deleteCategory(id))
    },
    showCat: id =>{
    	dispatch(showCategory(id))
    }
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)