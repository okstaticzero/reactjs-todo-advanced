import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import actions from '../actions/actions';
import { connect } from 'react-redux';

class Category extends React.Component {
	constructor(props) {
       super(props);
       
       this.deleteCatagory = this.deleteCatagory.bind(this);
       this.toggleExpand = this.toggleExpand.bind(this);
        this.state = {title: props.item.text,
      			id: props.item.id,
      			todos: [],
            expanded:false,
            toggleClass:'open',
            toggleIcon: '–'
      		};
  }
 
  deleteCatagory(){
    if (window.confirm('Do you really want to delete this category and all todos within it?')){
     this.props.dispatch(actions.removeCategory(this.state.id));
    }
  }
  toggleExpand(){
    this.setState({expanded: !this.state.expanded});
    if(this.state.expanded){
      this.state.toggleClass = 'open'
      this.state.toggleIcon = '–';
    }else{
      this.state.toggleClass = 'closed'
      this.state.toggleIcon = '+';
    }
  }
 
  render() {
    return (
	    <div>
	      <div className="category-header">
	        <h2>{this.state.title}</h2><button className="pure-button toggle-expand" onClick={this.toggleExpand}>{this.state.toggleIcon}</button>
	      </div>
	      <div className={'inner-category ' + this.state.toggleClass}>
		      <AddTodo catID={this.props.catID}/>
          <button className="delete-cat pure-button" onClick={this.deleteCatagory}>Delete category</button>
		      <TodoList items={this.props.todos} catID={this.props.catID}/>
		   </div>
		 </div>
    );
  }
}

Category.defaultProps = {
};

//export default Category;
export default connect()(Category);