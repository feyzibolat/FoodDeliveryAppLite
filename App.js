import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LogBox } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './navigation/CustomDrawer';
import SplashScreen from 'react-native-splash-screen';

import {
  OnBoarding,

  SignIn,
  SignUp,
  ForgotPassword,
  Otp,

  FoodDetail,

  Checkout,
  MyCart,
  Success,

  AddCard,
  MyCard,

  DeliveryStatus,
  Map
} from './screens'

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

  // React.useEffect(() => {
  //   SplashScreen.hide();
  // }, [])

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
          initialRouteName={'FoodDetail'}
        >
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />

          <Stack.Screen
            name="Otp"
            component={Otp}
          />

          <Stack.Screen
            name="Home"
            component={CustomDrawer}
          />

          <Stack.Screen
            name="FoodDetail"
            component={FoodDetail}
          />

          <Stack.Screen
            name="Checkout"
            component={Checkout}
          />

          <Stack.Screen
            name="MyCart"
            component={MyCart}
          />

          <Stack.Screen
            name="Success"
            component={Success}
          />

          <Stack.Screen
            name="AddCard"
            component={AddCard}
          />

          <Stack.Screen
            name="MyCard"
            component={MyCard}
          />

          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
          />

          <Stack.Screen
            name="Map"
            component={Map}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}