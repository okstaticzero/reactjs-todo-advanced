var update = require('react-addons-update');
import { combineReducers } from 'redux';
import undoable from 'redux-undo';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return Object.assign({}, state, {
        categories: [
          ...state.categories,
          {
            text: action.text,
            id: action.id,
            todos:[]
          }
        ]
      })
    case 'REMOVE_CATEGORY':
      var index = state.categories.findIndex(x => x.id==action.id);
      return Object.assign({}, state, {
        categories: [...state.categories.slice(0,index),
          ...state.categories.slice(index+1,state.categories.length)]
      })
    case 'ADD_TODO':
      var index = state.categories.findIndex(x => x.id==action.categoryID);
      var newState = update(state, {
        categories: {
            [index]: {
                todos: {
                    $push: [{
                        text: action.text,
                        id: action.id,
                        checked:false
                    }]
                }
            }
        }
    })
    return newState
    case 'TOGGLE_TODO':
       var catIndex = state.categories.findIndex(x => x.id==action.categoryID);
       var todoIndex = state.categories[catIndex].todos.findIndex(x => x.id==action.id);
        var newState = update(state, {
          categories: {
              [catIndex]: {
                  todos: {
                      [todoIndex]: {
                        checked: {$set: action.checked}
                      }
                  }
              }
          }
      })
    return newState
    default:
      return state
  }
}