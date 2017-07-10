import React from 'react'
import { connect } from 'react-redux'

const CategoryTitle = ({title}) => (
  <h2>{title}</h2>
)

const getTitle = (categories, currentCat) =>{
  const curCat = currentCat
  if(curCat === "ALL"){
    return "All Todos"
  }
  return categories.byId[curCat].title

}

const mapStateToProps = state => {
  return {
    title: getTitle(state.ob.present.categories, state.ob.present.currentCat)
  }
}

export default connect(
  mapStateToProps
)(CategoryTitle)