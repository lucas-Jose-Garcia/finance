import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack";
import { BottomSheetModalProvider, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { CustomSwitch } from "../components/CustomSwitch";




export function Category() {
  const navigation = useNavigation<StackTypes>()
  const theme = useTheme();

  //#region 
  const [newCategory, setNewCategory] = useState('')

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '38%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  //#endregion

    
  //#region Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      }
  });

  const modal = StyleSheet.create({
    contentContainer: {
      flex: 1,
      alignItems: 'flex-end',
      paddingStart: 12,
      paddingEnd: 12,
      //backgroundColor: theme.colors.background
    }, 
    text: {
      width: '100%',
    },
    inputFormat: {
      width: '100%',
      marginTop: 14,
      marginBottom: 8,
      fontSize: theme.fonts.bodyLarge.fontSize,
      backgroundColor: theme.colors.background,
    },
    button: {
      marginTop: 14,
    }
  })
  //#endregion


  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
      
      <Text>Categorias</Text>

      <FAB 
          icon="plus"
          style={styles.fab}
          onPress={handlePresentModalPress}
      />
      <StatusBar style="auto" />

      <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          //onChange={handleSheetChanges}
          backgroundStyle={{backgroundColor: theme.colors.surfaceVariant}}
        >
          <View style={modal.contentContainer}>
            <Text 
              variant="titleLarge"
              style={modal.text}
            >
              Nova Categoria
            </Text>
            <TextInput 
              placeholder='Categoria'
              left={<TextInput.Icon icon='tag' />}
              mode='flat'
              value={newCategory}
              style={modal.inputFormat}
              onChangeText={text => setNewCategory(text)}
            />
            <Button 
              icon='content-save-outline'
              mode="contained" 
              onPress={() => console.log('Pressed')}
              style={modal.button}
            >
              Salvar
            </Button>
          </View>
        </BottomSheetModal>
    </SafeAreaView>
    </BottomSheetModalProvider>
  );
}

