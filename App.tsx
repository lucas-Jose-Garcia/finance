import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { StackNavigation } from './src/routes/stack';
import { useColorScheme } from 'react-native';


export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme = 
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: theme.dark}
      : {...MD3LightTheme, colors: theme.light}

  return (
    <PaperProvider theme={paperTheme}>
      <StackNavigation />
    </PaperProvider>
  );
}
