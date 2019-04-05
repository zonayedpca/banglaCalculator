import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Font } from 'expo';

import ColorButton from './ColorButton';

import { onColorChange } from '../actions';

import { coloredOperator, convertToBangla } from '../utils';

class Display extends Component {
  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  onColorChaneButtonPress = () => {
    this.props.onColorChange();
  }

  render() {
    const { container, inputStyle, resultStyle, colorButton, colorButtonText } = styles;
    const { input, result, color } = this.props;
    return (
      <View style={[container, { borderBottomColor: color.accentColor }]}>
        <ColorButton title="রঙ" style={colorButton} styleExtra={{ backgroundColor: color.accentColor }} colorButtonText={{ color: color.accentTextColor }} onPress={this.onColorChaneButtonPress} />
        <Text style={[inputStyle, { color: color.primaryColor }]}>{input ? convertToBangla(input) : convertToBangla(0)}</Text>
        <Text style={[resultStyle, { color: color.regularColor }]}>{result ? convertToBangla(result) : convertToBangla(0)}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    paddingTop: 100,
    paddingBottom: 15,
    borderBottomWidth: 2
  },
  inputStyle: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'right'
  },
  resultStyle: {
    fontSize: 80,
    textAlign: 'right'
  },
  colorButton: {
    position: 'absolute',
    bottom: 65,
    padding: 10,
    borderRadius: 4,
    zIndex: 1
  }
}

export default connect(({ input, result, color }) => ({ input, result, color }), { onColorChange })(Display);
