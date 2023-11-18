import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import ThreadsMainPage from "./src/pages/ThreadsMainPage";
import {SafeAreaContext} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginPage}/>
                <Stack.Screen name="ThreadsMainPage" component={ThreadsMainPage}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }});