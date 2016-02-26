import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class Category extends React.Component {
	constructor(props) {
       super(props);
       this.addTodo = this.addTodo.bind(this);
       this.deleteCatagory = this.deleteCatagory.bind(this);
        this.state = {title: props.item.text,
        			id: props.item.id, 
        			todos: [] 
        		};
  } 

  addTodo (txt){
  	//alert('add: '+ txt);
    var newTodo = this.state.todos.concat([{text:txt, id:Date.now() }]);
    this.setState({todos: newTodo});
  }

  deleteCatagory (txt){
  	this.props.deleteCategory(this.state.id);
  }
 
  render() {
    return (
	    <div>
	      <div className="category-header">
	        <h2>{this.state.title}</h2><button className="delete-cat pure-button" onClick={this.deleteCatagory}>delete category</button>
	      </div>
	      <div className='inner-category'>
		      <AddTodo addTodo={this.addTodo} />
		      <TodoList items={this.state.todos} />
		   </div> 
		 </div>   
    );
  }
}

Category.defaultProps = {
};

export default Category;
