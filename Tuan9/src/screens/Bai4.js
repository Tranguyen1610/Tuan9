import { StyleSheet, Text, View,Animated, Button, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import  Ionicons from'react-native-vector-icons/Ionicons'

export default function Bai4() {
    const fAnim_Image = useRef(new Animated.Value(0)).current
    const fAnim_Text = useRef(new Animated.Value(0)).current
    const Move=()=>{
        Animated.timing(
            fAnim_Text,
            {
                toValue:345,
                duration:3000,
                useNativeDriver:false,
            }
        ).start();
    }
    const Show=()=>{
        Animated.timing(
            fAnim_Image,
            {
                toValue:1,
                duration:3000,
                useNativeDriver:false,
            }
        ).start();
    }
    useEffect(()=>{
        Move(); Show();
    },[fAnim_Image],[fAnim_Text])
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>
        <Animated.View
            style={{opacity:fAnim_Image,alignItems:'center'}}>
            <Image source={{uri:'https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg'}}
                style={{width:300,height:300}}/>
        </Animated.View>
        <Animated.View
            style={{marginLeft:fAnim_Text}}>
            <Text style={{fontSize:20}}>Bài 4</Text>
        </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})