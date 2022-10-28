import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import Bai1 from '../screens/Bai1';
import Bai2 from '../screens/Bai2';
import Bai3 from '../screens/Bai3';
import Bai4 from '../screens/Bai4';

export default function Rootnavigation() {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
        <Stack.Screen name="Bai4" component={Bai4} />
    </Stack.Navigator>
  )
}