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
      Button: {
        marginRight: 4,
      },
    };
    return (
      <SliceScreen>
        <View style={buttonPanelStyle}>
          <Button size="mini" text="MINI" />
          <Button size="small" text="SMALL" />
          <Button size="medium" text="MEDIUM" />
          <Button size="large" text="LARGE" />
          <Button size="big" text="BIG" />
        </View>
      </SliceScreen>
    );
  }
}

export default ButtonVariationsSize;
