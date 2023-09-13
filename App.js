import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import Products from './src/screens/Products';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Home/>*/}

      <Products category="smartphones"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.white,
  },
})
