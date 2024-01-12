import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import * as Location from 'expo-location';

export default function ActualPosition() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let myLocation = await Location.getCurrentPositionAsync({});
      setLocation(myLocation);
    })();
  }, []);

  let locationText = 'Waiting...';
  if (errorMsg) {
    locationText = errorMsg;
  } else if (location) {
    locationText = JSON.stringify(location); // c'est un objet qui contient les données de localisation de la position actuelle du téléphone (Ex. : location?.coords.altitude permet de récupérer l'altitude)
  }

  return (

    <SafeAreaView style={styles.container}>

        <Text style={styles.h1}>Local position</Text>

        <View style={styles.container}>

          <Text style={styles.paragraph}>{locationText}</Text>

        </View>

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