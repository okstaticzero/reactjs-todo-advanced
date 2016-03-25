import React from 'react';
import actions from '../actions/actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component {
	constructor(props) {
        super(props);
        this.changeContent = this.changeContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {text: props.text};

    }
	handleSubmit(e){
		e.preventDefault();
		var txt = this.state.text.trim();
      if(txt.length > 0){
        this.props.dispatch(actions.addTodo(txt, this.props.catID));
        //this.state.text = '';
        this.setState({text:''})
      }
	}
	changeContent(e){
    this.setState({text: e.target.value});
  	}
  render() {
    return (
      <div className="addTodo">
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <input onChange={this.changeContent} value={this.state.text} placeholder='Enter a Todo' />
          <button className="pure-button pure-button-primary">Add Todo</button>
        </form>
      </div>
    );
  }
}
AddTodo.propTypes = {
	text: React.PropTypes.string
};
AddTodo.defaultProps = {

};

//export default AddTodo;
export default connect()(AddTodo);