import { Platform, StyleSheet, Text, View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/pages/Home';
import Map from './components/pages/Map';
import ActualPosition from './components/pages/LocalPosition';
import DeviceSize from './components/pages/DeviceSize';

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
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="ActualPosition" component={ActualPosition} />
        <Tab.Screen name="DeviceSize" component={DeviceSize} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 10,
  },

  h1: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 15,
  },

  h2: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },

  paragraph: {
    fontSize: 16,
    marginBottom: 15,
  }

})