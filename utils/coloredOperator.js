const coloredOperator = (value) => {
  if(value === '=/-' || value === '%' || value === '/' || value === 'X' || value === '-' || value === '+') {
    return true;
  }
  return false;
}

export { coloredOperator };
