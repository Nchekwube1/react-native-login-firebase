import {ActionTypes} from "../actionTypes"
import {Action} from "../actions"
export interface globalState{
    state:userState
}

interface userState{
    user:{
     id?:string,
     email?:string,
    },
    error:boolean,
    errorText:string
}
const initialState ={
      user:{
     id:"",
     email:"",
    },
    error:false,
    errorText:""
}


const reducer = (state:userState = initialState,action:Action):userState=>{
 switch(action.type){
    case ActionTypes.LOGIN_SUCCESS:
        return{ user:action.payload, error:false,errorText:""}
        case ActionTypes.LOGIN_ERROR:
            return{ user:{}, error:true,errorText:"Invalid Credentials"}
        case ActionTypes.OTHER_ERROR:
            return{ user:{}, error:true,errorText:"Oops! an error occured, try again"}
        case ActionTypes.LOG_OUT:
            return{ user:{}, error:false,errorText:""}
        case ActionTypes.CLOSE_ALERT:
            return{user:{},error:false,errorText:""}
        case ActionTypes.PASSWORD_MISMATCH:
            return{ user:{}, error:true,errorText:"Passwords do not match"}
        case ActionTypes.PASSWORD_SHORT:
            return{ user:{}, error:true,errorText:"Password should be at least 6 characters long"}

    default:return state
 }
}


export default reducer