import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {store} from '../store';

import HomeStack from './Home/Home';
import ListStack from './List/List';
import MeStack from './Me/Me';

const TabStack = createBottomTabNavigator();

const Tab = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {token} = store.getState().global;

  useEffect(() => {
    if (!token) {
      navigation.navigate('Login', {});
    }
    console.log(route);
  });

  return (
    <TabStack.Navigator initialRouteName="TabHome">
      <TabStack.Screen
        name="TabHome"
        component={HomeStack}
        options={{
          title: '首页',
          headerShown: true,
        }}
      />
      <TabStack.Screen
        name="TabList"
        component={ListStack}
        options={{title: '列表', headerShown: true}}
      />
      <TabStack.Screen
        name="TabMe"
        component={MeStack}
        options={{title: '个人中心', headerShown: true}}
      />
    </TabStack.Navigator>
  );
};

export default Tab;
