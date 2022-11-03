import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Bai5() {
    const qua1 = useRef(new Animated.Value(0)).current;
    const an1 = useRef(new Animated.Value(1)).current;
    const hien2 = useRef(new Animated.Value(0)).current;
    const xuong2 = useRef(new Animated.Value(0)).current;
    const hien3 = useRef(new Animated.Value(0)).current;
    const qua3 = useRef(new Animated.Value(150)).current;

    const anim = Animated.sequence([
        
            Animated.timing(qua1,{
                toValue:150,
                duration:3000,
                useNativeDriver:false,
            }),
            Animated.timing(an1, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
            }),
        
        Animated.timing(hien2, {
            toValue: 1,
            duration: 0,
            useNativeDriver: false,
          }),
          Animated.timing(xuong2, {
            toValue: 150,
            duration: 3000,
            useNativeDriver: false,
          }),
          Animated.timing(hien2, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
          Animated.timing(hien3, {
            toValue: 1,
            duration: 0,
            useNativeDriver: false,
          }),
          Animated.timing(qua3, {
            toValue: 280,
            duration: 3000,
            useNativeDriver: false,
          }),
      ]);

    // const anim = Animated.parallel([
    //     anim1,
    //     anim2,
    //   ]);
    useEffect(()=>{
       anim.start();
        
    },[anim])
  return (
    <SafeAreaView>
        <View style={{position:'relative'}}>
        <Animated.View style={{position:'absolute',opacity:an1,marginLeft:qua1}}>
            <View style={{width:100,height:100,backgroundColor:'red'}}>
            </View>
        </Animated.View>
        <Animated.View style={{position:'absolute',opacity:hien2,marginTop:xuong2,marginLeft:150}}>
            <View style={{width:100,height:100,backgroundColor:'blue'}}>
            </View>
        </Animated.View>
        <Animated.View style={{position:'absolute',opacity:hien3,marginLeft:qua3,marginTop:150}}>
            <View style={{width:100,height:100,backgroundColor:'pink'}}>
            </View>
        </Animated.View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})