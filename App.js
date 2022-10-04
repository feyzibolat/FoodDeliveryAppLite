import { StatusBar } from 'expo-status-bar';
{/* <StatusBar style="auto" /> */ }
import React from 'react';
import { LogBox } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
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
  );
}