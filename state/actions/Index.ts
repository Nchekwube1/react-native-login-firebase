import {ActionTypes} from "../actionTypes"
interface LoginSuccessAction{
    type:ActionTypes.LOGIN_SUCCESS,
payload:{
    id:string,
    emaill:string
}

}
interface LoginError{
    type:ActionTypes.LOGIN_ERROR,
    payload:{
        errorText:string
    }
}
interface PasswordMismatch{
    type:ActionTypes.PASSWORD_MISMATCH,
}
interface CloseAlert{
    type:ActionTypes.CLOSE_ALERT,
}
export type Action  = LoginSuccessAction|LoginError|PasswordMismatch|CloseAlert