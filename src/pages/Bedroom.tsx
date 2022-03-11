import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { Entypo } from '@expo/vector-icons';
import fan from '../../assets/fan.png';
import lamp from '../../assets/lamp.png';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

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

    const [validateData, setValidateData] = useState(true);
    const [devices, setDevices] = useState({fan:'',Bedroom:'',livingRoom:''});

    if(validateData == true){
    async function loadStorgeUserName(){

        const dataDevices = await AsyncStorage.getItem('@Device:quarton')
        const objeto = JSON.parse(dataDevices || '');
        setDevices(objeto)
        
        setValidateData(false)
        }
    loadStorgeUserName()

    }

    const [size, setSize] = useState(0);
    const [statusSize, setStatusSize] = useState(0);
    const [statusReguest, setReguest] = useState('#39d76c');

    const command = (valor: any) => {

        let url = 'http://'+valor
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.status == 200 && req.readyState == 4) {
                setReguest('#39d76c')
            } else {
                setReguest('red')
            }
        }

        req.open('GET', url)
        req.send()

        switch (valor) {
            case devices.Bedroom+'/fade':
                setSize(0)
                break;

        }
    }
    const dimerValor = () => {
        
        if(size == 0 && dimer0 == true ){
            dimer0 = false
            dimer10 = false
            dimer0 = false
            command(devices.Bedroom+'/0')
          }
          if(size == 1 && dimer10 == false ){
            dimer0 = true
            dimer10 = true
            dimer20 = false 
            command(devices.Bedroom+'/1')
          }
          if(size == 2 && dimer20 == false ){
            dimer10 = false
            dimer20 = true
            dimer30 = false
            command(devices.Bedroom+'/2')
          }
          if(size == 3 && dimer30 == false ){
            dimer20 = false
            dimer30 = true
            dimer40 = false
            command(devices.Bedroom+'/3')
          }
          if(size == 4 && dimer40 == false ){
            dimer30 = false
            dimer40 = true
            dimer50 = false
            command(devices.Bedroom+'/4')
          }
          if(size == 5 && dimer50 == false ){
            dimer40 = false
            dimer50 = true
            dimer60 = false
            command(devices.Bedroom+'/5')
          }
          if(size == 6 && dimer60 == false ){
            dimer50 = false
            dimer60 = true
            dimer70 = false
            command(devices.Bedroom+'/6')
          }
          if(size == 7 && dimer70 == false ){
            dimer60 = false
            dimer70 = true
            dimer80 = false
            command(devices.Bedroom+'/7')
          }
          if(size == 8 && dimer80 == false ){
            dimer70 = false
            dimer80 = true
            dimer90 = false
            command(devices.Bedroom+'/8')
          }
          if(size == 9 && dimer90 == false ){
            dimer80 = false
            dimer90 = true
            dimer100 = false
            command(devices.Bedroom+'/9')
          }
          if(size == 10 && dimer100 == false ){
            dimer90 = false
            dimer100 = true
            dimer0 = true
            command(devices.Bedroom+'/10')
          }
        

    }


    return (
        <Animatable.View style={styles.container}>
            <Header title={'Quarto'} status={statusReguest} />
            <View style={styles.subHeader}>
                
                <Image source={require('../../assets/Bedroom.jpg')} style={styles.image}></Image>

            </View>
            <View style={styles.containerButton}>
                <View style={styles.titleDevices}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#868686' }}>Devices</Text>
                </View>
                <Animatable.View animation="slideInUp" style={{ flexDirection: 'row'}}>
                    <Button title='Lampada' ico={lamp} width={110} height={110} onPress={() => command(devices.Bedroom+"/rele4")} />
                    <Button title='Ventilador' ico={fan} width={110} height={110} onPress={() => command(devices.fan+"/ventilador")} />
                </Animatable.View>
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
                    <TouchableOpacity style={{ width: 50, left: -5 }} onPress={() => command(devices.Bedroom+'/fade')}><Entypo name="light-down" size={35} color='#868686' /></TouchableOpacity>

                </View>


            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
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
        top: '-5%',
        left: '-31%',
    },
    containerButton: {
        top: '-5%',
        position: "relative",
        width: '100%',
        paddingTop: '3%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(243,243,243)'

    },
    buttomDimer: {
        top: '4%',
        width: "84%",
        height: '14%',
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: '7%',
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