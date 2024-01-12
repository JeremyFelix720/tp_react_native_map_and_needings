import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/pages/Home';
import Settings from './src/components/pages/Settings';

let Tab = undefined;

export default function App() {

  if (Platform.OS === "android") {
    // NAVIGATOR (ROUTING) FOR ANDROIDS
    Tab = createMaterialBottomTabNavigator();
  } else if (Platform.OS === "ios") {
    // NAVIGATOR (ROUTING) FOR IOS
    Tab = createBottomTabNavigator();
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
