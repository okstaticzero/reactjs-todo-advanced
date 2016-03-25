import React from 'react';
import actions from '../actions/actions';
import { connect } from 'react-redux';

class TodoList extends React.Component {
	constructor(props) {
       super(props);
       this.handleChange = this.handleChange.bind(this);
       //this.state = {value: false}
     }

    handleChange(id, event){
    	//alert(event.target.checked)
    	this.props.dispatch(actions.toggleTodo(id, this.props.catID, event.target.checked));
  	}

	  render() {
	  	var _this = this;
	    return <div className='todo-list'>
	    {this.props.items.map(function(item){
	    	return (<div className='todoitem' key={item.id}>
	    				<label className="todo-label" htmlFor={'label-'+item.id} className={'type-'+item.checked}>
				            <input id={'label-'+item.id} type="checkbox" checked={item.checked} onChange={_this.handleChange.bind(this, item.id)} /> {item.text}
				        </label>
	    			</div>)
	    })}</div>;
	  }
}

TodoList.defaultProps = {
 
};

//export default TodoList;
export default connect()(TodoList);