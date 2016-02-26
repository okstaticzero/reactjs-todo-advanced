import React from 'react';
import Category from './Category';

class CategoryList extends React.Component {
	constructor(props) {
       super(props);
     }
	  render() {
	  	{var _this = this}
	    return <div>{this.props.items.map(function(item){
	    	
	    	return <div className='category-container' key={item.id}><Category item={item} deleteCategory={_this.props.deleteCategory} /></div>
	    })}</div>;
	  }
}

CategoryList.defaultProps = {
 
};

export default CategoryList;