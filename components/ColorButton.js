import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

const ColorButton = ({ title, style, styleExtra, colorButtonText, onPress }) => (
  <View style={[style, styleExtra]}>
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[colorButtonText]}>রঙ</Text>
    </TouchableWithoutFeedback>
  </View>
)

export default ColorButton;
