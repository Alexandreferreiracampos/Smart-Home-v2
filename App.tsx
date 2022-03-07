import { StyleSheet, Text, View } from 'react-native';
import Bedroom from './src/pages/Bedroom';
import LivingRoom from './src/pages/Living-Room';
import Routes from './src/routes';
export default function App() {
  return (
    
      <Routes/>
   
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
