import React from 'react';


class TodoList extends React.Component {
	constructor(props) {
       super(props);
     }
	  render() {
	    return <div className='todo-list'>{this.props.items.map(function(item){
	    	return (<div className='todoitem' key={item.id}>
	    				<label className="todo-label" htmlFor="remember">
				            <input id="remember" type="checkbox" /> {item.text}
				        </label>
	    			</div>)
	    })}</div>;
	  }
}

TodoList.defaultProps = {
 
};

export default TodoList;