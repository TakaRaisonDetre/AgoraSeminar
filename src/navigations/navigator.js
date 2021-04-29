import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

const Stack=createStackNavigator();


const MyStack =() =>{
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name ="Home" component={Home}/>
            <Stack.Screen name ="Detail" component={Detail}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack