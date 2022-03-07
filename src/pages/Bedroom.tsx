import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { Entypo } from '@expo/vector-icons';
import fan from '../../assets/fan.png';
import lamp from '../../assets/lamp.png';
import Slider from '@react-native-community/slider';

var dimer0 = false
var dimer10 = false
var dimer20 = false
var dimer30 = false
var dimer40 = false
var dimer50 = false
var dimer60 = false
var dimer70 = false
var dimer80 = false
var dimer90 = false
var dimer100 = false

export default function Bedroom() {

    const [size, setSize] = useState(0);
    const [statusSize, setStatusSize] = useState(0);
    const [statusReguest, setReguest] = useState('#39d76c');

    const command = (valor: any) => {

        let url = "http://192.168.0."
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.status == 200 && req.readyState == 4) {
                setReguest('#39d76c')
            } else {
                setReguest('red')
            }
        }

        req.open('GET', url + valor)
        req.send()

        switch (valor) {
            case '100/fade':
                setSize(0)
                break;

        }
    }
    const dimerValor = () => {
        
        if(size == 0 && dimer0 == true ){
            dimer0 = false
            dimer10 = false
            dimer0 = false
            command('100/0')
          }
          if(size == 1 && dimer10 == false ){
            dimer0 = true
            dimer10 = true
            dimer20 = false 
            command('100/1')
          }
          if(size == 2 && dimer20 == false ){
            dimer10 = false
            dimer20 = true
            dimer30 = false
            command('100/2')
          }
          if(size == 3 && dimer30 == false ){
            dimer20 = false
            dimer30 = true
            dimer40 = false
            command('100/3')
          }
          if(size == 4 && dimer40 == false ){
            dimer30 = false
            dimer40 = true
            dimer50 = false
            command('100/4')
          }
          if(size == 5 && dimer50 == false ){
            dimer40 = false
            dimer50 = true
            dimer60 = false
            command('100/5')
          }
          if(size == 6 && dimer60 == false ){
            dimer50 = false
            dimer60 = true
            dimer70 = false
            command('100/6')
          }
          if(size == 7 && dimer70 == false ){
            dimer60 = false
            dimer70 = true
            dimer80 = false
            command('100/7')
          }
          if(size == 8 && dimer80 == false ){
            dimer70 = false
            dimer80 = true
            dimer90 = false
            command('100/8')
          }
          if(size == 9 && dimer90 == false ){
            dimer80 = false
            dimer90 = true
            dimer100 = false
            command('100/9')
          }
          if(size == 10 && dimer100 == false ){
            dimer90 = false
            dimer100 = true
            dimer0 = true
            command('100/10')
          }
        

    }


    return (
        <View style={styles.container}>
            <Header title='Quarto' status={statusReguest} />
            <View style={styles.subHeader}>
                <Image source={require('../../assets/Bedroom.jpg')} style={styles.image}></Image>

            </View>
            <View style={styles.containerButton}>
                <View style={styles.titleDevices}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#868686' }}>Devices</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Button title='Lampada' ico={lamp} onPress={() => command('100/rele4')} />
                    <Button title='Ventilador' ico={fan} onPress={() => command('106/ventilador')} />
                </View>
                <View style={styles.buttomDimer}>
                    <View style={{ width: "90%" }}>
                        <Slider
                            minimumValue={0}
                            maximumValue={10}
                            minimumTrackTintColor='#868686'
                            maximumTrackTintColor='#cdcdcd'
                            thumbTintColor='#868686'
                            onSlidingStart={dimerValor()}
                            onValueChange={(valorDimer) => setSize(valorDimer.toFixed(0))}
                            value={size}

                        />

                    </View>
                    <TouchableOpacity style={{ width: 50, left: -5 }} onPress={() => command('100/fade')}><Entypo name="light-down" size={35} color='#868686' /></TouchableOpacity>

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
        backgroundColor: 'rgb(243,243,243)'

    },
    buttomDimer: {
        top: 20,
        width: "78%",
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
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
        elevation: 2,

    },
})