import React, { Component } from 'react';
import {
  CheckBox,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoCheckBox extends Component {
  static navigationOptions = {
    title: 'CheckBox',
  };

  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      demoChecked: true,
    };
  }

  renderHeader() {
    return (
      <CheckBox
        text="CheckBox"
        checked={this.state.demoChecked}
        onCheckedChange={checked => this.setState({ demoChecked: checked })}
      />
    );
  }

  renderContent() {
    return (
      <View>
        <Title>States</Title>
        <View>
          <Subtitle>Disabled</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <CheckBox text="CheckBox" disabled />
          </View>
          <Subtitle>Checked</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <CheckBox text="CheckBox" checked />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <DemoScreen
        HeaderComponent={() => this.renderHeader()}
        ContentComponent={() => this.renderContent()}
      />
    );
  }
}

export default DemoCheckBox;
