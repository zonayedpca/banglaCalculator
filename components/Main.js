import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Display from './Display';
import Keypad from './Keypad';

const Main = ({ color }) => {
  const { container } = styles;
  return (
    <View style={[styles.container, { backgroundColor: color.bgColor }]}>
      <Display />
      <Keypad />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25
  }
};

export default connect(({ color }) => ({ color }))(Main);
