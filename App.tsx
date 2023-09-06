import { MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { DrawerNavigation } from './src/routes/drawer';
import { pt, registerTranslation } from 'react-native-paper-dates'
import { darkThemeColors, lightThemeColors } from './src/assets/colors';


export default function App() {
  const colorScheme = useColorScheme();

  registerTranslation('pt', pt)

  const paperTheme = 
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: darkThemeColors}
      : {...MD3LightTheme, colors: lightThemeColors}

  return (
    <PaperProvider theme={paperTheme}>
      <DrawerNavigation />
    </PaperProvider>
  );
}
