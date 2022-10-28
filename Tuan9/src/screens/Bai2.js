import { StyleSheet, Text, View,Animated, Button } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import  Ionicons from'react-native-vector-icons/Ionicons'

export default function Bai2() {
    const fAnim = useRef(new Animated.Value(0)).current
    const Move=()=>{
        Animated.timing(
            fAnim,
            {
                toValue:300,
                duration:2000,
                useNativeDriver:false,
            }
        ).start();
    }
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <Animated.View
            style={{marginLeft:fAnim}}>
            <Ionicons
                name='airplane-outline'
                size={100}/>
        </Animated.View>
        <Button title='Move'  onPress={()=>Move()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})