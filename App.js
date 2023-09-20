import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';


export default function App() {
  
  const [fontsLoaded] = useFonts ({
    Dancing: require('./assets/Fonts/DancingScript-Regular.ttf'),
    AudioWide: require('./assets/Fonts/Audiowide-Regular.ttf')
  })

  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer style={styles.container}>
      <RootNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.white,
  },
})
