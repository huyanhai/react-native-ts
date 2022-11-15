import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Me from './Me';

const MeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <MeStack.Navigator>
      <MeStack.Screen
        name="Me"
        component={Me}
        options={{headerShown: true, title: '个人中心'}}
      />
    </MeStack.Navigator>
  );
};

export default Stack;
