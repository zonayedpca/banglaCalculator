import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Button = ({ onPress, style, styleExtra, value, btnText, btnTextExtra }) => (
  <TouchableOpacity onPress={onPress} style={[style, styleExtra]}>
    <Text style={[btnText, btnTextExtra]}>{value}</Text>
  </TouchableOpacity>
)

export { Button };
