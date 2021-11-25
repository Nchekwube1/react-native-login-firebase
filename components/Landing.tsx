import React,{useEffect} from 'react';
import { Text, View,ImageBackground } from 'react-native';
import img from "../assets/images/img.jpg";
import styles from "../style/styles"
import Button from './Pressable';
import {rootStackNavProps} from "../App"
import {globalState} from "../state/reducer/userReducer"
import {useSelector} from "react-redux"


function Landing({navigation}:rootStackNavProps<"Landing">) {
    const init = useSelector((state:globalState)=> state)
    const {state} = init
    useEffect(()=>{
    //   if(state.user.email!== ""||state.user.email!== undefined||state.user.email!== null){
    //     

    //   }
      if(state.user.email=== ""||state.user.email=== undefined||state.user.email=== null){
        navigation.navigate("Landing")

      }else{
navigation.navigate("Home",{Id:state.user.id as string})
      }
    },[state.user.email])
    console.log(state)

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
