import React from 'react';
import {  Pressable,Text } from 'react-native';
import styles from "../style/styles"
interface props{
    title:string,
    onPress :()=>void,
}
export default function Button(props:props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
}