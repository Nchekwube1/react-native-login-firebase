import React,{useState} from 'react';
import { Text, View,ImageBackground } from 'react-native';
import img from "../assets/images/img.jpg";
import { useNavigation} from "@react-navigation/native"
import styles from "../style/styles"
import Button from './Pressable';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import {RootStackParamList} from "../App"
// type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

function Landing() {
    const navigator = useNavigation()
    const loginPress=()=>{
        navigator.navigate("Login")
    }
    const registerPress=()=>{
        navigator.navigate("Register")
      
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
