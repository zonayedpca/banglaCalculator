import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Button = ({ onPress, style, value, topStyle }) => {
  const { button, btnText } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[button, style]}>
      <Text style={[btnText, topStyle]}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  button: {
    justifyContent: 'center'
  },
  btnText: {
    fontWeight: '900',
    color: '#90a4ae',
    fontSize: 22,
    textAlign: 'center'
  }
}

export { Button };
