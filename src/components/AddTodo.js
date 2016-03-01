import React from 'react';

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
		    this.props.addTodo(txt);
        this.state.text = '';
      }
	}
	changeContent(e){
		//alert('hi: '+ e.target.value);
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

export default AddTodo;
