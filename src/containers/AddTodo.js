import { connect } from 'react-redux'
import React from 'react'
import { addTodo } from "../actions"
var shortid = require('shortid');

class AddTodo extends React.Component {
   constructor(props) {
    super(props);
    this.state={inputText:""}
  }

  handleChange = (e) =>{
    this.setState({inputText: e.target.value})
  }


  render(){
    if(this.props.currentCat ==="ALL"){
      //dont render Todo Input if showing All 
      //return(null)
    }
    return(
      <div className="todoInput" >
    	 <form className="form-inline"  onSubmit={e  => {
        e.preventDefault()
        if(this.state.inputText ===""){return}
        this.props.addTodo(this.props.currentCat, this.state.inputText)
        this.setState({inputText: ""})
      }}

        >
        <div className="form-group">
    	   <input value={this.state.inputText} onChange={this.handleChange} className="form-control"/>
          <button className="btn btn-default">Add a todo</button>
        </div>
    	 </form>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentCat: state.ob.present.currentCat
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (category,copy) =>{
    	dispatch(addTodo(category, copy, shortid.generate()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)