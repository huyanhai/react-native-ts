import React, {Text, SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';

import {store, persistor} from './store';
import i18n from './locales';

import Home from './views/Home/Home';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView>
            <Text style={style.font}>app</Text>
            <Home />
          </SafeAreaView>
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
