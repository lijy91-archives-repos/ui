import React, { Component } from 'react';
import { Screen, Title, Subtitle, Switch, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class SwitchExample extends Component {
  static navigationOptions = {
    title: 'Switch',
  };

  constructor(props) {
    super(props);

    this.state = {
      switch1Checked: false,
    };
  }

  render() {
    return (
      <Screen>
        <SimplePageHead>
          <Switch
            checked={this.state.switch1Checked}
            onCheckedChange={(checked) => {
              this.setState({
                switch1Checked: checked,
              });
            }}
          />
        </SimplePageHead>
        <SimplePageBody>
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
        </SimplePageBody>
      </Screen>
    );
  }
}

export default SwitchExample;
