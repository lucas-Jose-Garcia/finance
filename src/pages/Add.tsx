import { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { TextInput, useTheme } from 'react-native-paper';

export function Add() {
    const theme = useTheme();
    const [description, setDescription] = useState('')
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      inputFormat: {
        fontSize: theme.fonts.bodyLarge.fontSize,
        backgroundColor: theme.colors.background,
      }
    })

    console.log(theme.fonts.bodyLarge)
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Descrição'
          left={<TextInput.Icon icon='playlist-edit' />}
          mode='flat'
          value={description}
          style={styles.inputFormat}
          onChangeText={text => setDescription(text)}
        />
        <TextInput 
          placeholder='R$ 0,00'
          left={<TextInput.Icon icon='currency-brl' />}
          mode='flat'
          value={description}
          style={styles.inputFormat}
          onChangeText={text => setDescription(text)}
        />
      </View>
    );
  }

