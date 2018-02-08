import React, { Component } from 'react';
import { Switch } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class SwitchExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      switch: false,
    };
  }

  render() {
    return (
      <SliceScreen>
        <Switch
          checked={this.state.switch}
          onCheckedChange={checked => this.setState({ switch: checked })}
        />
      </SliceScreen>
    );
  }
}

export default SwitchExample;
