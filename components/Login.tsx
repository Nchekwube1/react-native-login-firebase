import React,{useState} from 'react';
import { Text, View,ImageBackground,TextInput, Image,Pressable } from 'react-native';
import img from "../assets/images/img.jpg"
import back from "../assets/images/back.svg"
import styles from "../style/styles"
import Sign from './Regbtn';
import Button from './Pressable';
import Alert from './Alert';
import { Dispatch} from "redux"
import {app,rootStackNavProps} from "../App"
import {signInWithEmailAndPassword,getAuth,Auth} from 'firebase/auth'
import {ActionTypes} from "../state/actionTypes"
import {globalState} from "../state/reducer/userReducer"
import {useSelector,useDispatch} from "react-redux"
import {Action} from "../state/actions"

function Login(  {navigation}:rootStackNavProps<"Login">) {
  const dispatch:Dispatch<Action> = useDispatch()
  const init = useSelector((state:globalState)=> state)
const {state} = init
    let auth = getAuth(app)

   const [details,setDetails] = useState({
        email:"",
        password:""
    })

       const loginUser = (authe:Auth,email:string, password:string) => {
    signInWithEmailAndPassword(authe,email, password).then((res)=>{
      if(!res){
          dispatch({type:ActionTypes.LOGIN_ERROR})
           return
      }
      dispatch({type:ActionTypes.LOGIN_SUCCESS,payload:{
        id:res.user.uid,
        email:res.user.email!
      }})


     navigation.navigate("Home",{Id:state.user.id as string})
    }).catch (error=> {
      console.log(error)
    dispatch({type:ActionTypes.OTHER_ERROR})
  })
};
    const login = async ()=>{
    await loginUser(auth,details.email,details.password)
    }
    const backClick =()=>{
 navigation.goBack()

    }
    const signbtn =()=>{
        navigation.navigate("Register")
    }
    return (
           <ImageBackground source={img } style={styles.bgImg}>
        <View style={styles.landing}> 
        {state.error? <Alert text={state.errorText}/>:null}
          <View style={styles.backdiv}>
             <Pressable onPress={backClick} style={styles.backimgdiv}><Image source={back} style={styles.backimg}/></Pressable>
          </View>
          <View>
              <View style={styles.bigdiv}><Text style={styles.biggerText}>login to your account</Text></View>
              <View style={styles.smalldiv}><Text style={styles.smallerText}>fill the details to login to your account</Text></View>
          </View>
           <TextInput placeholder="email" onChangeText={(email)=>{setDetails({...details,email})}} value={details.email} style={styles.input} />
           <TextInput placeholder="password"  secureTextEntry={true} onChangeText={(password)=>{setDetails({...details,password})}}  value={details.password} style={styles.input}/>
           <Sign title="signin" onPress={login}/>
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
