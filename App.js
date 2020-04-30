import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Contants from 'expo-constants';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Contants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
