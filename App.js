import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet} from "react-native"
import MainScreen from "./screens/main"
import WebScreen from "./screens/Web"
import Constants from "expo-constants"
import "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator screenOptions ={{headerShown: false}}>
          <Stack.Screen name = "Home" component = {MainScreen} />
          <Stack.Screen name = "Web" component = {WebScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})