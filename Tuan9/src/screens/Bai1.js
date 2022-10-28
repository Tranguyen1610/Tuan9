import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Bai1() {
    const fAnim = useRef(new Animated.Value(0)).current
    const show=()=>{
        Animated.timing(
            fAnim,
            {
                toValue:1,
                duration:10000,
                useNativeDriver:false,
            }
        ).start();
    }
    useEffect(()=>{
        show()
        
    },[fAnim])
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.View style={{opacity:fAnim}}>
            <Text style={{fontSize:20}}>Wellcome to Animation React Native</Text>
        </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})