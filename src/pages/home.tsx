import { View, Text, TouchableOpacity, StyleSheet, Image, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenModal from '../components/Screen-Modal';
import { FontAwesome } from '@expo/vector-icons';
import *as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../components/Button';
import BTBedroom from '../../assets/BTBedroom.png';
import BTLivingRoom from '../../assets/BTLiving-Room.png';

import * as LocalAuthentication from 'expo-local-authentication';


export default function Home() {


    const [modalActive, setModalAtive] = useState(false);
    const [validateData, setValidateData] = useState(true);
    const [statusGaragem, setGaragem] = useState('garage-variant');
    const navigation = useNavigation();


    const [devices, setDevices] = useState({ fan: '', Bedroom: '', livingRoom: '' });

    if (validateData == true) {
        async function loadStorgeUserName() {

            const dataDevices = await AsyncStorage.getItem('@Device:quarton')
            const objeto = JSON.parse(dataDevices || '');
            setDevices(objeto)
            setValidateData(false)
        }
        loadStorgeUserName()

    }

    const navigatioScreen = (valor: any) => {
        navigation.navigate(valor)
    }

    const changeStatusModal = () => {

        setModalAtive(false)

    }

    const reloadDataSave = () => {

        setValidateData(true)


    }

    const command = (valor: any) => {

        let url = 'http://' + valor
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.status == 200 && req.readyState == 4) {

            } else {

            }
        }

        req.open('GET', url)
        req.send()


    }

    const biometric = async ()=>{

        
        const authenticationBiometric = await LocalAuthentication.authenticateAsync({
          promptMessage:"Portão eletrônico",
          cancelLabel: "Cancelar",
          disableDeviceFallback: false,
        });
      
        if(authenticationBiometric.success){
          openGate() 
        }
        
      };
      

    const openGate = () => {

        command(devices.livingRoom+"/relea")

        ToastAndroid.showWithGravityAndOffset(
            "Acionando Portão",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
          );

        setGaragem("garage-alert-variant")
        var timeoutId = setTimeout(
            garagemOpen => { setGaragem("garage-open-variant") }
            , 2000);
        var timeoutId = setTimeout(
            garagem => { setGaragem("garage-variant") }
            , 4000);

    }


    return (

        <View style={styles.container}>
            
            <ScreenModal statusModal={modalActive} ipFan={devices.fan} ipBedroom={devices.Bedroom} ipLivingRoom={devices.livingRoom} changeStatusModal={() => changeStatusModal()} reloadDataSave={() => reloadDataSave()} />
           
            <View style={styles.header}>
                <Animatable.Text animation="slideInLeft" style={styles.title}>Olá Alexandre</Animatable.Text>
                <Animatable.Text animation="slideInRight" onPress={() => setModalAtive(true)}><FontAwesome name="gears" size={24} color='#868686' /></Animatable.Text>
            </View>

            <View style={styles.subHeader}>
                <Image source={require('../../assets/home.jpeg')} style={styles.image}></Image>
            </View>

            <View style={{ width: "100%", height: "9%", backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',flexDirection: 'row' }}>
                <View style={{ width: 130, height: 130, borderRadius: 75, backgroundColor: 'white', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.ButtonGate}>
                        <MaterialCommunityIcons name={statusGaragem} size={60} color='#868686' onPress={() => biometric()} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>command(devices.livingRoom+"/rele1")}><Text style={{color: '#868686',fontWeight: 'bold',}}>Leds</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>command(devices.livingRoom+"/?rele4")}><Text style={{color: '#868686',fontWeight: 'bold',}}>Arandelas</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>command(devices.livingRoom+"?rele3")}><Text style={{color: '#868686',fontWeight: 'bold',}}>Garagem</Text></TouchableOpacity>
             </View>

            <View style={styles.containerButton}>
                <Button title='Sala' ico={BTLivingRoom} width={140} height={140} onPress={() => navigatioScreen('LivingRoom')} />
                <Button title='Quarto' ico={BTBedroom} width={140} height={140} onPress={() => navigatioScreen('Bedroom')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    header: {
        width: "100%",
        height: '15%',
        paddingTop: 45,
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
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
    ButtonGate: {
        width: 100,
        height: 100,
        borderRadius: 75,
        backgroundColor: 'rgb(243,243,243)',
        justifyContent: 'center',
        alignItems: 'center',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 9,

    },
    button:{
        width:"20%",
        height:"59%",
        margin:5,
        backgroundColor:'rgb(243,243,243)',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 5,

    },
    containerButton: {
        top: '10%',
        width: '100%',
        paddingTop: '3%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(243,243,243)'

    },

})