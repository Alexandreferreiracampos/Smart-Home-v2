import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableOpacityProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { useState } from 'react';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    status: string;
}

export default function Header({ title, status, ...rest }: ButtonProps) {

    const [modalActive, setModalActive] = useState(false)

    const navigation = useNavigation();

    const navigationScreen = () => {
        navigation.navigate('Home')
    }


    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ width: 45, height: 35 }}  >
                <AntDesign name="back" size={35} color="#868686" onPress={() => navigationScreen()} />
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={{ width: 30, height: 25 }}>
                <FontAwesome5 name="wifi" size={24} color={status} onPress={() =>setModalActive(true)}/>
            </TouchableOpacity>
            <Modal
        animationType='fade'
        transparent={true}
        statusBarTranslucent={true}
        visible={modalActive}
        onRequestClose={() => { setModalActive(false) }}

      >

        <View style={styles.outerView}>
          <View style={styles.modalView}>
            <View style={styles.headerModal}>


              <Ionicons onPress={() => setModalActive(false)} name="close-sharp" size={24} color="black" style={{ left: "90%" }} />

            </View>

          </View>
        </View>
      </Modal>

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: '15%',
        paddingTop: 45,
        padding: 20,
        backgroundColor: 'rgb(243,243,243)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        left: -80,
        color: '#868686'

    },
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