import React from 'react';
import { Text, View,Pressable, } from 'react-native';
import styles from '../style/styles';
import { app, rootStackNavProps } from '../App';
import {globalState} from "../state/reducer/userReducer"
import {useDispatch, useSelector} from "react-redux"
import { ActionTypes } from '../state/actionTypes';
import { Dispatch } from 'redux';
import { Action } from '../state/actions';
import {getAuth,Auth,signOut} from 'firebase/auth'


function Home({navigation}:rootStackNavProps<"Home">) {
    let auth = getAuth(app)
  const dispatch:Dispatch<Action> = useDispatch()
    const init = useSelector((state:globalState)=> state)
    const {state} = init


    const logout=()=>{
          signOut(auth)
          dispatch({type:ActionTypes.LOG_OUT})
        navigation.navigate("Login")
    }
    return (
           <View style={styles.home}> 
           <View style={styles.logoutview}><Pressable  onPress={logout} style={styles.logout}><Text style={styles.smallText}>Logout</Text></Pressable></View>

          <Text style={styles.htext}>You are successfully logged in as {state.user.email}</Text>
                </View>
    )
}

export default Home
