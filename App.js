import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Contants from 'expo-constants';
import Home from './screens/Home';
import Profile from './screens/Profile';
import CreateEmployee from './screens/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    marginTop: Contants.statusBarHeight
  },
});
