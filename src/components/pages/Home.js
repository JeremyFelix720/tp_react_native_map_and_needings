import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function Home() {

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

  })

  return (

    <View style={styles.container}>

        <Text style={styles.h1}>Home</Text>

    </View>

  );
}