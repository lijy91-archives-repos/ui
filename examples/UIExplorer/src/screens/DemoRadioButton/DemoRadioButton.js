import React, { Component } from 'react';
import {
  RadioButton,
  Title,
  Subtitle,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoRadioButton extends Component {
  static navigationOptions = {
    title: 'RadioButton',
  };

  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      demoCheckedValue: '1',
    };
  }

  renderHeader() {
    return (
      <RadioButton.Group
        onChange={(checkedValue) => {
          this.setState({
            demoCheckedValue: checkedValue,
          });
        }}
      >
        <RadioButton
          text="RadioButton"
          value="1"
          checked={this.state.demoCheckedValue === '1'}
        />
        <RadioButton
          text="RadioButton"
          value="2"
          checked={this.state.demoCheckedValue === '2'}
        />
      </RadioButton.Group>
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
            <RadioButton.Group>
              <RadioButton text="RadioButton" value="1" disabled />
              <RadioButton text="RadioButton" value="2" disabled />
            </RadioButton.Group>
          </View>
          <Subtitle>Checked</Subtitle>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}
          >
            <RadioButton.Group>
              <RadioButton text="RadioButton" value="1" checked />
              <RadioButton text="RadioButton" value="2" />
            </RadioButton.Group>
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

export default DemoRadioButton;
