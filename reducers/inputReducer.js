export default(state='', action) => {
  switch (action.type) {
    case 'ON_NUMBER_KEYPRESS':
      return state.length <= 12 ? `${state}${action.value}`: state;
    case 'ON_RESET':
      return '';
    case 'ON_BACKSPACE':
      return state ? state.slice(0, -1) : state;
    case 'ON_OPERATOR':
      return (/[\D\.]$/g).exec(state) ? state : `${state}${action.value}`;
    case 'ON_DOT':
      return ((/\./g).exec(state) || (/[\+\-\x\/\%]/g).exec(state)) ? state : `${state}.`;
    case 'ON_SUBMIT':
      return state;
    default:
      return state;
  }
}
