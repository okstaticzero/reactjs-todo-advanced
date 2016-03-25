import React from 'react';
import actions from '../actions/actions';
import { connect } from 'react-redux';

class AddCategory extends React.Component {
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
		    //this.props.addCategory(txt);
        this.props.dispatch(actions.addCategory(txt));
        this.setState({text: ''});
      }

	}
	changeContent(e){
		//alert('hi: '+ e.target.value);
    this.setState({text: e.target.value});

  	}
  render() {
    return (
      <div className="addCategory">
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <input onChange={this.changeContent} value={this.state.text} placeholder='Enter new Category' />
          <button className="pure-button pure-button-primary">Add Category</button>
        </form>
      </div>
    );
  }
}
AddCategory.propTypes = {
	text: React.PropTypes.string
};
AddCategory.defaultProps = {

};


//export default AddCategory;
export default connect()(AddCategory);
