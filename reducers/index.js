import { combineReducers } from 'redux';

import inputReducer from './inputReducer';
import resultReducer from './resultReducer';

export default combineReducers({
  input: inputReducer,
  result: resultReducer
});
