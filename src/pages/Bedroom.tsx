import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { Entypo } from '@expo/vector-icons';
import fan from '../assets/fan.png';
import lamp from '../assets/lamp.png';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';


export default function Bedroom() {

    const [validateData, setValidateData] = useState(true);
    const [devices, setDevices] = useState({fan:'',Bedroom:'',livingRoom:''});
    const [size, setSize] = useState(0);
    const [statusSize, setStatusSize] = useState(0);
    const [statusReguest, setReguest] = useState('#39d76c');
    const [statusFan, setStatusFan] = useState('Ventilador');
    const [brilho, SetBrilho] = useState(255);
    const [corRgb, setCoRgb] = useState(0);
    const [sliderRGB, setSliderRgb] = useState();
    
    const fanStatus = () => {

        let url = 'http://'+devices.fan+'/status'
        let req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', url,)
        req.onload  = function() {
            var jsonResponse = req.response;
            setStatusFan(jsonResponse.status);
         };
        req.send()
       
        
    }

    if(validateData == true){
    async function loadStorgeUserName(){

        const dataDevices = await AsyncStorage.getItem('@Device:quarton')
        const objeto = JSON.parse(dataDevices || '');
        setDevices(objeto)
        
        setValidateData(false)
        }
    loadStorgeUserName()
    fanStatus()

    }
 
     
   
    const command = (valor: any) => {

        let url = 'http://'+valor
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.status == 200 && req.readyState == 4) {
                setReguest('#39d76c')
                fanStatus()
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
    
    useEffect(()=>{
        if(corRgb >= 0 && corRgb <= 20){
            setSliderRgb("red")
        }
        if(corRgb >= 70 && corRgb <= 90){
            setSliderRgb('#008000')
        }
        if(corRgb >= 100 && corRgb <= 149){
            setSliderRgb('#FFc222')
        }
        if(corRgb >= 150 && corRgb <= 200){
            setSliderRgb('rgb(0,150,255)')
        }
        if(corRgb >= 200 && corRgb <= 255){
            setSliderRgb('#ee82ee')
        }

        let url = 'http://192.168.0.238/Controle?rgb='+corRgb+"a"+brilho
        let req = new XMLHttpRequest();
        req.open('GET', url)
        req.send()
        console.log('RGB'+corRgb+"a"+brilho)
        
        
    },[brilho, corRgb])

    return (
        <Animatable.View style={styles.container}>
            <Header title={'Quarto'} status={statusReguest} />
            <View style={styles.subHeader}>
                
                <Image source={require('../assets/Bedroom.jpg')} style={styles.image}></Image>

            </View>
            <View style={styles.containerButton}>
                <View style={styles.titleDevices}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#868686' }}>Devices</Text>
                </View>
                <Animatable.View animation="slideInUp" style={{ flexDirection: 'row'}}>
                    <Button title='Luz' ico={lamp} width={80} height={80} onPress={() => command(devices.Bedroom+"/rele4")} />
                    <Button title={statusFan} ico={fan} width={80} height={80} onPress={() => command(devices.fan+"/Controle?FanQuarto=on")} />
                </Animatable.View>
                <View style={{flexDirection:'column',width:350, height:220}}>
                <View style={styles.buttomDimer}>
                    <View style={{ width: "90%", top:'-1%' }}>
                        <Slider
                            minimumValue={0}
                            maximumValue={255}
                            minimumTrackTintColor='#868686'
                            maximumTrackTintColor='#cdcdcd'
                            thumbTintColor='#868686'
                            //onSlidingStart={RGB1(corRgb)}
                            onValueChange={(valor) => SetBrilho(valor.toFixed())}
                            value={brilho}
                        />
                        <View style={{ width: "90%", top:'15%' }}>
                        <Slider
                            minimumValue={0}
                            maximumValue={255}
                            minimumTrackTintColor={sliderRGB}
                            maximumTrackTintColor='#cdcdcd'
                            thumbTintColor={sliderRGB}
                            //onSlidingStart={RGB1(corRgb)}
                            onValueChange={(valor) => setCoRgb(valor.toFixed())}
                            value={corRgb}
                            
                        />
                     </View>
                        
                        
                    </View>
                    <TouchableOpacity style={{ width: 50, left: -5 }} onPress={() => SetBrilho(0)}><Entypo name="light-down" size={35} color='#868686' /></TouchableOpacity>
                    </View>
                    <View style={styles.containerRGB}>
                    <TouchableOpacity onPress={()=>setCoRgb("white")} style={[styles.buttonRgb, {backgroundColor:'white'}]}><Text style={{color:'#868686', fontWeight:'bold'}}>White</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setCoRgb(0)} style={[styles.buttonRgb, {backgroundColor:'white'}]}><Text style={{color:'red', fontWeight:'bold'}}>Red</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setCoRgb(70)} style={[styles.buttonRgb, {backgroundColor:'white'}]}><Text style={{color:'#008000', fontWeight:'bold'}}>Green</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>setCoRgb(170)} style={[styles.buttonRgb, {backgroundColor:'white'}]}><Text style={{color:'rgb(0,150,255)', fontWeight:'bold'}}>Blue</Text></TouchableOpacity>
                    </View>
                    
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
        top:5,
        width: "100%",
        height: '29%',
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
    containerRGB:{
        top:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:"100%",
        height:"30%",  
    },
    buttonRgb:{
        width:"18%",
        height:"90%",
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,

    }
})