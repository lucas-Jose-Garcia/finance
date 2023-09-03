import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../pages/Home";
import { Add } from '../pages/Add';
import { CustomNavigationBar } from '../components/CustomNavigationBar';

type StackNavigation = {
    Home: undefined
    Add: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation> 

const Stack = createNativeStackNavigator()

export function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    header: (props) => <CustomNavigationBar {...props}/>
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={Add} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}