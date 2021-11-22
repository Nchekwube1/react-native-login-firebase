import React from 'react';
import { Text, View,ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  {useFonts} from "@use-expo/font"
import styles from "./style/styles"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Landing from './components/Landing';
import {apiKey,authDomain,appId,measurementId,messagingSenderId,projectId,storageBucket} from "@env"
console.log(apiKey)
// import image from "./assets/imgs/img.jpg"
import {initializeApp} from "firebase/app"
const firebaseConfig = {

  apiKey,

  authDomain,

  projectId,

  storageBucket,

  messagingSenderId,

  appId,

  measurementId

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// if(firebase.apps.length === 0 ){

// }



const customFonts ={
  Montserrat: require("./assets/fonts/Montserrat.ttf"),
  Roboto: require("./assets/fonts/Roboto.ttf"),
}

const Stack =  createStackNavigator()
export default function App() {
     const [isLoaded] = useFonts(customFonts);
   if (!isLoaded) {
        return(
          <View style={styles.container}>
          <Text >Fonts could not be loaded</Text>
          </View>
        );
    }

    return (
      <NavigationContainer>
         <View style={styles.container}>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName={"Landing"}>
       <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        </Stack.Navigator>
         {/* <Landing/> */}

      </SafeAreaProvider>
          </View>

      </NavigationContainer>
    )
}
