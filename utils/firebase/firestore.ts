import {addDoc, collection, getFirestore, doc, getDoc, getDocs, where, QuerySnapshot, onSnapshot, updateDoc} from 'firebase/firestore'
import { app } from './firebase'
import { NewAnsType, NewCommentType } from '@/types'


const firestoreDb = getFirestore(app)


const addComment = async (newComment: NewCommentType) => {

    const postId = newComment.postId.toString()

    await addDoc(collection(firestoreDb, `post/${postId}/comments/`), newComment)
    
}

const updateComment = async (newComment: NewCommentType) => {

    const commentRef = doc(firestoreDb, `post/${newComment.postId}/comments/${newComment.id}`)

    await updateDoc(commentRef, {
        ...newComment
    })

}

const updateAnswer = async(answer: NewAnsType) => {

    const commentRef = doc(firestoreDb, `post/${answer.postId}/comments/${answer.commentId}`)

    const snapshot = await getDoc(commentRef);

    if(snapshot.exists()){
        const commentData = snapshot.data();

        const updatedAnswers = [...commentData.answers] //cria cópia das respostas de um comentário
        
        updatedAnswers.map(ans => {
            if(ans.id === answer.id){
                ans.likes = answer.likes //atualiza os likes de uma resposta à um comentário
            }
        })

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