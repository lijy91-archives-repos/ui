import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Screen,
  View,
  Text,
  Title,
  Subtitle,
  Divider,
  SectionList,
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
            description: 'Come soon',
            routeName: 'ActivityIndicatorExample',
          },
          {
            title: 'Badge',
            description: 'Come soon',
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
            description: 'Come soon',
            routeName: 'DividerExample',
          },
          {
            title: 'FlatList',
            description: 'Come soon',
            routeName: 'FlatListExample',
          },
          {
            title: 'HyperlinkButton',
            description: 'Come soon',
            routeName: 'HyperlinkButtonExample',
          },
          {
            title: 'RadioButton',
            description: 'Come soon',
            routeName: 'RadioButtonExample',
          },
          {
            title: 'SectionList',
            description: 'Come soon',
            routeName: 'SectionListExample',
          },
          {
            title: 'Subtitle',
            description: 'Single selection controls',
            routeName: 'SubtitleExample',
          },
          {
            title: 'Switch',
            description: 'On off switches',
            routeName: 'SwitchExample',
          },
          {
            title: 'Text',
            description: 'Come soon',
            routeName: 'TextExample',
          },
          {
            title: 'TextInput',
            description: 'Single and multiline text inputs',
            routeName: 'TextInputExample',
          },
          {
            title: 'Title',
            description: 'Come soon',
            routeName: 'TitleExample',
          },
          {
            title: 'View',
            description: 'Come soon',
            routeName: 'ViewExample',
          },
        ],
      },
      {
        title: 'Simple Pages',
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
          paddingLeft: 5,
        }}
      >
        <Text>{section.title}</Text>
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
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
