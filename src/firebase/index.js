// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
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

onAuthStateChanged( auth, user => {
    userHandle(user || false)
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