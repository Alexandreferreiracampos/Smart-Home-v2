import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Bedroom() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ width: 45, height: 35 }} >
                    <AntDesign name="back" size={35} color="#868686" />
                </TouchableOpacity>

                <Text style={styles.title}>Quarto</Text>
                <TouchableOpacity style={{ width: 30, height: 25 }}>
                    <FontAwesome5 name="wifi" size={24} color="#868686" />
                </TouchableOpacity>
            </View>
            <View style={styles.subHeader}>
                <Image source={require('../../assets/Bedroom.jpg')} style={styles.image}></Image>

            </View>
            <View style={styles.containerButton}>
                <View style={styles.titleDevices}>
                <Text style={{fontSize:20, fontWeight:'bold', color: '#868686'}}>Devices</Text>
                </View>
            <View style={{flexDirection:'row'}}>
            <Button title='Lampada' ico='fan'/>
            <Button title='Ventilador' ico="fan"/>
            </View>    
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '20%',
        alignItems: 'center',

    },
    header: {
        width: "100%",
        height: '15%',
        paddingTop: 45,
        padding: 20,
        backgroundColor: 'white',
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
    titleDevices:{
       top:-20,
       left:-120,
    },
    containerButton:{
        top:-38,
        position:"relative",
        width:'100%',
        paddingTop:60,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
        
    }
})