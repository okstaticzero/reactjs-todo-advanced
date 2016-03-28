import React from 'react';
import Category from './Category';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TimeTravel from './TimeTravel';

class CategoryList extends React.Component {
	constructor(props) {
       super(props);
     }
	  render() {
	    return <div className='category-wrapper'>
	    	<ReactCSSTransitionGroup transitionName='example' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	    	{this.props.items.map(function(item){
	    	return (<div className='category-container' key={item.id} >
	    				<Category item={item} catID={item.id} todos={item.todos} key={item.id}/>
	    			</div>)
	    	})}
	    	</ReactCSSTransitionGroup>
	    	</div>;
	  }
}

CategoryList.defaultProps = {
 
};

export default CategoryList;