import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Bedroom(){
    return(
        <View style={style.container}>
            <Text>Smart Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'20%',
        backgroundColor:"red"

    }
})