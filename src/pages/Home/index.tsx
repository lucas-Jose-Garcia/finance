import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { HomeStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";



export function Home() {
     const navigation = useNavigation<StackTypes>()
    const theme = useTheme();
    return (
      <SafeAreaView style={[HomeStyles.container, {backgroundColor: theme.colors.background}]}>
        <Text>Home</Text>
        <FAB 
            icon="plus"
            style={HomeStyles.fab}
            onPress={() => navigation.navigate('Add')}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

