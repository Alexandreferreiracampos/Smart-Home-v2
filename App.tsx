import { StyleSheet} from 'react-native';

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
