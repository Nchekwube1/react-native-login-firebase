import React from 'react'
import { Text, View,Pressable } from 'react-native';
import styles from '../style/styles';
import {globalState} from "../state/reducer/userReducer"
import {ActionTypes} from "../state/actionTypes"
import {useSelector,useDispatch} from "react-redux"
interface alertProps{
    text:string
}
const Alert:React.FC<alertProps> =({text})=> {
    const init = useSelector((state:globalState)=> state)
    const dispatch = useDispatch()
const {state} = init
const closeAlert =()=>{
 dispatch({type:ActionTypes.CLOSE_ALERT})
}
    return (
      <View style={styles.alertModal}>
        <View style={styles.alertBox}>
            <Text style={styles.alertText}>{text}</Text>
            <Pressable onPress={closeAlert} style={styles.alertBtn}>
                <Text style={styles.alertBtntext}>ok</Text>
            </Pressable>
        </View>
      </View>
    )
}

export default Alert
