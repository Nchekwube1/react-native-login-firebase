import React from 'react';
import { Text, View,ImageBackground } from 'react-native';
import img from "../assets/imgs/img.jpg"
import styles from "../style/styles"

function Landing() {
    return (
        <View style={styles.landing}> 
        <ImageBackground source={img }>
          <Text style={styles.ltext}>Landing Page</Text>

        </ImageBackground>
        </View>
    )
}

export default Landing
