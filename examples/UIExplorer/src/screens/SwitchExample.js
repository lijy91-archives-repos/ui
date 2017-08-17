import React, { Component } from 'react';
import { Screen, Text, Switch, View } from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';

class SwitchExample extends Component {
  static navigationOptions = {
    title: 'Switch',
  };

  constructor(props) {
    super(props);

    this.state = {
      switch1Checked: true,
      switch2Checked: false,
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
        <View>
          <Text>Come soon</Text>
        </View>
      </Screen>
    );
  }
}

export default SwitchExample;
