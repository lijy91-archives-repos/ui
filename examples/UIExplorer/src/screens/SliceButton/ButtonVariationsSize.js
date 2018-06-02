import React, { Component } from 'react';
import { Button, View } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    const buttonPanelStyle = {
      flexWrap: 'wrap',
      flexDirection: 'row',
    };
    const buttonMarginStyle = {
      marginRight: 4,
    };
    return (
      <SliceScreen>
        <View style={buttonPanelStyle}>
          <Button style={buttonMarginStyle} size="mini" text="MINI" />
          <Button style={buttonMarginStyle} size="small" text="SMALL" />
          <Button style={buttonMarginStyle} size="medium" text="MEDIUM" />
          <Button style={buttonMarginStyle} size="large" text="LARGE" />
          <Button style={buttonMarginStyle} size="big" text="BIG" />
        </View>
      </SliceScreen>
    );
  }
}

export default ButtonVariationsSize;
