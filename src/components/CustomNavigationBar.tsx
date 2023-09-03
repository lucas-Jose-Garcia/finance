import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useState } from 'react';

export function CustomNavigationBar({ navigation, route, options, back }: NativeStackHeaderProps) {
    const title = getHeaderTitle(options, route.name)
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Appbar.Action icon="magnify" onPress={() => {console.log("Click no botão")}} />
      ) : null}
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
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
      ) : null}
    </Appbar.Header>
  );
}