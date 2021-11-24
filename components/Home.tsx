import React,{useState} from 'react';
import { Text, View,Pressable, } from 'react-native';
import styles from '../style/styles';
import { rootStackNavProps } from '../App';
import {globalState} from "../state/reducer/userReducer"
import {useSelector} from "react-redux"

function Home({navigation}:rootStackNavProps<"Home">) {
    const init = useSelector((state:globalState)=> state)
    const {state} = init

    const logout=()=>{
        navigation.navigate("Login")
    }
    return (
           <View style={styles.home}> 
           <View style={styles.logoutview}><Pressable  onPress={logout} style={styles.logout}><Text style={styles.smallText}>Logout</Text></Pressable></View>

          <Text style={styles.htext}>You have successfully logged in!!!</Text>
                </View>
    )
}

export default Home
