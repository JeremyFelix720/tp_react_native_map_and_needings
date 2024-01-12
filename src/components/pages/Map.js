import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function Map() {

  return (

    <SafeAreaView>

      <MapView style={styles.map} />

    </SafeAreaView>

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
  },

  map: {
    width: '100%',
    height: '100%',
  }

})