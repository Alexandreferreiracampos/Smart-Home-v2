import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenModal from '../components/Screen-Modal';


export default function Home(){


    const [modalActive, setModalAtive] = useState(false);
    const [validateData, setValidateData] = useState(true);
    const navigation = useNavigation();
    

    const [devices, setDevices] = useState({fan:'',Bedroom:'',livingRoom:''});

    if(validateData == true){
    async function loadStorgeUserName(){

        const dataDevices = await AsyncStorage.getItem('@Device:quarton')
        const objeto = JSON.parse(dataDevices || '');
        setDevices(objeto)
        console.log(devices)
        setValidateData(false)
        }
    loadStorgeUserName()

    }


    const navigatioScreen=(valor:any)=>{
        navigation.navigate(valor)
    }

    const changeStatusModal = ()=>{
      
        setModalAtive(false)
       
      }

    const teste1=()=>{
       
        setValidateData(true)
    
    }
   

    return(
        <View style={styles.container}>
           
            <TouchableOpacity onPress={()=>navigatioScreen('Bedroom')}><Text>Quarto</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigatioScreen('LivingRoom')}><Text>Sala</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>setModalAtive(true)} ><Text>Config</Text></TouchableOpacity>
            
            <ScreenModal statusModal={modalActive} ipFan={devices.fan} ipBedroom={devices.Bedroom} ipLivingRoom={devices.livingRoom} changeStatusModal={()=>changeStatusModal()} teste={()=>teste1()} />


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }

})