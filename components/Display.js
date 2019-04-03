import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { coloredOperator } from '../utils';

class Display extends Component {
  render() {
    const { container, inputStyle, resultStyle } = styles;
    const { input, result } = this.props;
    return (
      <View style={container}>
        <Text style={inputStyle}>{input ? input : 0}</Text>
        <Text style={resultStyle}>{result ? result : 0}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 100,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
  },
  inputStyle: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'right',
    color: '#90a4ae'
  },
  resultStyle: {
    fontSize: 80,
    textAlign: 'right',
    color: '#454a50'
  }
}

export default connect(({ input, result }) => ({ input, result }))(Display);
