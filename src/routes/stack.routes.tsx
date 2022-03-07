import React from 'react'
import Bedroom from '../pages/Bedroom';
import LivingRoom from '../pages/Living-Room';

import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC =()=>(
    <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{cardStyle:{
        backgroundColor: 'rgb(243,243,243)'
    }}}
    

    >

        <stackRoutes.Screen
        name="Bedroom"
        component={Bedroom}
        />
        <stackRoutes.Screen
        name="LivingRoom"
        component={LivingRoom}
        />
       
    </stackRoutes.Navigator>
    
)

export default AppRoutes;