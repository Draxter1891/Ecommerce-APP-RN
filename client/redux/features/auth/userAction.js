import { server } from "@/redux/store";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

//LOGIN ACTION
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: 'loginRequest'
        })
        //hiting node login api request
        const { data } = await axios.post(`${server}/user/login`, { email, password },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        dispatch({
            type: 'loginSuccess',
            payload: data
        })
        await AsyncStorage.setItem("@auth", data?.token)
    } catch (error) {
        dispatch({
            type: 'loginFailed',
            //to get the exact message from catch block error we destructure it in the following way
            payload: error.response.data.message
        })
    }
}

//GET USERDATA ACTION
export const getUserData = () => async (dispatch) => {
    try {
        dispatch({
            type: 'getUserDataRequest'
        })
        //hiting node login api request
        const { data } = await axios.post(`${server}/user/profile`)
        dispatch({
            type: 'getUserDataSuccess',
            payload: data?.user
        })
    } catch (error) {
        dispatch({
            type: 'getUserDataFailed',
            payload: error.response.data.message
        })
    }
}


//REGISTER ACTION
export const register = (formData) => async (dispatch) => {
    try {
        dispatch({
            type: 'registerRequest',
        })
        //hit api register
        const { data } = await axios.post(`${server}/user/register`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: 'registerSuccess',
            payload: data.message
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: 'registerFailed',
            payload: error.response.data.message
        })
    }
}
//LOGOUT ACTION
export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: 'logoutRequest'
        })
        //hiting node login api request
        const { data } = await axios.get(`${server}/user/logout`)
        dispatch({
            type: 'logoutSuccess',
            payload: data?.message
        })
    } catch (error) {
        dispatch({
            type: 'logoutFailed',
            payload: error.response.data.message
        })
    }
}


