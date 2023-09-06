import { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { Divider, IconButton, Switch, Text, TextInput, useTheme } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { CustomSwitch } from '../components/CustomSwitch';

export function Add() {
    const theme = useTheme();
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [inputDate, setInputDate] = useState<Date | undefined>(new Date())
    const [isEffected, setIsEffected] = useState(false)

    const onToggleSwitch = () => setIsEffected(!isEffected);
    
    const configSwitch = {
      on: {
        label: 'Efetivado',
        icon: 'checkbox-marked-circle-outline'
      },
      off: {
        label: 'Pendente',
        icon: 'clock-time-four-outline'
      }
    }

    //#region Styles
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      inputFormat: {
        fontSize: theme.fonts.bodyLarge.fontSize,
        backgroundColor: theme.colors.background,
      },
      dateFormat: {
        position: 'relative',
        
      }
    })
    //#endregion

    return (
      <View style={styles.container}>
        <View>
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
            value={value}
            style={styles.inputFormat}
            onChangeText={text => setValue(text)}
          />
          <DatePickerInput 
            locale="pt"
            value={inputDate}
            onChange={(d) => setInputDate(d)}
            inputMode="start"
            withDateFormatInLabel={false}
            style={[styles.inputFormat, styles.dateFormat]}
          />
          <CustomSwitch
            isSwitchOn={isEffected}
            options={configSwitch}
            onToggleSwitch={onToggleSwitch}
          />
        </View>
      </View>
    );
  }

