import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../pages/Home";
import { Add } from '../pages/Add';
import { CustomNavigationBar } from '../components/CustomNavigationBar';
import { Category } from '../pages/Category';

type StackNavigation = {
    Home: undefined
    Lançamentos: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation> 

const Stack = createNativeStackNavigator()

export function StackNavigation() {
    return (
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    header: (props) => <CustomNavigationBar HeaderProps={props} IsHome={true}/>
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Lançamentos" component={Add} />
            </Stack.Navigator>
    )
}

export function StackCategory() {
    return (
        <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            header: (props) => <CustomNavigationBar HeaderProps={props} IsHome={false}/>
        }}
    >
        <Stack.Screen name="Categorias" component={Category} />
    </Stack.Navigator>
    )
}