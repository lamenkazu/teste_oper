import {addDoc, collection, getFirestore, doc, query, getDocs, where, QuerySnapshot, onSnapshot, updateDoc} from 'firebase/firestore'
import { app } from './firebase'
import { useFirebaseAuth } from '@/context/authContext'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'

const firestoreDb = getFirestore(app)

interface NewCommentType{
    email: string | null, 
  comment: string,
  postId: string,
  createdAt: string,
  likes: string[],
}

interface CommentWithId extends NewCommentType {
    id: string;
  }

const addComment = async (newComment: NewCommentType) => {

    const postId = newComment.postId.toString()

    await addDoc(collection(firestoreDb, `post/${postId}/comments/`), newComment)
    
}

const updateComment = async (newComment: CommentWithId) => {

    const commentRef = doc(firestoreDb, `post/${newComment.postId}/comments/${newComment.id}`)

    await updateDoc(commentRef, {
        ...newComment
    })

}

export{
    firestoreDb,
    addComment,
    updateComment
}