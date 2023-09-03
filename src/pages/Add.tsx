import { useState } from 'react'
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, useTheme } from 'react-native-paper';

export function Add() {
    const theme = useTheme();
    const [description, setDescription] = useState('')
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingStart: 24,
        paddingEnd: 24,
        backgroundColor: theme.colors.background
      }
    })

    return (
      <SafeAreaView style={styles.container}>
        <TextInput 
          label="Descrição"
          mode='flat'
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </SafeAreaView>
    );
  }

