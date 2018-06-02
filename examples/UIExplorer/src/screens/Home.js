import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Divider,
  Screen,
  SectionList,
  Subtitle,
  Text,
  Title,
  View,
} from '@blankapp/ui';

class Home extends Component {
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
        title: 'Basic components',
        data: [
          {
            title: 'ActivityIndicator',
            description: 'Indicate that something is ongoing',
            routeName: 'DemoActivityIndicator',
          },
          {
            title: 'Badge',
            description: 'Small count controls',
            routeName: 'DemoBadge',
          },
          {
            title: 'Button',
            description: 'Flat and outline buttons',
            routeName: 'DemoButton',
          },
          {
            title: 'Card',
            description: 'Various card layout styles',
            routeName: 'DemoCard',
          },
          {
            title: 'CheckBox',
            description: 'Multi-selection controls',
            routeName: 'DemoCheckBox',
          },
          {
            title: 'Divider',
            description: 'Used to separate distinct content sections',
            routeName: 'DemoDivider',
          },
          {
            title: 'HyperlinkButton',
            description: 'Like hyperlink buttons',
            routeName: 'DemoHyperlinkButton',
          },
          {
            title: 'Modal',
            description: 'Coming soon',
            routeName: 'DemoModal',
          },
          {
            title: 'RadioButton',
            description: 'Single selection controls',
            routeName: 'DemoRadioButton',
          },
          {
            title: 'Subtitle',
            description: 'Subtitle text display controls',
            routeName: 'DemoSubtitle',
          },
          {
            title: 'Switch',
            description: 'On off switches',
            routeName: 'DemoSwitch',
          },
          {
            title: 'Text',
            description: 'Single and multi-line text display controls',
            routeName: 'DemoText',
          },
          {
            title: 'TextInput',
            description: 'Single and multi-line text edit controls',
            routeName: 'DemoTextInput',
          },
          {
            title: 'Title',
            description: 'Title text display controls',
            routeName: 'DemoTitle',
          },
          {
            title: 'View',
            description: 'A special view that can contain other views',
            routeName: 'DemoView',
          },
        ],
      },
      {
        title: 'Advanced components',
        data: [
          {
            title: 'AppBar',
            description: 'Coming soon',
            routeName: 'DemoAppBar',
          },
          {
            title: 'Icon',
            description: 'Coming soon',
            routeName: 'DemoIcon',
          },
          {
            title: 'IconButton',
            description: 'Coming soon',
            routeName: 'DemoIconButton',
          },
          {
            title: 'TabBar',
            description: 'Coming soon',
            routeName: 'DemoTabBar',
          },
          {
            title: 'ViewPager',
            description: 'Coming soon',
            routeName: 'DemoViewPager',
          },
        ],
      },
      {
        title: 'Experimental components',
        data: [
          {
            title: 'ListItem',
            description: 'Coming soon',
            routeName: 'DemoListItem',
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
        >{section.title}
        </Text>
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
            minHeight: 64,
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
          renderItem={this.renderItem}
          sections={this.state.sectionsSource}
          ItemSeparatorComponent={() => <Divider />}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={item => `${item.routeName}`}
        />
      </Screen>
    );
  }
}

export default Home;
