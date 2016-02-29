import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class Category extends React.Component {
	constructor(props) {
       super(props);
       this.addTodo = this.addTodo.bind(this);
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

  addTodo (txt){
  	//alert('add: '+ txt);
    var newTodo = this.state.todos.concat([{text:txt, id:Date.now() }]);
    this.setState({todos: newTodo});
  }

  deleteCatagory (txt){
  	this.props.deleteCategory(this.state.id);
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
	      <div className={"inner-category " + this.state.toggleClass}>
		      <AddTodo addTodo={this.addTodo} />
          <button className="delete-cat pure-button" onClick={this.deleteCatagory}>Delete category</button>
		      <TodoList items={this.state.todos} />
		   </div> 
		 </div>   
    );
  }
}

Category.defaultProps = {
};

export default Category;
