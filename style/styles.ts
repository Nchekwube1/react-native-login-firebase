import {StyleSheet} from "react-native"
const colors = {
    gold:"#f89808",
    white:"#ffffff",
    black:"#000000",
    ash:"eeeeee"
}
const font = {
    montserrat :"Montserrat",
    roboto:"Roboto"
}
const text={
    bigger:24,
    big:20,
    small:17,
    smaller:13
}
const styles = StyleSheet.create({
    bigText:{
        fontFamily:font.roboto,
        fontSize:text.big,
        textTransform:"capitalize",
        color:colors.white,
        textAlign:"left"
    },
    biggerText:{
        fontFamily:font.roboto,
        fontSize:text.bigger,
        textTransform:"capitalize",
        textAlign:"left",
        color:colors.white,

    },
    smallText:{
        fontFamily:font.roboto,
        fontSize:text.small,
        textTransform:"capitalize",
        textAlign:"left",
        color:colors.white,

    },
    smallerText:{
        fontFamily:font.roboto,
        fontSize:text.smaller,
        textTransform:"capitalize",
        textAlign:"left",
        color:colors.white,
    },
    container:{
        flex:1,
        display:"flex",
          width:"100vw",
    height:"100vh",
        alignContent:"center",
        flexDirection:"column",
        backgroundColor:colors.black,

    },
    landing:{
    position:"relative",
    width:"100vw",
    height:"100vh",
   padding:6,
   display:"flex",
   alignItems:"center",
   flexDirection:"column",
   backgroundColor:"rgba(0,0,0,0.8)",
    },
    ltext:{
        position:"relative",
        fontFamily:font.montserrat,
        fontSize:text.bigger,
        textAlign:"center",
        color:colors.white,
        width:"100%",
        height:"100%",
        paddingTop:20
    },
    bgImg:{
        position:"relative",
        width:"100vw",
        height:"100vh",

    },
    btn:{
        position:"relative",
        width:"60%",
        padding:"5",
        borderColor:colors.gold,
          alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    height:42,
    borderRadius: 2,
    elevation: 3,
    marginBottom:15,
    backgroundColor:colors.gold
    },
    signbtn:{
         position:"relative",
        width:"90%",
          alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 50,
    elevation: 3,
    marginTop:10,
    backgroundColor:colors.gold,
    height:42,
    },
    btnText:{
          fontFamily:font.montserrat,
          fontSize:text.big,
          textTransform:"capitalize",
     color: colors.white,
    },
    input:{
        position:"relative",
        width:"90%",
        height:42,
        borderRadius:50,
        // backgroundColor:colors.gold,
        fontFamily:font.roboto,
        fontSize:text.small,
        textTransform:"capitalize",
        borderColor:colors.gold,
        borderWidth:1,
        color:colors.white,
        marginBottom:10,
        paddingLeft:14,
        outlineStyle:"none"
    },
    backdiv:{
      position:"relative",
      width:"100%",
      height:28,
      marginBottom:20

    },
    backimgdiv:{
     position:"relative",
     height:"100%",
     width:28,
     elevation:5,
    //  backgroundColor:"red"
    },
    backimg:{
    position:"relative",
    width:"100%",
    height:"100%"
    },
    bigdiv:{
       position:"relative",
       width:"100vw"
       ,marginBottom:15,
       marginTop:30,
       display:"flex",
       justifyContent:"flex-start",
       alignItems:"flex-start",
       paddingLeft:"8%"
    },
    smalldiv:{
        position:"relative",
       width:"100%"
       ,marginBottom:55,
       paddingLeft:"8%"
    }
})

export default styles