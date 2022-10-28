import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button title='Bài 1' onPress={()=> navigation.navigate("Bai1")}/>
      <Button title='Bài 2' onPress={()=> navigation.navigate("Bai2")}/>
      <Button title='Bài 3' onPress={()=> navigation.navigate("Bai3")}/>
      <Button title='Bài 4' onPress={()=> navigation.navigate("Bai4")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',

    },
})