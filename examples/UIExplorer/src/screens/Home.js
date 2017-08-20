import React, { Component } from 'react';
import { TouchableOpacity, SectionList } from 'react-native';
import {
  Screen,
  View,
  Text,
  Title,
  Subtitle,
  Divider,
} from '@blankapp/ui';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'UIExplorer',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);

    const sectionsSource = [
      {
        title: 'Components',
        data: [
          {
            title: 'ActivityIndicator',
            description: 'Indicate that something is ongoing',
            routeName: 'ActivityIndicatorExample',
          },
          {
            title: 'Badge',
            description: 'Small count controls',
            routeName: 'BadgeExample',
          },
          {
            title: 'Button',
            description: 'Flat and outline buttons',
            routeName: 'ButtonExample',
          },
          {
            title: 'Card',
            description: 'Various card layout styles',
            routeName: 'CardExample',
          },
          {
            title: 'CheckBox',
            description: 'Multi-selection controls',
            routeName: 'CheckBoxExample',
          },
          {
            title: 'Divider',
            description: 'Used to separate distinct content sections',
            routeName: 'DividerExample',
          },
          {
            title: 'HyperlinkButton',
            description: 'Like hyperlink buttons',
            routeName: 'HyperlinkButtonExample',
          },
          {
            title: 'RadioButton',
            description: 'Single selection controls',
            routeName: 'RadioButtonExample',
          },
          {
            title: 'Subtitle',
            description: 'Subtitle text display controls',
            routeName: 'SubtitleExample',
          },
          {
            title: 'Switch',
            description: 'On off switches',
            routeName: 'SwitchExample',
          },
          {
            title: 'Text',
            description: 'Single and multi-line text display controls',
            routeName: 'TextExample',
          },
          {
            title: 'TextInput',
            description: 'Single and multi-line text edit controls',
            routeName: 'TextInputExample',
          },
          {
            title: 'Title',
            description: 'Title text display controls',
            routeName: 'TitleExample',
          },
          {
            title: 'View',
            description: 'A special view that can contain other views',
            routeName: 'ViewExample',
          },
        ],
      },
      {
        title: 'Simple screens',
        data: [
          {
            title: 'Register',
            description: 'Come soon',
            routeName: 'simple1',
          },
          {
            title: 'Login',
            description: 'Come soon',
            routeName: 'simple2',
          },
        ],
      },
    ];

    this.state = {
      sectionsSource,
    };
  }

  pressItem(item) {
    this.navigation.navigate(item.routeName);
  }

  renderSectionHeader({ section }) {
    return (
      <View
        style={{
          paddingTop: 5,
          paddingRight: 15,
          paddingBottom: 0,
          paddingLeft: 15,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >{section.title}</Text>
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this.pressItem(item)}
      >
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Title>{item.title}</Title>
          <Subtitle>{item.description}</Subtitle>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen>
        <SectionList
          ItemSeparatorComponent={() => <Divider />}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          sections={this.state.sectionsSource}
          keyExtractor={item => item.routeName}
          initialNumToRender={20}
        />
      </Screen>
    );
  }
}

export default HomeScreen;
