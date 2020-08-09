import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, USER_AUTH, LOGOUT } from './actionType';
import axios from 'axios'
export const fetchUserRequest=(payload)=>({
    type: FETCH_USER_REQUEST,
    payload
})
export const fetchUserSuccess=(payload)=>({
    type: FETCH_USER_SUCCESS,
    payload
})
export const fetchUserFailure=(payload)=>({
    type: FETCH_USER_FAILURE,
    payload
})
export const userLoginAuth=(payload)=>({
    type: USER_AUTH,
    payload
})
export const logout=(payload)=>({
    type: LOGOUT,
    payload
})

export const userAuth=query=>dispatch=>{
    dispatch(fetchUserRequest())
    return (
        axios.post("http://localhost:8080/auth/login",{      
            password: query.password,
            username: query.username,         
    }).then(loginRes=>{
        // console.log(loginRes)
        return dispatch(fetchUserSuccess(loginRes))
    }
        )
    
    )
}