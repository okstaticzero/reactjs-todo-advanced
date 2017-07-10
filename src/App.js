import React, { Component } from 'react';
import AddCategory from './containers/AddCategory.js'
import AddTodo from './containers/AddTodo.js'
import Nav from './containers/Nav.js'
import TodoList from './containers/TodoList.js'
import CategoryTitle from './containers/CategoryTitle'
import UndoRedo from './containers/UndoRedo'

class App extends Component {
  render() {
    return (
      <div className="App container">
      
      <div className="top-nav">
        <UndoRedo />
        <p>Refresh page to see state is maintained from local storage</p>
      </div>

        <div className="col-md-4 left-col">
            <AddCategory />
            <Nav />

        </div>

        <div className="col-md-5 right-col">
          <CategoryTitle />
          <AddTodo/>
          <TodoList />
         </div>
      </div>
    );
  }
}

export default App;
