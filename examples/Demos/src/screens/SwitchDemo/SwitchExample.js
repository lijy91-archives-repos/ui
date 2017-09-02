import React, { Component } from 'react';
import { Switch } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class SwitchExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      switch: false,
    };
  }

  render() {
    return (
      <DemoScreen>
        <Switch
          checked={this.state.switch}
          onCheckedChange={checked => this.setState({ switch: checked })}
        />
      </DemoScreen>
    );
  }
}

export default SwitchExample;
