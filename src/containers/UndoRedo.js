import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo';

const UndoRedo = ({undo, redo}) =>(
   <div>
   	<button className="btn" onClick={() => undo()}>Undo</button>
    <button className="btn redo" onClick={() => redo()}>Redo</button>
   </div>
)


const mapStateToProps = state => {
  return {
    state:state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    undo:() =>{
        dispatch(ActionCreators.undo())
    },
    redo:() =>{
        dispatch(ActionCreators.redo())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

