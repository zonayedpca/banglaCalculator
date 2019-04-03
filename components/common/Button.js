import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Button = ({ onPress, style, value }) => {
  const { button, btnText } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[button, style]}>
      <Text style={btnText}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  button: {
    backgroundColor: '#eee',
    justifyContent: 'center'
  },
  btnText: {
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center'
  }
}

export { Button };
