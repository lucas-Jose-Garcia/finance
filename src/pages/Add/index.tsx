import { useState } from 'react'
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, useTheme } from 'react-native-paper';
import { HomeStyles } from "./styles";



export function Add() {
    const theme = useTheme();
    const [description, setDescription] = useState('')
    return (
      <SafeAreaView style={[HomeStyles.container, {backgroundColor: theme.colors.background}]}>
        <TextInput 
          label="Descrição"
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </SafeAreaView>
    );
  }

