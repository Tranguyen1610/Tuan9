import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import Bai1 from '../screens/Bai1';
import Bai2 from '../screens/Bai2';
import Bai3 from '../screens/Bai3';
import Bai4 from '../screens/Bai4';
import Bai5 from '../screens/Bai5';
import Bai6 from '../screens/Bai6';
import Bai7 from '../screens/Bai7';

export default function Rootnavigation() {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
        <Stack.Screen name="Bai4" component={Bai4} />
        <Stack.Screen name="Bai5" component={Bai5} />
        <Stack.Screen name="Bai6" component={Bai6} />
        <Stack.Screen name="Bai7" component={Bai7} />
    </Stack.Navigator>
  )
}