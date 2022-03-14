import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Header from '../components/Header';

import * as Animatable from 'react-native-animatable';

export default function PartyArea(){

    const [statusReguest, setReguest] = useState('#39d76c');

    return(
        <View style={styles.container}>
            <Header title='Edícula' status={statusReguest} />
        
            <View style={styles.subHeader}>
            <Image source={require('../assets/partyArea.jpg')} style={styles.image}></Image>
            </View>
        </View>
       
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
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