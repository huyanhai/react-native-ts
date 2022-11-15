import React, {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store, persistor} from './store';
import i18n from './locales';

import Home from './views/Home/Home';
import Lists from './views/List/List';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Lists" component={Lists} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
};

const style = StyleSheet.create({
  font: {
    color: 'red',
  },
});

export default App;
