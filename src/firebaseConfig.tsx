import firebase from 'firebase'
import { toast } from './toast'

 const firebaseConfig = {
    apiKey: "AIzaSyDH73Rgo-sqLrsCmEogCZYz5qRO901vwqw",
    authDomain: "scorecricket-31a1e.firebaseapp.com",
    databaseURL: "https://scorecricket-31a1e.firebaseio.com",
    projectId: "scorecricket-31a1e",
    storageBucket: "scorecricket-31a1e.appspot.com",
    messagingSenderId: "424934935247",
    appId: "1:424934935247:web:727417709f3605062b05ba",
    measurementId: "G-KLKXJM9ZCP",
    
}
//initialize firebase
firebase.initializeApp(firebaseConfig)

export async function loginUser(username: string, password: string){
    //authenticate with firebase
    //if present, show dashboard
    //if not, show error

    const email = `${username}@gmail.com`

    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)

        console.log(res)
        return true
    }
    catch(error){
        toast(error.message, 4000)
        return false
    }
}

export async function registerUser(username : string, password: string){
    const email = `${username}@gmail.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(res)
        return true
    }catch(error){
        console.log(error)
        toast(error.message, 4000)
        return false
    }
}

export default firebase;