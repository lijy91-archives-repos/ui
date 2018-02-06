import React from 'react';
import { Image } from 'react-native';
import { HyperlinkButton } from '@blankapp/ui';
import imageIcMenuBack from '../resources/images/ic_menu_back.png';

const stackConfig = {
  initialRouteName: 'Home',
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: 'rgb(33, 33, 33)',
    },
    headerTitleStyle: {
      color: '#ffffff',
    },
    headerLeft: (
      <HyperlinkButton
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
        onPress={() => {
          setTimeout(() => {
            navigation.goBack();
          }, 10);
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={imageIcMenuBack}
        />
      </HyperlinkButton>
    ),
  }),
};

export default stackConfig;
