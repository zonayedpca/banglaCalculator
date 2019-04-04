export default(state='', action) => {
  switch (action.type) {
    case 'ON_SUBMIT':
      let result = action.result ? action.result : '0';
      result = result.replace(/x/g, '*');
      result = result.replace(/^[*\/]/g, '');
      result = result.replace(/[\+\-\*\/]$/g, '');
      result = result.replace('%', '/100');
      result = eval(result);
      result = Number.isInteger(result) ? result : (result.toFixed(2).length > 8 ? result.toExponential(2) : result.toFixed(2));
      console.log(result.length);
      return result;
    case 'ON_RESET':
      return '';
    default:
      return state;
  }
}
