import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput,TouchableOpacityProps, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface ButtonProps extends TouchableOpacityProps{
  statusModal:boolean;
  
  changeStatusModal:()=>void
    

}
export default function ScreenModal({ statusModal, changeStatusModal, ...rest }: ButtonProps){
  
    const [valueFan, setValueFan] = useState('')
    const [valueLight, setValueLight] = useState('')
    const [valueHeadBoard, setValueHeadBoard] = useState('')
    
    
    const fan = valueFan;
    const Light = valueLight;
    const HeadBoard = valueHeadBoard;
    
  
    const salvarDevices =()=>{
        if(valueFan != '' || valueLight != '' || valueHeadBoard != ''){
          
          storeData()
          
        }else{
          ToastAndroid.showWithGravityAndOffset(
            "Por favor infomar ao menos um Device",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
          );}
          
    }
    
    
    const storeData = async ()=>{
      try{
        
        
        await AsyncStorage.setItem('@Devicequarto:fan', fan )
        await AsyncStorage.setItem('@Devicequarto:Light', Light ) 
        await AsyncStorage.setItem('@Devicequarto:HeadBoard', HeadBoard )   

      }catch(e){
        ToastAndroid.showWithGravityAndOffset(
          `Não foi possivel salvar os dados`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          25,50 )}
    }

    const [getFan, setGetFan] = useState('');
    const [getLight, setGetLight] = useState('');
    const [getHeadBoard, setGetHeadBoard] = useState('');

    useEffect(() => {
        async function loadStorgeUserName(){
            
            const Fan = await AsyncStorage.getItem('@Devicequarto:fan')
            const Light = await AsyncStorage.getItem('@Devicequarto:Light')
            const HeadBoard = await AsyncStorage.getItem('@Devicequarto:HeadBoard')
            setGetFan(Fan || '')
            setGetLight(Light || '')
            setGetHeadBoard(HeadBoard || '')
            
        }
        loadStorgeUserName()
        
    },[getFan, getLight, getHeadBoard])
    
    return(
        <Modal
        animationType='fade'
        transparent={true}
        statusBarTranslucent={true}
        visible={statusModal}
        >

        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <View style={styles.headerModal}>
              <Ionicons onPress={()=>changeStatusModal()} name="close-sharp" size={24} color="black" style={{ left: "90%" }} />
            </View>
            <View style={styles.container}>
              <Text>Ventilador</Text>
              <TextInput
              style={styles.inputText}
              placeholder={getFan}
              onChangeText={setValueFan}
              
              />
              <TextInput
              style={styles.inputText}
              placeholder={getLight}
              onChangeText={setValueLight}
              
              
              />
              <TextInput
              style={styles.inputText}
              placeholder={getHeadBoard}
              onChangeText={setValueHeadBoard}
              
              />
              <TouchableOpacity style={styles.buttonSalvar} onPress={salvarDevices}><Text>Salvar</Text></TouchableOpacity>
             

            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center'
  },
  modalView: {

    backgroundColor: 'rgb(243,243,243)',
    borderRadius: 20,
    padding: 15,
    width: "80%",
    height: '50%',
    alignItems: 'center'

  },
  headerModal: {
    
    width: "100%",
    height: "10%",
  },
  container:{
    width:'100%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center',
  },
  inputText:{
    width:"90%",
    height:"20%",
    backgroundColor:'white',
    margin:8,
    borderRadius:10,
    padding:10

  },
  buttonSalvar:{
    width:"40%",
    height:"15%",
    backgroundColor:'#39d76c',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18

  }
})