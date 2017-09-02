import React, { Component } from 'react';
import { CheckBox } from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class CheckBoxExample extends Component {
  static navigationOptions = {
    title: 'Demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      checkBox: false,
    };
  }

  render() {
    return (
      <DemoScreen>
        <CheckBox
          text={'CheckBox'}
          checked={this.state.checkBox}
          onCheckedChange={checked => this.setState({ checkBox: checked })}
        />
      </DemoScreen>
    );
  }
}

export default CheckBoxExample;
