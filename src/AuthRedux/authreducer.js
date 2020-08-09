import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, USER_AUTH, LOGOUT } from './actionType';
import { loadData, saveData } from '../TodoRedux/localStorage';


const initState=({
    userData:  [],
    isAuth: loadData('isAuth')|| false,
    isLaoding: false,
})

const authreducer=(state=initState, {type, payload})=>{
        switch (type) {
            case FETCH_USER_REQUEST:
                return(
                    {
                    ...state,
                    isLaoding: true
                    }
                )
            case FETCH_USER_SUCCESS:
                saveData("isAuth", true)
                return(
                    {
                        ...state,
                        isAuth: true,
                        userData: payload,
                    }
                )
            case FETCH_USER_FAILURE:
                return(
                    {
                    ...state,
                    isLaoding: false,
                    }
                )
            case USER_AUTH:
                return(
                    {
                    ...state,
                    isAuth: true,
                    userData: payload,
                    }
                )
            case LOGOUT:
                return(
                    {
                    ...state,
                    isAuth: false,
                    userData: payload,
                    }
                )
            default:
                return state;
        }
}
export default authreducer;