import { connect } from 'react-redux'
import React from 'react'
import { addCategory } from "../actions"
var shortid = require('shortid');

class AddCategory extends React.Component {
   constructor(props) {
    super(props);
    this.state={inputText:""}
  }

  handleChange = (e) =>{
    this.setState({inputText: e.target.value})
  }


  render(){
    return(
      <div className="todoInput">
    	 <form className="form-inline" onSubmit={e  => {
        e.preventDefault()
        if(this.state.inputText ===""){return}
        this.props.addCat(this.state.inputText)
        this.state={inputText:""}

      }}
        >
        <div className="form-group">
    	   <input value={this.state.inputText} className="form-control" onChange={this.handleChange}/>
          <button className="btn btn-primary btn-sm">Add a Category</button>
        </div>
    	 </form>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.ob.present.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCat: title =>{
      dispatch(addCategory(title, shortid.generate()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategory)