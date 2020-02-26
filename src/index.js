import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import Routes from './routes';
import store from './store';

import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}
