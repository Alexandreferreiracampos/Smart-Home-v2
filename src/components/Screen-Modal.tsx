import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableOpacityProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


interface ButtonProps extends TouchableOpacityProps{
  statusModal:boolean;
  changeStatusModal:()=>void
    

}
export default function ScreenModal({ statusModal, changeStatusModal, ...rest }: ButtonProps){
  
   
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
              <View><Text>ola</Text></View>
              
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

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: "80%",
    height: '40%',
    alignItems: 'center'

  },
  headerModal: {
    
    width: "100%",
    height: "10%",


  }
})