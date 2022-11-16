import React from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store, persistor} from './store';
import i18n from './locales';

import Tab from './views/Tab';

import Info from './Info';
import News from './News';

import CreateRoute from './router/Index';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log(Tab);

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
            <CreateRoute />
            {/* <Stack.Navigator>
              <Stack.Screen
                name="Tab"
                component={Tab}
                options={{headerShown: false}}
              />
              <Stack.Screen component={Info} name="Info" />
              <Stack.Screen component={News} name="News" />
            </Stack.Navigator> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
