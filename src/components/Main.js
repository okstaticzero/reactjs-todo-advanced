require('normalize.css');
require('styles/App.css');

import React from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';



class AppComponent extends React.Component {
	constructor(props) {
     	super(props);
    this.state = {catagories: [{text:'Groceries', id:Date.now()}]}; 	

    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }
  addCategory (txt){
  	//alert('add: '+ txt);
    var newCat = this.state.catagories.concat([{text:txt, id:Date.now() }]);
    this.setState({catagories: newCat});
  }
  deleteCategory (id){
    var newCat  = this.state.catagories.filter(function(item){
        if(item.id != id){
          return item;
        }
    });
    this.setState({catagories: newCat});
  }
  render() {
    return (
      <div className="index">
      	<AddCategory addCategory={this.addCategory}/>
        <CategoryList items={this.state.catagories} deleteCategory={this.deleteCategory}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
 
};

export default AppComponent;
