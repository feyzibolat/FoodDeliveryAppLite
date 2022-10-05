import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LogBox } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './navigation/CustomDrawer';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { CustomFonts } from './constants';

const _loadAssets = async () => {
  await Font.loadAsync(CustomFonts);
};

const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default function App() {
  LogBox.ignoreAllLogs(true);

  const [isReady, setReady] = useState(false);

  if (!isReady) {
    // this is what makes sure the fonts are ready before loading the app
    return (
      <AppLoading
        startAsync={_loadAssets} // this loads the fonts
        onFinish={() => setReady(true)}
        onError={e => console.error(e)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen
            name="Home"
            component={CustomDrawer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}