require('normalize.css');
require('styles/App.css');

import React from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';


class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="index">
      	<AddCategory />
        <CategoryList items={this.props.categories} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
 
};

function mapStateToProps(state){
  return state;
}

//export default AppComponent;
export default connect(mapStateToProps) (AppComponent);