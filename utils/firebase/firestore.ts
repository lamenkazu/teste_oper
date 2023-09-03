import {addDoc, collection, getFirestore, doc, getDoc, getDocs, where, QuerySnapshot, onSnapshot, updateDoc} from 'firebase/firestore'
import { app } from './firebase'
import { useFirebaseAuth } from '@/context/authContext'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { NewAnsType } from '@/components/SendAnswer'
import { NewCommentType } from '@/components/CommentSection'
import { AnswerWithId } from '@/components/AnswerSection'

const firestoreDb = getFirestore(app)

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

const updateAnswer = async(answer: AnswerWithId) => {

    const commentRef = doc(firestoreDb, `post/${answer.postId}/comments/${answer.commentId}`)

    const snapshot = await getDoc(commentRef);

    if(snapshot.exists()){
        const commentData = snapshot.data();

        const updatedAnswers = [...commentData.answers]
        
        updatedAnswers.map(ans => {
            if(ans.id === answer.id){
                ans.likes = answer.likes
            }
        })

        console.log(updatedAnswers)

        await updateDoc(commentRef, {
            answers: updatedAnswers,
        })
        
        

    }

}


export{
    firestoreDb,
    addComment,
    updateComment,
    updateAnswer
}