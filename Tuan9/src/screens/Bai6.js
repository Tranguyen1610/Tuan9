import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Bai6() {
    const rung = useRef(new Animated.Value(0)).current
    const show=()=>{
        Animated.loop(
        Animated.timing(
            rung,
            {
                toValue:1,
                duration:3000,
                useNativeDriver:false,
            }
        )).start();
    }
    const rung_a = rung.
    interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ["-60deg", "60deg", "-60deg"],
        }) 
    useEffect(()=>{
        show()
        
    },[rung])
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.View style={{transform :[{ rotate:rung_a}]}}>
           <FontAwesome 
            name='bell'
            size={150}
            color={'red'}/>
        </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})