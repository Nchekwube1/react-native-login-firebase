import React,{useState} from 'react';
import { Text, View,ImageBackground } from 'react-native';
import img from "../assets/images/img.jpg";
import styles from "../style/styles"
import Button from './Pressable';
import {rootStackNavProps} from "../App"


function Landing({navigation}:rootStackNavProps<"Landing">) {
    const loginPress=()=>{
        navigation.navigate("Login")
    }
    const registerPress=()=>{
        navigation.navigate("Register")
      
    }
    return (
        <ImageBackground source={img } style={styles.bgImg}>
        <View style={styles.landing}> 
          <Text style={styles.ltext}>Welcome!</Text>
          <Button onPress={loginPress} title="login"/>
          <Button onPress={registerPress} title="register"/>
             </View>
        </ImageBackground>
    )
}

export default Landing
