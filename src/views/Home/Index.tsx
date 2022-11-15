import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import HomeInfo from './HomeInfo';

const HomeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="HomeInfo" component={HomeInfo} />
    </HomeStack.Navigator>
  );
};

export default Stack;
