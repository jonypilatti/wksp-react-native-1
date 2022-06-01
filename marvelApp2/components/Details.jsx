import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from "./Information"
import Comics from "./Comics"


const Details = () => {
    const Tab= createBottomTabNavigator()
  return (
   <Tab.Navigator initialRouteName="Information" screenOptions={{activeTintColor:'darkred'}}>
       <Tab.Screen name="Information" component={Information} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="information-circle" color={color} size={size}/>)}}/>
       <Tab.Screen
       name="Comics"
       component={Comics}
       options={{
           tabBarIcon:({
               color,size
           })=>(
               <MaterialCommunityIcons name="book" color={color} size={size}/>
           )
       }}/>

   </Tab.Navigator>
  )
}

export default Details