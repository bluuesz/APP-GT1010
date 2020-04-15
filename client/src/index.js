import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/reactotronConfig';

import { store, persistor } from './store';
import App from './App';

const Index = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default Index;
