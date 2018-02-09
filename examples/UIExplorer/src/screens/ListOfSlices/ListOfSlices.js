import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Divider,
  FlatList,
  Screen,
  Subtitle,
  Title,
  View,
} from '@blankapp/ui';
import { sliceRouteConfigMap } from '../../navigators/routeConfigMap';

class ListOfSlices extends Component {
  static navigationOptions = {
    title: 'List Of Slices',
  };

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);

    const itemsSource = Object.keys(sliceRouteConfigMap)
      .map((key) => {
        const route = sliceRouteConfigMap[key];
        return {
          routeName: key,
          ...route,
        };
      });

    this.state = {
      itemsSource,
    };
  }

  renderItem({ item }) {
    const { routeName, path: routePath } = item;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(routeName);
        }}
      >
        <View
          key={routeName}
          style={{
            paddingTop: 15,
            paddingRight: 15,
            paddingBottom: 15,
            paddingLeft: 15,
          }}
        >
          <Title>{routeName}</Title>
          <Subtitle>{routePath}</Subtitle>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen>
        <FlatList
          renderItem={this.renderItem}
          data={this.state.itemsSource}
          ItemSeparatorComponent={() => <Divider />}
        />
      </Screen>
    );
  }
}

export default ListOfSlices;
