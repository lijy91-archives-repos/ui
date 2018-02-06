import React, { Component } from 'react';
import {
  Title,
  Subtitle,
  Switch,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoSwitch extends Component {
  static navigationOptions = {
    title: 'Switch',
  };

  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      switch1Checked: false,
    };
  }

  renderHeader() {
    return (
      <Switch
        checked={this.state.switch1Checked}
        onCheckedChange={(checked) => {
          this.setState({
            switch1Checked: checked,
          });
        }}
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
            <Switch disabled />
            <Switch disabled checked />
          </View>
          <Subtitle>Checked</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <Switch checked />
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

export default DemoSwitch;
