import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  {useFonts} from "@use-expo/font"
import styles from "./style/styles"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import {apiKey,authDomain,appId,measurementId,messagingSenderId,projectId,storageBucket} from "@env"
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
const app = initializeApp(firebaseConfig);



export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
   Home: { Id: string }
};


const customFonts ={
  Montserrat: require("./assets/fonts/Montserrat.ttf"),
  Roboto: require("./assets/fonts/Roboto.ttf"),
}

const Stack =  createStackNavigator<RootStackParamList>()
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
       <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
       <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>

      </SafeAreaProvider>
          </View>

      </NavigationContainer>
    )
}
