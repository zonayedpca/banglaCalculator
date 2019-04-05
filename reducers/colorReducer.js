import colors from '../actions/colors';

const INITIAL_STATE = colors[0];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ON_COLOR_CHANGE':
      return action.color;
    default:
      return state;
  }
}
