import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';



import * as Animatable from 'react-native-animatable';
import { useState } from 'react';
import ScreenModalButton from './Screen-Modal-Button';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    status: string;
    statusModal:()=>void;
}


export default function Header({ title, status,statusModal, ...rest }: ButtonProps) {


    const navigation = useNavigation();
 
    const navigatioScreen = (valor: any) => {
        navigation.navigate(valor)
    }

    return (
        <View style={styles.header}>
            
            <TouchableOpacity style={{ width: 45, height: 35}}  >
                <Animatable.Text animation="slideInLeft" onPress={() => navigatioScreen('Home')}><AntDesign name="back" size={35} color="#868686"/></Animatable.Text>
            </TouchableOpacity>

            <Animatable.Text animation="slideInLeft"  style={styles.title}>{title}</Animatable.Text>
            <TouchableOpacity style={{ width: 30, height: 25}} onPress={()=>statusModal()}>
                <Animatable.Text  animation="slideInRight" delay={500} style={{ width: 40, height: 30}}><FontAwesome5 name="wifi" size={24} color={status} /></Animatable.Text>
            </TouchableOpacity>
           

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: '15%',
        paddingTop: 45,
        padding: 20,
        backgroundColor: 'rgb(243,243,243)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        left: -80,
        color: '#868686'

    },
   
})