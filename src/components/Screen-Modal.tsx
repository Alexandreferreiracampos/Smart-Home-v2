import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput,TouchableOpacityProps, ToastAndroid, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';



interface ButtonProps extends TouchableOpacityProps{
  statusModal:boolean;
  ipFan:string;
  ipBedroom:string;
  ipLivingRoom:string
  name:string
  ipEscritorio:string
  ipEdicula:string
  hostFirebase:string
  authFirebase:string
  changeStatusModal:()=>void;
  reloadDataSave:()=>void
    

}
export default function ScreenModal({ statusModal, ipFan, ipBedroom, ipLivingRoom, name, ipEscritorio, ipEdicula, hostFirebase, authFirebase, changeStatusModal,reloadDataSave, ...rest }: ButtonProps){
    


    const [valueFan, setValueFan] = useState('')
    const [valueBedroom, setValueBedroom] = useState('')
    const [valuelivingRoom, setValueLivingRoom] = useState('')
    const [valueName, setValueName] = useState('')
    const [valueEscritorio, setValueEscritorio] = useState('')
    const [valueEdicula, setValueEdicula] = useState('')
    const [valueHost, setHost] = useState('')
    const [valueAuth, setAuth] = useState('')
    
    const [value, setValue] = useState({fan:'',Bedroom:'',livingRoom:'', name:'',escritorio:'', edicula:'', host:'', auth:'' })

    useEffect(()=>{
      setValue({
       
          fan:valueFan || ipFan,
          Bedroom:valueBedroom || ipBedroom, 
          livingRoom:valuelivingRoom || ipLivingRoom,
          name:valueName || name,
          escritorio:valueEscritorio || ipEscritorio,
          edicula:valueEdicula || ipEdicula,
          host:valueHost || hostFirebase,
          auth:valueAuth || authFirebase
        
      })
    
    },[valueFan, valueBedroom, valuelivingRoom, valueName ])
     
    const salvarDevices =()=>{
        if(valueFan != '' || valueBedroom != '' || valuelivingRoom != "" || valueName != ''){
          
          storeData()
          reloadDataSave()
          
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
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerView}>
    
          <View style={styles.modalView}>
          
            <View style={styles.headerModal}>
              
              <Text style={{fontSize:20, fontWeight:'bold', color:'#868686'}}>Configurar Devices</Text>
              <Ionicons onPress={()=>changeStatusModal()} name="close-sharp" size={24} color="red" />
            </View>
            <View style={styles.container}>
            
            <ScrollView contentContainerStyle={styles.environmentList} showsHorizontalScrollIndicator={false}>
           
            <View style={{width:'100%',paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Nome de Uusário</Text></View>
            <TextInput
              style={styles.inputText}
              placeholder={name || 'Nome de Uusário'}
              onChangeText={setValueName}
              
              />

              <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Ventilador</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipFan || 'IP Device Ventilador'}
              onChangeText={setValueFan}
              
              />
        
              <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Quarto</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipBedroom || 'IP Device Quarto'}
              onChangeText={setValueBedroom}
              
              
              />

              <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Sala</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipLivingRoom || 'IP Device Sala'}
              onChangeText={setValueLivingRoom}
              
              />
              <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Escritório</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipEscritorio || 'IP Device Escritório'}
              onChangeText={setValueFan}
              
              />

              <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Edícula</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={ipEdicula || 'IP Device Edícula'}
              onChangeText={setValueFan}
              
              />

             <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Host</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={hostFirebase || 'Host Firebase'}
              onChangeText={setHost}
              
              /> 

              <View style={{width:'100%', paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Auth</Text></View>
              <TextInput
              style={styles.inputText}
              placeholder={authFirebase || 'Secret Firebase'}
              onChangeText={setAuth}
              
              /> 
        
              </ScrollView>
              
              <TouchableOpacity style={styles.buttonSalvar} onPress={salvarDevices}><Text style={{fontWeight:'bold', color:'white'}}>Salvar</Text></TouchableOpacity>
             
              
            </View>
          
            
            </View>
          
        
          </View>
          </TouchableWithoutFeedback>
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
    height: '53%',
    alignItems: 'center'
  },
  
  headerModal: {
    
    width: "100%",
    height: "13%",
    flexDirection: 'row',
    padding:10,
    marginBottom:10,
    justifyContent: 'space-between',
    alignItems: 'center'
    

  },
  container:{
    width:'100%',
    height:'82%',
    justifyContent:'center',
    alignItems:'center',
  },
  inputText:{
    width:280,
    height:"8%",
    backgroundColor:'white',
    margin:5,
    borderRadius:8,
    padding:10,
    marginBottom:10,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 2,

  },
  buttonSalvar:{
    marginTop:15,
    width:"40%",
    height:"13%",
    backgroundColor:'#39d76c',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:18,
    
  },
  environmentList:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20

}
})