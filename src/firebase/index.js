// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword ,createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {getFirestore, doc , getDoc, setDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'
import { userHandle } from "../utils";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

onAuthStateChanged( auth, async (user) => {
    if(user) {
        const dbUser = await getDoc(doc(db, 'users', user.uid))
        let data = {
            uid: user.uid,
            fullName: user.fullName,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data()
        }


        userHandle(data)
    }else{
        userHandle(false)
    }
})

export const login =  async(email, password) => {
    try {
        return await signInWithEmailAndPassword(auth,email,password)
        
    } catch (error) {
        toast.error(error.message)
    }
}

export const logout = async() => {
    try {
        await signOut(auth)
    } catch (error) {
        toast.error(error.code)
    }
}

export const signup = async({ fullName, telOrMail, username, password}) => {
    try {
        
        const user = await getDoc(doc(db, 'usernames', username))

        if(user.exists()){
            toast.error(`${username} already exist`)
        }else{

        const response = await createUserWithEmailAndPassword(auth, telOrMail, password)

        await setDoc(doc(db, 'usernames',username),{
            user_id: response.user.uid
        })

            

        await setDoc(doc(db, "users", response.user.uid), {
            fullName,
            username,
            followers: [],
            following: [],
            notifications: []
          })


        await updateProfile(auth.currentUser, {
            displayName: fullName
        })

        return response.user

        }
        
    } catch (error) {
        toast.error(error.code)
    }
}