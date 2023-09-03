import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, useTheme } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/stack";



export function Home() {
  const navigation = useNavigation<StackTypes>()
  const theme = useTheme();
  
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
  //#endregion

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <FAB 
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('Lançamentos')}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

