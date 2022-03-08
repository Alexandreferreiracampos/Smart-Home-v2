import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home(){

    
    
    const navigation = useNavigation();

    const navigatioScreen=(valor:any)=>{
        navigation.navigate(valor)
    }
   

    return(
        <View style={styles.container}>
           
            <TouchableOpacity onPress={()=>navigatioScreen('Bedroom')}><Text>Quarto</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigatioScreen('LivingRoom')}><Text>Sala</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }

})