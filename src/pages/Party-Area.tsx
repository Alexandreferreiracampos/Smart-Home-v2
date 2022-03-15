import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Header from '../components/Header';
import Button from '../components/Button';
import led from '../assets/led.png';
import pendente from '../assets/pendente.png';
import lamp from '../assets/lamp.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Animatable from 'react-native-animatable';

export default function PartyArea(){
    
    const [validateData, setValidateData] = useState(true);
  const [devices, setDevices] = useState({fan:'',Bedroom:'',livingRoom:'', name:'',escritorio:'', edicula:'' });
  const [statusReguest, setReguest] = useState('#39d76c');
  

    if(validateData == true){
    async function loadStorgeUserName(){

        const dataDevices = await AsyncStorage.getItem('@Device:quarton')
        const objeto = JSON.parse(dataDevices || '');
        setDevices(objeto)
        
        setValidateData(false)
        }
    loadStorgeUserName()

    }

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

    }

    return(
        <View style={styles.container}>
            <Header title='Edícula' status={statusReguest} />
        
            <View style={styles.subHeader}>
            <Image source={require('../assets/partyArea.jpg')} style={styles.image}></Image>
            </View>
            <View style={styles.containerButton}>
                <View style={styles.titleDevices}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#868686' }}>Devices</Text>
                </View>
             
                <Animatable.View animation="slideInUp" style={{ flexDirection: 'row'}}>
                    <Button title='Pendente' ico={pendente} width={80} height={80} onPress={() => command(devices.edicula+"/pendente")} />
                    <Button title='Leds' ico={led} width={80} height={80} onPress={() => command(devices.edicula+"/led")} />
                    
                </Animatable.View>
                <Animatable.View animation="slideInUp"  delay={100} style={{ flexDirection: 'row'}}>
                    <Button title='Arandélas' ico={led} width={80} height={80} onPress={() => command(devices.edicula+"/arandela")} />
                    <Button title='Luz' ico={lamp} width={80} height={80} onPress={() => command(devices.edicula+"/luz")} />
                    
                </Animatable.View>
                
                </View>
             
        </View>
       
      
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
        top: '-2%',
        left: '-31%',
    },
    containerButton: {
        top: '-5%',
        position: "relative",
        width: '100%',
        paddingTop: '7%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(243,243,243)'
    
    },
})