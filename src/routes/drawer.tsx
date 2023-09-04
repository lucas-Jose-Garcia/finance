import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackCategory, StackNavigation } from './stack';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from '../components/DrawerMenu';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {

    return (
    <NavigationContainer>
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <DrawerMenu {...props}/>}
        >
            <Drawer.Screen name='StackHome' component={StackNavigation} />
            <Drawer.Screen name='StackCategorias' component={StackCategory} />
        </Drawer.Navigator>        
    </NavigationContainer>
    )
}