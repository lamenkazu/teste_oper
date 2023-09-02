import {app} from './firebase'
import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

interface AuthProps{
    email: string;
    password: string;
}

const auth = getAuth(app)

const signIn = async ({email, password} : AuthProps) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error){}
}

const signUp = async ({email, password}: AuthProps) => {
    try{
        await createUserWithEmailAndPassword(auth, email, password);
    }catch(error){}
}

const logOut = () => {
    signOut(auth)
}


export{
    auth,
    signIn,
    signUp,
    logOut
}