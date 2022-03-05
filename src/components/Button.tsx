import {View, Text, StyleSheet, TouchableOpacity , TouchableOpacityProps, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import {SvgFromUri} from 'react-native-svg';



interface ButtonProps extends TouchableOpacityProps {
    title: string;
    ico:object;
}

export default function Button( {title, ico, ...rest}: ButtonProps){
    return(
        <TouchableOpacity {...rest} style={styles.container}>
            <Image source={ico} style={{width:85, height:85}}/>
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
        backgroundColor: '#f3f3f3',
        margin:10,
        padding:20,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 1,
        
    },
    text: {
        fontSize:21,
        color:'#868686',
        fontWeight:'bold'
    },
})