import React from 'react';
import {  Pressable,Text } from 'react-native';
import styles from "../style/styles"
interface props{
    title:string,
    onPress :()=>void,
}
export default function Sign(props:props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.signbtn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
}