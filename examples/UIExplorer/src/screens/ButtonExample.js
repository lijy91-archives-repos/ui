import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
  Screen,
  View,
  Button,
  Title,
  Subtitle,
} from '@blankapp/ui';
import SimplePageHead from '../components/SimplePageHead';
import SimplePageBody from '../components/SimplePageBody';

class ButtonExample extends Component {
  static navigationOptions = {
    title: 'Button',
  };

  render() {
    return (
      <Screen>
        <ScrollView>
          <SimplePageHead>
            <Button text={'Button'} />
          </SimplePageHead>
          <SimplePageBody>
            <Title>Types</Title>
            <View>
              <Subtitle>Flat</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button styleName={'flat-primary'} text={'Button'} />
                <Button styleName={'flat-accent'} text={'Button'} />
              </View>
              <Subtitle>Outline</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button styleName={'outline-primary'} text={'Button'} />
                <Button styleName={'outline-accent'} text={'Button'} />
              </View>
            </View>
            <Title>States</Title>
            <View>
              <Subtitle>Disabled</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button text={'Button'} disabled />
              </View>
              <Subtitle>Loading</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button text={'Button'} loading />
              </View>
            </View>
            <Title>Variations</Title>
            <View>
              <Subtitle>Size</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button size={'mini'} text={'MINI'} />
                <Button size={'small'} text={'SMALL'} />
                <Button size={'medium'} text={'MEDIUM'} />
                <Button size={'large'} text={'LARGE'} />
                <Button size={'big'} text={'BIG'} />
              </View>
              <Subtitle>Rounded</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button text={'Button'} rounded={false} />
              </View>
              <Subtitle>Circular</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button text={'OK'} circular />
              </View>
              <Subtitle>Fluid</Subtitle>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <Button text={'Button'} fluid />
              </View>
            </View>
          </SimplePageBody>
        </ScrollView>
      </Screen>
    );
  }
}

export default ButtonExample;
