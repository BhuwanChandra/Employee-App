import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Contants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import CreateEmployee from "./screens/CreateEmployee";

const Stack = createStackNavigator();

export default function App() {
  const headerOptions = {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#006aff"
    }
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
          options={headerOptions}
          />
          <Stack.Screen
            name="Create"
            component={CreateEmployee}
            options={{...headerOptions, title: "Create Employee"}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={headerOptions}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0"
    // marginTop: Contants.statusBarHeight
  }
});
