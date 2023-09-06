import { useState } from 'react'
import { StyleSheet, View } from "react-native";
import { FAB, TextInput, useTheme } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { CustomSwitch } from '../components/CustomSwitch';
import { CustomPicker } from '../components/CustomPicker';

export function Add() {
    const theme = useTheme();
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [inputDate, setInputDate] = useState<Date | undefined>(new Date())
    const [isEffected, setIsEffected] = useState(false)
    const [category, setCategory] = useState('')

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

    const listMock = ['Salário', 'Vale Alimentação']

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
      },
      fab: {
        bottom: 16,
        right: 16,
        position: 'absolute',
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
            keyboardType='numeric'
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
          <CustomPicker 
            listItems={listMock}
            selected={category}
            setSelected={setCategory}
          />
        </View>
        <FAB
              icon="content-save-outline"
              label='Salvar'
              style={styles.fab}
              onPress={() => console.log('Pressed')}
            />
      </View>
    );
  }

