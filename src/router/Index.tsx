import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from '../store';

import type {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

import routers from './route';

const CreateRoute = () => {
  const {token} = store.getState().global;

  return (
    <Stack.Navigator initialRouteName={token ? 'Home' : 'Login'}>
      {routers.map(item => (
        <Stack.Screen
          component={item.components as any}
          name={item.name as keyof RootStackParamList}
          key={item.name}
          options={item.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CreateRoute;
