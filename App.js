import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import HomeScreen from './src/screens/Home';
import EventScreen from './src/screens/EventDetails';
import Purchase from './src/screens/Purchase';
import splashscr from './src/screens/splashscr';

const Stack = createNativeStackNavigator(); //initalizing satck for route

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#8142E6" />
      <Stack.Navigator>
        <Stack.Screen
          name="splashscr"
          component={splashscr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EventDetails"
          component={EventScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Purchase"
          component={Purchase}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
