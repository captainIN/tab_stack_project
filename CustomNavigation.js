import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import Screen1 from './screens/Screen1'
import NestedScreen from './screens/NestedScreen'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'

const Stack = createStackNavigator()

const FirstScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Screen1"
                component={Screen1}
            />
            <Stack.Screen
                name="NestedScreen"
                component={NestedScreen}
            />
        </Stack.Navigator>
    )
}
export {FirstScreenNavigator}

const SecondScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Screen2"
                component={Screen2}
            />
            <Stack.Screen
                name="NestedScreen"
                component={NestedScreen}
            />
        </Stack.Navigator>
    )
}
export {SecondScreenNavigator}

const ThirdScreenNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Screen3"
                component={Screen3}
            />
            <Stack.Screen
                name="NestedScreen"
                component={NestedScreen}
            />
        </Stack.Navigator>
    )
}
export {ThirdScreenNavigator}