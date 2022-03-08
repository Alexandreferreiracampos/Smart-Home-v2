import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput,TouchableOpacityProps, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface ButtonProps extends TouchableOpacityProps{
  statusModal:boolean;
  
  changeStatusModal:()=>void;
  teste:()=>void
    

}
export default function ScreenModal({ statusModal, changeStatusModal,teste, ...rest }: ButtonProps){
  
    const [valueFan, setValueFan] = useState('')
    const [valueLight, setValueLight] = useState('')
    const [valueHeadBoard, setValueHeadBoard] = useState('')
    const [value, setValue] = useState({fan:'',light:'', hadBoard:''})

    useEffect(()=>{
      setValue({
       
          fan:valueFan,
          light:valueLight, 
          hadBoard:valueHeadBoard
        
      })
    
    },[valueFan, valueLight, valueHeadBoard])
     
  
    /*
    const fan = valueFan;
    const Light = valueLight;
    const HeadBoard = valueHeadBoard;
    */
    
  
    const salvarDevices =()=>{
        if(valueFan != '' || valueLight != '' || valueHeadBoard != ''){
          
          storeData()
          teste()
          
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
        
        const jsonData = JSON.stringify(value)
        await AsyncStorage.setItem('@Device:quarton', jsonData )
        /*
        await AsyncStorage.setItem('@Devicequarto:Light', Light ) 
        await AsyncStorage.setItem('@Devicequarto:HeadBoard', HeadBoard )   
        */

      }catch(e){
        ToastAndroid.showWithGravityAndOffset(
          `Não foi possivel salvar os dados`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          25,50 )}
    }

    
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
              placeholder={''}
              onChangeText={setValueFan}
              
              />
              <TextInput
              style={styles.inputText}
              placeholder={'getLight'}
              onChangeText={setValueLight}
              
              
              />
              <TextInput
              style={styles.inputText}
              placeholder={'getHeadBoard'}
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