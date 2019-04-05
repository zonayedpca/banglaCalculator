import colors from './colors';

export const onKeyPress = (value, input) => {
  if(value === 'C') return { type: 'ON_RESET' }
  if(value === '>') return { type: 'ON_BACKSPACE' }
  if(value === '+' || value === '-' || value === 'x' || value === '/' || value === '%') return { type: 'ON_OPERATOR', value }
  if(value === '.') return { type: 'ON_DOT' }
  if(value === '=') return onResultSubmit(input);
  return { type: 'ON_NUMBER_KEYPRESS', value };
}

export const onResultSubmit = result => {
  return {
    type: 'ON_SUBMIT',
    result
  }
}

export const onColorChange = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return {
    type: 'ON_COLOR_CHANGE',
    color
  }
}
