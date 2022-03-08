import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput,TouchableOpacityProps, ToastAndroid} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface ButtonProps extends TouchableOpacityProps{
  statusModal:boolean;
  ipFan:String;
  ipBedroom:String;
  ipLivingRoom:String
  
  changeStatusModal:()=>void;
  teste:()=>void
    

}
export default function ScreenModal({ statusModal, ipFan, ipBedroom, ipLivingRoom,changeStatusModal,teste, ...rest }: ButtonProps){
    


    const [valueFan, setValueFan] = useState('')
    const [valueBedroom, setValueBedroom] = useState('')
    const [valuelivingRoom, setValueLivingRoom] = useState('')
    const [value, setValue] = useState({fan:'',Bedroom:'',livingRoom:''})

    useEffect(()=>{
      setValue({
       
          fan:valueFan,
          Bedroom:valueBedroom, 
          livingRoom:valuelivingRoom
        
      })
    
    },[valueFan, valueBedroom, valuelivingRoom])
     
    const salvarDevices =()=>{
        if(valueFan != '' || valueBedroom != '' || valuelivingRoom != ""){
          
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
              <Text style={{fontSize:20}}>Configuar Devices</Text>
              <Ionicons onPress={()=>changeStatusModal()} name="close-sharp" size={24} color="black" />
            </View>
            <View style={styles.container}>
              <View style={{width:'100%', paddingLeft:20}}><Text>Ventilador</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipFan || 'IP Device Ventilador'}
              onChangeText={setValueFan}
              
              />
        
              <View style={{width:'100%', paddingLeft:20}}><Text>Quarto</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipBedroom || 'IP Device Quarto'}
              onChangeText={setValueBedroom}
              
              
              />

              <View style={{width:'100%', paddingLeft:20}}><Text>Sala</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipLivingRoom || 'IP Device Sala'}
              onChangeText={setValueLivingRoom}
              
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
    paddingTop:60,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center'
  },
  modalView: {

    backgroundColor: 'rgb(243,243,243)',
    borderRadius: 20,
    padding: 15,
    width: "80%",
    height: '68%',
    alignItems: 'center'

  },
  
  headerModal: {
    
    width: "100%",
    height: "10%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  container:{
    width:'100%',
    height:'90%',
    justifyContent:'center',
    alignItems:'center',
  },
  inputText:{
    width:"90%",
    height:"10%",
    backgroundColor:'white',
    margin:8,
    borderRadius:10,
    padding:10

  },
  buttonSalvar:{
    marginTop:15,
    width:"40%",
    height:"10%",
    backgroundColor:'#39d76c',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18

  }
})