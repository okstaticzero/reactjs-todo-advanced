import React from 'react';
import Category from './Category';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class CategoryList extends React.Component {
	constructor(props) {
       super(props);
     }
	  render() {
	  	{var _this = this}
	    return <div>
	    	<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	    	{this.props.items.map(function(item){
	    	return (<div className='category-container' key={item.id}>
	    				<Category item={item} deleteCategory={_this.props.deleteCategory} />
	    			</div>)
	    })}
	    	</ReactCSSTransitionGroup>
	    	</div>;
	  }
}

CategoryList.defaultProps = {
 
};

export default CategoryList;