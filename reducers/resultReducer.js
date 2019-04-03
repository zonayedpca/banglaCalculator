export default(state='', action) => {
  switch (action.type) {
    case 'ON_SUBMIT':
      return eval(action.result.replace(/x/g, '*'));
    case 'ON_CLEAR':
      return '';
    default:
      return state;
  }
}
