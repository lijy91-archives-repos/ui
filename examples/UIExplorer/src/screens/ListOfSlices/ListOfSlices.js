import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Screen, Title, Subtitle, View, Divider } from '@blankapp/ui';
import { sliceRouteConfigMap } from '../../navigators/routeConfigMap';

class ListOfSlices extends Component {
  static navigationOptions = {
    title: 'List Of Slices',
  };

  render() {
    const keys = Object.keys(sliceRouteConfigMap);
    const listOfSlicesView = keys.map((key) => {
      const route = sliceRouteConfigMap[key];
      return [(
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(key);
          }}
        >
          <View
            key={key}
            style={{
              paddingTop: 15,
              paddingRight: 15,
              paddingBottom: 15,
              paddingLeft: 15,
            }}
          >
            <Title>{key}</Title>
            <Subtitle>{route.path}</Subtitle>
          </View>
        </TouchableOpacity>
      ), <Divider />];
    });

    return (
      <Screen>
        <ScrollView>
          {listOfSlicesView}
        </ScrollView>
      </Screen>
    );
  }
}

export default ListOfSlices;
