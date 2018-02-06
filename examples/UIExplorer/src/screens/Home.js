import React, { Component } from 'react';
import { TouchableOpacity, ListView } from 'react-native';
import {
  Screen,
  View,
  Text,
  Title,
  Subtitle,
  Divider,
} from '@blankapp/ui';
import _ from 'lodash';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'UIExplorer',
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);

    const sectionsSource = [
      {
        title: 'Components',
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
    ];

    const dataBlob = {};
    _.each(sectionsSource, (section) => {
      const sectionID = section.title;
      dataBlob[sectionID] = section.data;
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob),
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => this.renderItem({ item: rowData })}
          renderSectionHeader={(sectionData, sectionID) => {
            const section = {
              title: sectionID,
            };
            return this.renderSectionHeader({ section });
          }}
          renderSeparator={(sectionID, rowID) => <Divider key={`${sectionID}-${rowID}`} />}
        />
      </Screen>
    );
  }
}

export default HomeScreen;
