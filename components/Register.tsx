import React,{useState} from 'react';
import { Text, View,ImageBackground,TextInput, Image,Pressable } from 'react-native';
import img from "../assets/images/img.jpg"
import back from "../assets/images/back.svg"
import styles from "../style/styles"
import Sign from './Regbtn';
import Button from './Pressable';
import {app, rootStackNavProps} from "../App"

import {globalState} from "../state/reducer/userReducer"
import {useSelector} from "react-redux"
import Alert from './Alert';

import {createUserWithEmailAndPassword,getAuth,Auth} from 'firebase/auth'
function Register({navigation}:rootStackNavProps<"Register">) {
  const init = useSelector((state:globalState)=> state)
const {state} = init
    let auth = getAuth(app)

      const [details,setDetails] = useState({
        password2:"",
        email:"",
        password:""
    })
    const createUser = (authe:Auth,email:string, password:string) => {
  try {
    createUserWithEmailAndPassword(authe,email, password).then((res)=>{
        alert("user created successfully")
        console.log(res)
    })
  } catch (error) {
    console.log(error);
  }
};

    const register = async ()=>{
        if(details.password!== details.password2){
            alert("Passwords do not match")
        }
        if(details.password.length<5){
          alert("Password should be at least 6 chararcters long")
        }
        await createUser(auth,details.email,details.password)


    }
    const backClick =()=>{
        navigation.goBack()
    }
    const signbtn =()=>{
        navigation.navigate("Login")
    }
    return (
           <ImageBackground source={img } style={styles.bgImg}>
        <View style={styles.landing}> 
        {state.error? <Alert text={state.errorText}/>:null}
          <View style={styles.backdiv}>
             <Pressable onPress={backClick} style={styles.backimgdiv}><Image source={back} style={styles.backimg}/></Pressable>
          </View>
          <View>
              <View style={styles.bigdiv}><Text style={styles.biggerText}>create an account</Text></View>
              <View style={styles.smalldiv}><Text style={styles.smallerText}>fill the details &#38; create your account</Text></View>
          </View>
           <TextInput placeholder="email" onChangeText={(email)=>{setDetails({...details,email})}} value={details.email} style={styles.input} />
           <TextInput placeholder="password"  secureTextEntry={true} onChangeText={(password)=>{setDetails({...details,password})}}  value={details.password} style={styles.input}/>
           <TextInput placeholder="confirm password"  secureTextEntry={true} onChangeText={(password2)=>{setDetails({...details,password2})}}  value={details.password2} style={styles.input}/>
           <Sign title="signup" onPress={register}/>
     <View style={
         {marginTop:13,marginBottom:24}
     }>
           <Text style={styles.smallText}>already have an account?</Text>

     </View>
           <Button title="signin" onPress={signbtn}/>
         
             </View>
        </ImageBackground>
    )
}

export default Register
