import React from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {store, persistor} from './store';
import i18n from './locales';

import HomeStack from './views/Home/Index';
import ListStack from './views/List/Index';
import MeStack from './views/Me/Index';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={Home}
                options={{title: '首页', headerShown: false}}
              />
              <Stack.Screen
                name="Lists"
                component={Lists}
                options={({route}) => ({
                  title: `列表${route.params?.id}`,
                  headerStyle: {
                    backgroundColor: 'red',
                  },
                })}
              />
            </Stack.Navigator> */}
            <Tab.Navigator initialRouteName="TabHome">
              <Tab.Screen
                name="TabHome"
                component={HomeStack}
                options={{title: '首页', headerShown: false}}
              />
              <Tab.Screen
                name="TabList"
                component={ListStack}
                options={{title: '列表', headerShown: false}}
              />
              <Tab.Screen
                name="TabMe"
                component={MeStack}
                options={{title: '个人中心', headerShown: false}}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
