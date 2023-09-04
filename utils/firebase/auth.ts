import { AuthProps } from "@/types";
import { app } from "./firebase";
import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth'



const auth = getAuth(app);

const signIn = async ({ email, password }: AuthProps) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {}
};

const signUp = async ({ email, password }: AuthProps) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const logOut = async () => {
  await signOut(auth);
};

export { auth, signIn, signUp, logOut };
