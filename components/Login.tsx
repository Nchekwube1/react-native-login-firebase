import React,{useState} from 'react';
import { Text, View,ImageBackground,TextInput, Image,Pressable } from 'react-native';
import img from "../assets/images/img.jpg"
import back from "../assets/images/back.svg"
import styles from "../style/styles"
import Sign from './Regbtn';
import Button from './Pressable';
import { useNavigation} from "@react-navigation/native"

function Login() {
    const navigator =useNavigation()
   const [details,setDetails] = useState({
        email:"",
        password:""
    })

    const register = ()=>{
        console.log(details.email,details.password,)
    }
    const backClick =()=>{
 navigator.goBack()

    }
    const signbtn =()=>{
        navigator.navigate("Register")
    }
    return (
           <ImageBackground source={img } style={styles.bgImg}>
        <View style={styles.landing}> 
          <View style={styles.backdiv}>
             <Pressable onPress={backClick} style={styles.backimgdiv}><Image source={back} style={styles.backimg}/></Pressable>
          </View>
          <View>
              <View style={styles.bigdiv}><Text style={styles.biggerText}>login to your account</Text></View>
              <View style={styles.smalldiv}><Text style={styles.smallerText}>fill the details to login to your account</Text></View>
          </View>
           <TextInput placeholder="email" onChangeText={(email)=>{setDetails({...details,email})}} value={details.email} style={styles.input} />
           <TextInput placeholder="password"  secureTextEntry={true} onChangeText={(password)=>{setDetails({...details,password})}}  value={details.password} style={styles.input}/>
           <Sign title="signin" onPress={register}/>
     <View style={
         {marginTop:13,marginBottom:24}
     }>
           <Text style={styles.smallText}>don&#39;t have an account?</Text>

     </View>
           <Button title="signup" onPress={signbtn}/>
         
             </View>
        </ImageBackground>
        )
}

export default Login
