import { PaperProvider } from 'react-native-paper';
import { StackNavigation } from './src/routes/stack';

export default function App() {
  return (
    <PaperProvider>
      <StackNavigation />
    </PaperProvider>
  );
}
