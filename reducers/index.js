import { combineReducers } from 'redux';

import inputReducer from './inputReducer';
import resultReducer from './resultReducer';
import colorReducer from './colorReducer';

export default combineReducers({
  input: inputReducer,
  result: resultReducer,
  color: colorReducer
});
