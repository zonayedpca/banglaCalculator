import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common';

import { onKeyPress } from '../actions';
import { convertToBangla } from '../utils';

const SCREEN_WIDTH = Dimensions.get('window').width;
const KEYPAD_WIDTH = SCREEN_WIDTH - (25 * 2);

const BTN = ['C', '>', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '00', '0', '.', '='];

class Keypad extends Component {
  handlePress = value => {
    const { input } = this.props;
    this.props.onKeyPress(value, input);
  }

  renderBtn = () => {
    const { button, btnText } = styles;
    const { color } = this.props;
    return BTN.map(oneBtn => {
      const styleExtra = oneBtn === '=' && {
        backgroundColor: color.accentColor,
        elevation: 8
      };
      const btnTextExtra = oneBtn === '=' ? { color: color.accentTextColor } : ((/[C>\%]/g).exec(oneBtn) ? { color: color.regularColor } : ((/[\/\x\-\+\=]/g).exec(oneBtn) ? { color: color.accentColor } : { color: color.primaryColor } ));
      return (
        <Button
          key={oneBtn}
          onPress={() => this.handlePress(oneBtn)}
          value={convertToBangla(oneBtn)}
          style={button}
          styleExtra={styleExtra}
          btnText={btnText}
          btnTextExtra={btnTextExtra}
        />
      )
    })
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        {this.renderBtn()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    paddingTop: 25,
    paddingBottom: 25
  },
  button: {
    width: KEYPAD_WIDTH / 4,
    justifyContent: 'center'
  },
  btnText: {
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center'
  }
}

export default connect(({ input, color }) => ({ input, color }), { onKeyPress })(Keypad);
