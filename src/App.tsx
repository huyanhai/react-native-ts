import React from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';

import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from './store';
import i18n from './locales';

import CreateRoute from './router/Index';

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
            <CreateRoute />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
