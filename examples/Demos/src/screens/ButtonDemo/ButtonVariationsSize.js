import React, { Component } from 'react';
import { Button } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class ButtonVariationsSize extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  render() {
    return (
      <DemoScreen>
        <Button size={'mini'} text={'MINI'} />
        <Button size={'small'} text={'SMALL'} />
        <Button size={'medium'} text={'MEDIUM'} />
        <Button size={'large'} text={'LARGE'} />
        <Button size={'big'} text={'BIG'} />
      </DemoScreen>
    );
  }
}

export default ButtonVariationsSize;
