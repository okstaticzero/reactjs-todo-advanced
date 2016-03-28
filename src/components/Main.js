require('normalize.css');
require('styles/App.css');

import React from 'react';
import AddCategory from './AddCategory';
import TimeTravel from './TimeTravel';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';


class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="index">
        <div className='header-wrapper'>
      	   <AddCategory />
          <TimeTravel />
        </div>
        <CategoryList items={this.props.categories.present} />
        <a id='github' href='https://github.com/zerostatic/reactjs-todo-advanced'>GitHub</a>
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