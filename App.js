import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, BackHandler, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Scanner from './src/Scanner';
import ScannerDetails from './src/ScannerDetails';
import {check, request, PERMISSIONS, openSettings, RESULTS} from 'react-native-permissions';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scanner" component={Scanner} options={{headerShown: false}} />
        <Stack.Screen name="ScannerDetails" component={ScannerDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;