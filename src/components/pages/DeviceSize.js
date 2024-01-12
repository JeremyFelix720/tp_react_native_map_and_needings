import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function DeviceSize() {
  
  const {height, width, scale, fontScale} = useWindowDimensions();

  let deviceSizeText = JSON.stringify({height, width, scale, fontScale}); // c'est un objet qui contient les données de la dimention du téléphone.

  return (

    <SafeAreaView style={styles.container}>

        <Text style={styles.h1}>Device size</Text>

        <View style={styles.container}>
          
          <Text style={styles.paragraph}>{deviceSizeText}</Text>

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