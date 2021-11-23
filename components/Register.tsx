import React,{useState} from 'react';
import { Text, View,ImageBackground,TextInput, Image,Pressable } from 'react-native';
import img from "../assets/images/img.jpg"
import back from "../assets/images/back.svg"
import { useNavigation} from "@react-navigation/native"
import styles from "../style/styles"
import Sign from './Regbtn';
import Button from './Pressable';
import {app} from "../App"
import {createUserWithEmailAndPassword,getAuth,Auth} from 'firebase/auth'
// import firebase from "firebase/app"
function Register() {
    const navigator = useNavigation()
    let auth = getAuth(app)

      const [details,setDetails] = useState({
        password2:"",
        email:"",
        password:""
    })
    const createUser = (authe:Auth,email:string, password:string) => {
  try {
    createUserWithEmailAndPassword(authe,email, password).then(()=>{
        alert("user created successfully")
    })
    // firebase.createUserWithEmailAndPassword()
  } catch (error) {
    alert(error);
  }
};

    const register = async ()=>{
        // console.log(details.email,details.password,details.password2)
        if(details.password!== details.password2){
            alert("Passwords do not match")
        }
        if(details.password.length<5){
          alert("Password should be at least 6 chararcters long")
        }
        await createUser(auth,details.email,details.password)


    }
    const backClick =()=>{
        navigator.goBack()
    }
    const signbtn =()=>{
        navigator.navigate("Login")
    }
    return (
           <ImageBackground source={img } style={styles.bgImg}>
        <View style={styles.landing}> 
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
