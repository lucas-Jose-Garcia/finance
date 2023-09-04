import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Drawer, useTheme } from "react-native-paper";

export function DrawerMenu({navigation, ...props}: DrawerContentComponentProps) {
    const [active, setActive] = useState('');
    const theme = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background
        }
    })

    return (
        <DrawerContentScrollView style={styles.container}>
            <Drawer.Section title="Exemplo" >
                <Drawer.Item
                    label="Home"
                    icon='home'
                    active={active === 'first'}
                    onPress={() => navigation.navigate('StackHome')}
                />
                <Drawer.Item
                    label="Categorias"
                    icon='tag'
                    active={active === 'secund'}
                    onPress={() => navigation.navigate('StackCategorias')}
                />
            </Drawer.Section> 
        </DrawerContentScrollView>
    )
}