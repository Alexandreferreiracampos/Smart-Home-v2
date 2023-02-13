import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput,TouchableOpacityProps, ToastAndroid, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from 'expo-checkbox';



interface ButtonProps extends TouchableOpacityProps{
   title:string;
   statusModalButon:boolean;
   closeModal:()=>void;
   
}
export default function ScreenModalButton({ title,statusModalButon,closeModal,...rest }: ButtonProps){
    
    const[statusModal, setStatusModal] = useState(false)
    const[luz, setLuz] = useState('')
    const[ventilador, setVentilador] = useState('')
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)

    const [value, setValue] = useState({luz:'', ventilador:''})

    useEffect(()=>{
      setValue({
       
          luz:luz || title,
          ventilador:ventilador || title, 
         
      })
    
    },[luz, ventilador])

    const storeData = async ()=>{
      try{
        
        const jsonData = JSON.stringify(value)
        await AsyncStorage.setItem(`@Device:${title}`, jsonData )
       
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
        visible={statusModalButon}
        >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerView}>
    
          <View style={styles.modalView}>
          
            <View style={styles.headerModal}>
              
              <Text style={{fontSize:20, fontWeight:'bold', color:'#868686'}}>Comandos {title}</Text>
              <Ionicons onPress={()=>closeModal()} name="close-sharp" size={24} color="red" />
            </View>
            <View style={styles.container}>
            
            <ScrollView contentContainerStyle={styles.environmentList} showsHorizontalScrollIndicator={false}>
           
            <View style={{width:'100%',paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Comando para Luz</Text></View>
            <TextInput
              style={styles.inputText}
              placeholder={"name" || 'Nome de Uusário'}
              //onChangeText={console.log("testesalvar nome")}
              
              />
            
            <View style={{width:'100%',paddingLeft:10}}><Text style={{fontWeight:'bold', color:'#868686'}}>Comando para Vetilador</Text></View>
            <TextInput
             style={styles.inputText}
             placeholder={"Ventilador"}
             //onChangeText={console.log("1111")}
            />
            <View style={{flexDirection:'row', padding:10}}>
            <CheckBox
               disabled={false}
               value={toggleCheckBox1}
               onValueChange={(newValue) => setToggleCheckBox1(newValue)}
              /><Text style={{paddingLeft:5,paddingEnd:15}}>Ventilador</Text>

              <CheckBox
               disabled={false}
               value={toggleCheckBox2}
              
               onValueChange={(newValue) => setToggleCheckBox2(newValue)}
              /><Text style={{paddingLeft:5, paddingEnd:15}}>Luz</Text>

            </View>
              
  
            </ScrollView>
              
              <TouchableOpacity style={styles.buttonSalvar} onPress={()=>console.log('salvar')}><Text style={{fontWeight:'bold', color:'white'}}>Salvar</Text></TouchableOpacity>
             
              
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
    backgroundColor: 'rgba(0,0,0,0.6)',
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
    height:'30%',
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
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 1.22,
        elevation: 5,
    
  },
  environmentList:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:20

}
})