import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import fan from '../../assets/fan.png';
import lamp from '../../assets/lamp.png';
import Slider from '@react-native-community/slider';

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
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#868686' }}>Devices</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Button title='Lampada' ico={lamp} />
                    <Button title='Ventilador' ico={fan} />
                </View>
                <View style={styles.buttomDimer}>
                    <View style={{ width: "90%" }}>
                        <Slider
                            minimumValue={0}
                            maximumValue={10}
                            minimumTrackTintColor='#868686'
                            maximumTrackTintColor='#cdcdcd'
                            thumbTintColor='#868686'

                            value={10}
                        />
                    </View>
                    <TouchableOpacity style={{ width:50, left:-5}}><Entypo name="light-down" size={35} color='#868686' /></TouchableOpacity>

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
        backgroundColor: '#fff',
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
    titleDevices: {
        top: -20,
        left: -120,
    },
    containerButton: {
        top: -38,
        position: "relative",
        width: '100%',
        paddingTop: 60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FDFDFD"

    },
    buttomDimer: {
        top: 20,
        width: "78%",
        height: 50,
        borderRadius: 10,
        backgroundColor: '#f3f3f3',
        marginTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 1,

    },
})