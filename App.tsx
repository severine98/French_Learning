/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Christmas, GeneralMenu, Home, Vocab, VocabTest} from './src/screens';
import {createStackNavigator} from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={GeneralMenu}
          options={{title: 'Menu lol'}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Vocab" component={Vocab} />
        <Stack.Screen name="Christmas" component={Christmas} />
        <Stack.Screen name="VocabTest" component={VocabTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
