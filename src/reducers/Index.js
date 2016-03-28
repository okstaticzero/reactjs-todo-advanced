import CategoryTree from './CategoryTree';
import { combineReducers } from 'redux';
import undoable from 'redux-undo';

export default combineReducers({
  categories:undoable(CategoryTree)
  //categories:CategoryTree
})