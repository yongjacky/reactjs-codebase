import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import sample from './sample/reducer'

export default combineReducers({form,sample});