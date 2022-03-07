import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';

export default function LivingRoom() {
    const [statusReguest, setReguest] = useState('#39d76c');
  return (
    <View style={styles.container}>
      <Header title='Sala' status={statusReguest} />
      <View style={styles.subHeader}>
                <Image source={require('../../assets/Living-Room.jpg')} style={styles.image}></Image>

            </View>
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
    subHeader: {
      width: "100%",
      height: '37%',
      backgroundColor: '#cdcdcd',
      borderTopLeftRadius: 80,

  },
  image: {
      width: "100%",
      height: '100%',
      borderTopLeftRadius: 80,
      opacity: 0.5
  },
})
