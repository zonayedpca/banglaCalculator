import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { Button } from './common';

import { onKeyPress } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const KEYPAD_WIDTH = SCREEN_WIDTH - (25 * 2);

const BTN = ['C', '>', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '00', '0', '.', '='];

class Keypad extends Component {
  handlePress = value => {
    const { input } = this.props;
    this.props.onKeyPress(value, input);
  }

  renderBtn = () => {
    const { button } = styles;
    return BTN.map(oneBtn => {
      const extraStyle = oneBtn === '=' && {
        backgroundColor: '#ff5a60',
        elevation: 8
      };
      const extraTextStyle = oneBtn === '=' ? { color: '#fff' } : ((/[C>\%]/g).exec(oneBtn) ? { color: '#37474f' } : (/[\/\x\-\+\=]/g).exec(oneBtn) && { color: '#ff5a60' });
      return (
        <Button
          key={oneBtn}
          onPress={() => this.handlePress(oneBtn)}
          value={oneBtn}
          style={button}
          extraStyle={extraStyle}
          extraTextStyle={extraTextStyle}
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
    width: KEYPAD_WIDTH / 4
  }
}

export default connect(({ input }) => ({ input }), { onKeyPress })(Keypad);
