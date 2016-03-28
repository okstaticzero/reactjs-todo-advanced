var update = require('react-addons-update');

export default function CategoryTree(state = [], action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
          ...state,
          {
            text: action.text,
            id: action.id,
            todos:[]
          }
        ]

    case 'REMOVE_CATEGORY':
      var index = state.findIndex(x => x.id==action.id);
      return[
        ...state.slice(0,index),
          ...state.slice(index+1,state.length)]

    case 'ADD_TODO':
      var index = state.findIndex(x => x.id==action.categoryID);
      var newState = update(state, {
            [index]: {
                todos: {
                    $push: [{
                        text: action.text,
                        id: action.id,
                        checked:false
                    }]
                }
            }
    })
    return newState
    case 'TOGGLE_TODO':
       var catIndex = state.findIndex(x => x.id==action.categoryID);
       var todoIndex = state[catIndex].todos.findIndex(x => x.id==action.id);
        var newState = update(state, {
              [catIndex]: {
                  todos: {
                      [todoIndex]: {
                        checked: {$set: action.checked}
                      }
                  }
              }
      })
    return newState
    default:
      return state
  }
}