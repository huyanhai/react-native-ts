import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import List from './List';

const ListStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="List"
        component={List}
        options={{headerShown: true, title: '列表'}}
      />
    </ListStack.Navigator>
  );
};

export default Stack;
