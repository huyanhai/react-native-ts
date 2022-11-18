import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from '../store';

const Stack = createNativeStackNavigator();

import routers from './route';

const CreateRoute = () => {
  const {token} = store.getState().global;

  return (
    <Stack.Navigator initialRouteName={token ? 'Tab' : 'Login'}>
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

export default CreateRoute;
