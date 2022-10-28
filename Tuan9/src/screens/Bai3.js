import { StyleSheet, Text, View,Animated, Button } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import  Ionicons from'react-native-vector-icons/Ionicons'
import { render } from 'react-dom';

export default function Bai3() {
    const fAnim = useRef(new Animated.Value(0)).current
    const Start=()=>{
        Animated.timing(
            fAnim,
            {
                toValue:325,
                duration:5000,
                useNativeDriver:false,
            }
        ).start();
    }
    const Stop=()=>{
        Animated.timing(
            fAnim
        ).stop();
    }
    const Reset=()=>{
        Animated.timing(
            fAnim,{
                toValue:0,
                duration:0,
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
                size={70}/>
        </Animated.View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:100}}>
            <Button title='Start'  onPress={()=>Start()} />
            <Button title='Stop'  onPress={()=>Stop()} />
            <Button title='Reset'  onPress={()=>Reset()} />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})