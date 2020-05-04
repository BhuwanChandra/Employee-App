import React, {createContext, useReducer} from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer, InitState } from "./reducers/reducer";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import CreateEmployee from "./screens/CreateEmployee";

// const store = createStore(reducer);

export const MyContext = createContext();

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, InitState)

  const headerOptions = {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#006aff"
    }
  };

  return (
    <MyContext.Provider value={{state, dispatch}}>
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
              options={{ ...headerOptions, title: "Create Employee" }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={headerOptions}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c0c0c0"
    // marginTop: Contants.statusBarHeight
  }
});
