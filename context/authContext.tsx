"use client";
import { createContext, useContext, useState, useEffect, ReactNode} from 'react';

import firebase from "firebase/auth";
import { auth } from "@/utils/firebase/auth";

type User = firebase.User | null;
type ContextState = { user: User };
type AuthProviderProps = {
  children: ReactNode;
};

const FirebaseAuthContext = createContext<ContextState | undefined>(undefined);

export function FirebaseAuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const value = { user };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}

export function useFirebaseAuth() {
  const context = useContext(FirebaseAuthContext);
  if (context === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider"
    );
  }
  return context.user;
}
