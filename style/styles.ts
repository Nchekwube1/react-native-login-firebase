import {StyleSheet} from "react-native"
const colors = {
    gold:"#f89808",
    white:"#fff",
    black:"#000",
    ash:"e8e8e8"
}
const font = {
    montserrat :"Montserrat",
    roboto:"Roboto"
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        alignContent:"center",
        flexDirection:"column",
        backgroundColor:colors.black,

    },
    landing:{
    position:"relative",
    flex:1,
    width:"100%",
    height:"100%",
        padding:6
    // backgroundColor:"red"
    },
    ltext:{
        position:"relative",
        fontFamily:font.montserrat,
        fontSize:24,
        textAlign:"center",
        color:colors.white
    }
})

export default styles