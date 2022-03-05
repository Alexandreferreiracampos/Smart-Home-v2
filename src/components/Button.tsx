import {View, Text, StyleSheet, TouchableOpacity , TouchableOpacityProps, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import {SvgFromUri} from 'react-native-svg';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    ico:string;
    active:boolean
   
}

export default function Button( {title, ico, active, ...rest}: ButtonProps){
    return(
        <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.7} >

            {<Image source={require('../../assets/fan.png')} style={{width:55, height:55}}></Image>, active && <Image source={require('../../assets/fan.png')} style={{width:55, height:55}}></Image>}
            <Text style={styles.text}>
           
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{

        width:150,
        height:150,
        backgroundColor: '#868686',
        margin:10,
        padding:20,
        justifyContent:'space-between',
        alignItems:'center',

        borderRadius: 15,
        
    },
    text: {
        fontSize:21,
        color:'white',
        fontWeight:'bold'
    },
})