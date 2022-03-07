import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function LivingRoom() {
    const [statusReguest, setReguest] = useState('#39d76c');
  return (
    <View style={styles.container}>
      <Header title='Sala' status={statusReguest} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '20%',
        alignItems: 'center',

    },
})
