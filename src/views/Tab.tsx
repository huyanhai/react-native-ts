import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './Home/Home';
import ListStack from './List/List';
import MeStack from './Me/Me';

const TabStack = createBottomTabNavigator();

const Tab = () => {
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
