import { Appbar, Menu, useTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';

interface CustomNavigationBarProps {
  HeaderProps: NativeStackHeaderProps
  IsHome: boolean
}

export function CustomNavigationBar({ HeaderProps, IsHome}: CustomNavigationBarProps) {
    const { navigation, route, options, back } = HeaderProps
    const title = getHeaderTitle(options, route.name);
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header
      style={{backgroundColor: theme.colors.primaryContainer}}
    >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      {!back ? (
        <Appbar.Action 
        icon="menu" 
        color={theme.colors.onPrimaryContainer}
        onPress={() => {(navigation as any).openDrawer()}} 
      />
      ) : null}
      <Appbar.Content title={title} titleStyle={{color: theme.colors.onPrimaryContainer}}/>
      {!back && IsHome ? (
        <View style={{flexDirection: 'row'}}>
          <Appbar.Action 
          icon="magnify" 
          color={theme.colors.onPrimaryContainer}
          onPress={() => {console.log("Click no botão")}} 
        />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
              color={theme.colors.onPrimaryContainer}
            />
          }>
          <Menu.Item
            onPress={() => {
              console.log('Option 1 was pressed');
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 2 was pressed');
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
            }}
            title="Option 3"
            disabled
          />
        </Menu>
        </View>
      ) : null}
    </Appbar.Header>
  );
}