import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../pages/Home";
import { Add } from '../pages/Add';

type StackNavigation = {
    Home: undefined
    Add: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation> 

const Stack = createNativeStackNavigator()

export function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={Add} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}