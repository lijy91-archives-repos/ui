import React, { Component } from 'react';
import {
  Button,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import DemoScreen from '../../components/DemoScreen';

class DemoButton extends Component {
  static navigationOptions = {
    title: 'Button',
  };

  renderHeader() {
    return (
      <Button text="Button" />
    );
  }

  renderContent() {
    const buttonPanelStyle = {
      flexWrap: 'wrap',
      flexDirection: 'row',
    };
    const buttonMarginStyle = {
      marginRight: 4,
      marginBottom: 4,
    };
    return (
      <View>
        <Title>Types</Title>
        <View>
          <Subtitle>Flat</Subtitle>
          <View
            style={buttonPanelStyle}
          >
            <Button style={buttonMarginStyle} styleName="flat-primary" text="Button" />
            <Button style={buttonMarginStyle} styleName="flat-secondary" text="Button" />
            <Button style={buttonMarginStyle} styleName="flat-positive" text="Button" />
            <Button style={buttonMarginStyle} styleName="flat-neutral" text="Button" />
            <Button style={buttonMarginStyle} styleName="flat-negative" text="Button" />
          </View>
          <Subtitle>Outline</Subtitle>
          <View
            style={buttonPanelStyle}
          >
            <Button style={buttonMarginStyle} styleName="outline-primary" text="Button" />
            <Button style={buttonMarginStyle} styleName="outline-secondary" text="Button" />
            <Button style={buttonMarginStyle} styleName="outline-positive" text="Button" />
            <Button style={buttonMarginStyle} styleName="outline-neutral" text="Button" />
            <Button style={buttonMarginStyle} styleName="outline-negative" text="Button" />
          </View>
        </View>
        <Title>States</Title>
        <View>
          <Subtitle>Disabled</Subtitle>
          <View
            style={buttonPanelStyle}
          >
            <Button text="Button" disabled />
          </View>
          <Subtitle>Loading</Subtitle>
          <View
            style={buttonPanelStyle}
          >
            <Button text="Button" loading />
          </View>
        </View>
        <Title>Variations</Title>
        <View>
          <Subtitle>Size</Subtitle>
          <View
            style={buttonPanelStyle}
          >
            <Button style={buttonMarginStyle} size="mini" text="MINI" />
            <Button style={buttonMarginStyle} size="small" text="SMALL" />
            <Button style={buttonMarginStyle} size="medium" text="MEDIUM" />
            <Button style={buttonMarginStyle} size="large" text="LARGE" />
            <Button style={buttonMarginStyle} size="big" text="BIG" />
          </View>
          <Subtitle>Fluid</Subtitle>
          <View
            style={buttonPanelStyle}
          >
            <Button text="Button" fluid />
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

export default DemoButton;
