import {addDoc, collection, getFirestore, query, getDocs, where, QuerySnapshot, onSnapshot} from 'firebase/firestore'
import { app } from './firebase'
import { useFirebaseAuth } from '@/context/authContext'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'

const firestoreDb = getFirestore(app)

interface NewCommentType{
    email: string | null, 
    comment: string,
    postId: string,
}

interface CommentWithId extends NewCommentType {
    id: string;
  }

const addComment = async (newComment: NewCommentType) => {

    const postId = newComment.postId.toString()

    const user = getAuth(app)

    await addDoc(collection(firestoreDb, `post/${postId}/comments/`), newComment)
    
}

const getComments = (postId: string) => {



}

export{
    firestoreDb,
    addComment,
    getComments
}