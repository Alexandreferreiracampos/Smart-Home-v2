import { StyleSheet, Text, View } from 'react-native';
import Bedroom from './src/pages/Bedroom';

export default function App() {
  return (
    <View style={styles.container}>
      <Bedroom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(243,243,243)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
