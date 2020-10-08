/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator} from './CustomNavigation'

const Tab = createBottomTabNavigator()

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle:{fontSize:18},
            activeTintColor: 'red'
          }}
        >
          <Tab.Screen
            name="Screen1"
            component={FirstScreenNavigator}
          />
          <Tab.Screen
            name="Screen2"
            component={SecondScreenNavigator}
          />
          <Tab.Screen
            name="Screen3"
            component={ThirdScreenNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
