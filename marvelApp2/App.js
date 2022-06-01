import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from  '@react-navigation/native-stack'
import Home from './components/Home'
import Detail from "./components/Details"

export default function App() {
  const Stack=createNativeStackNavigator();
  return( 
<NavigationContainer >
  <Stack.Navigator > 
    <Stack.Screen style={styles.container}  name="Home" component={Home}/>
    <Stack.Screen name="Detail" component={Detail}/>
  </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"blue",
    fontSize:20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
