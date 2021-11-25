import {ActionTypes} from "../actionTypes"
interface LoginSuccessAction{
    type:ActionTypes.LOGIN_SUCCESS,
payload:{
    id:string,
    email:string
}

}
interface LoginError{
    type:ActionTypes.LOGIN_ERROR,
 }
interface Logout{
    type:ActionTypes.LOG_OUT,
 }
interface PasswordMismatch{
    type:ActionTypes.PASSWORD_MISMATCH,
}
interface CloseAlert{
    type:ActionTypes.CLOSE_ALERT,
}
interface PasswordShort{
    type:ActionTypes.PASSWORD_SHORT,
}
interface OtherError{
    type:ActionTypes.OTHER_ERROR,
}
export type Action  = |Logout|OtherError|PasswordShort|LoginSuccessAction|LoginError|PasswordMismatch|CloseAlert