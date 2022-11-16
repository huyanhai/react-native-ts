import React, {lazy} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import routers from './route';

const createRoute = () => {
  return (
    <Stack.Navigator>
      {routers.map(item => (
        <Stack.Screen
          component={item.components}
          name={`${item.name}`}
          key={item.name}
          options={item.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default createRoute;
