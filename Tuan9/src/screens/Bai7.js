import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Bai7() {
    const quay = useRef(new Animated.Value(0)).current
    const show=()=>{
        Animated.loop(
        Animated.timing(
            quay,
            {
                toValue:1,
                duration:3000,
                useNativeDriver:false,
            }
        )).start();
    }
    const quay_a = quay.
    interpolate({
        inputRange: [0,1],
        outputRange: ["0deg", "360deg",],
        }) 
    useEffect(()=>{
        show()
        
    },[quay])
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Animated.Image style={{transform :[{ rotate:quay_a}],width:200,height:200}}
            source={{uri:'https://tienamphu.com/wp-content/uploads/2018/02/menh-tho.png'}}
            />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})