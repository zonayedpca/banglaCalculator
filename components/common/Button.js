import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { convertToBangla } from '../../utils';

const Button = ({ onPress, style, value, extraStyle, extraTextStyle }) => {
  const { button, btnText } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[button, style, extraStyle]}>
      <Text style={[btnText, extraTextStyle]}>{convertToBangla(value)}</Text>
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
