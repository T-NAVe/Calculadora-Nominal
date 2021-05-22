import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/configFirebase'

export const emailAndPasswordlogin = (email, password)=>{
    return (dispatch)=>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({user})=>{
            console.log(user)
            dispatch(login(user.uid, user.displayName))
        }).catch(err=>console.log(err))
    }
}

export const googleLogin = ()=>{
    return (dispatch)=>{
        firebase.auth()
        .signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            dispatch(login(user.uid, user.displayName))
        }).catch(err=>console.log(err))
    }
}

export const register = (email, password, username)=>{
    return (dispatch)=>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(async ({user})=>{
            await user.updateProfile({
                displayName:username
            })
            dispatch(login(user.uid,user.displayName))
        }).catch(err=>console.log(err))
    }
}

export const logout = ()=>{
    return (dispatch)=>{
        firebase.auth().signOut().then(res=>{
            //console.log(res)
            dispatch({
                type: types.logout
            })
        }).catch(err=>console.log(err))

    }
}

export const login = (uid,displayName)=>{
    return {
        type:types.login,
        payload:{
            uid,
            displayName
        }
    }
}


