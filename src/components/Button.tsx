import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native'

import * as Animatable from 'react-native-animatable';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    ico: object;
    width:Number;
    height:Number;

}

export default function Button({ title, ico, width, height,  ...rest }: ButtonProps) {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <Image source={ico} style={{ width: width, height: height }} />
            <Text style={styles.text}>

                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '40%',
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,

    },
    text: {
        fontSize: 21,
        color: '#868686',
        fontWeight: 'bold',
        bottom:'-8%'
     
    },
})