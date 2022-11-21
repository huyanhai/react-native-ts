import type {RootStackParamList} from '../../router/types';

import React, {FC, useEffect} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {store} from '../../store';

import Icon from '../../components/Icon';

import HomeStack from './Home/Index';
import ListStack from './List/Index';
import MeStack from './Me/Index';

const TabStack = createBottomTabNavigator();

type Props = NativeStackScreenProps<RootStackParamList, 'Tab'>;
type TTabOptionProps = {
  title: string;
  normal: string;
  active: string;
  headerShown?: boolean;
};

const tabIcon = ({
  title,
  normal,
  active,
  headerShown,
}: TTabOptionProps): BottomTabNavigationOptions => {
  const activeColor = '#000';
  const inactiveColor = '#999';
  return {
    title,
    headerShown,
    tabBarActiveTintColor: activeColor,
    tabBarIcon: ({focused}: {focused: boolean}) => (
      <Icon
        name={focused ? active : normal}
        size={24}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const Tab: FC<Props> = ({navigation}) => {
  const {token} = store.getState().global;

  useEffect(() => {
    if (!token) {
      navigation.navigate('Login');
    }
  }, [token, navigation]);

  return (
    <TabStack.Navigator initialRouteName="Home">
      <TabStack.Screen
        name="Home"
        component={HomeStack as any}
        options={tabIcon({
          title: '首页',
          normal: 'icon-shouye',
          active: 'icon-home_a',
          headerShown: false,
        })}
      />
      <TabStack.Screen
        name="List"
        component={ListStack as any}
        options={tabIcon({
          title: '列表',
          normal: 'icon-yingyong',
          active: 'icon-yingyong_a',
        })}
      />
      <TabStack.Screen
        name="Me"
        component={MeStack as any}
        options={tabIcon({
          title: '我的',
          normal: 'icon-wode',
          active: 'icon-my_a',
        })}
      />
    </TabStack.Navigator>
  );
};

export default Tab;
