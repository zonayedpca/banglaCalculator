export default(state='', action) => {
  switch (action.type) {
    case 'ON_NUMBER_KEYPRESS':
      return `${state}${action.value}`;
    case 'ON_RESET':
      return '';
    case 'ON_POS_NEG':
      return Math.sign(parseFloat(state)) ? -state : state;
    case 'ON_OPERATOR':
      return (/\D$/).exec(state) ? state : `${state} ${action.value} `;
    case 'ON_SUBMIT':
      return state;
    default:
      return state;
  }
}
