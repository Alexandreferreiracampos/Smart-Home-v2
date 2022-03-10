import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import * as Animatable from 'react-native-animatable';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    status: string;
}


export default function Header({ title, status, ...rest }: ButtonProps) {

 
  
  
    

    const navigation = useNavigation();

    const navigationScreen = () => {
        navigation.navigate('Home')
    }
    
    

    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ width: 45, height: 35 }}  >
                <AntDesign name="back" size={35} color="#868686" onPress={() => navigationScreen()} />
            </TouchableOpacity>

            <Animatable.Text animation="slideInLeft"  style={styles.title}>{title}</Animatable.Text>
            <TouchableOpacity style={{ width: 30, height: 25 }}>
                <Animatable.Text  animation="slideInRight" delay={500}><FontAwesome5 name="wifi" size={24} color={status} /></Animatable.Text>
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