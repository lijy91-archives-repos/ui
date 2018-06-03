import React, { Component } from 'react';
import { CheckBox } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class CheckBoxExample extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      checkBox: false,
    };
  }

  render() {
    return (
      <SliceScreen>
        <CheckBox
          text="CheckBox"
          checked={this.state.checkBox}
          onCheckedChange={checked => this.setState({ checkBox: checked })}
        />
      </SliceScreen>
    );
  }
}

export default CheckBoxExample;
