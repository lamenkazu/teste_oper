import {useEffect, useState} from 'react'
import { SendComment } from '.'
import { firestoreDb } from '@/utils/firebase/firestore';
import {collection,  query, onSnapshot} from 'firebase/firestore'
import { Comment } from '@/components'


interface PostIdProps {
  postId: string;
}

export interface NewCommentType{
  email: string | null, 
  comment: string,
  postId: string,
  createdAt: string,
  likes: string[],
}

export interface CommentWithId extends NewCommentType {
  id: string;
}

const CommentSection = ({ postId }: PostIdProps) => {

  const [comments, setComments] = useState<CommentWithId[]>([]);

  useEffect(() => {
    const q = query(collection(firestoreDb, `post/${postId}/comments/`));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let commentsArr: CommentWithId[] = [];

      QuerySnapshot.forEach((doc) => {
        commentsArr.push({ ...doc.data(), id: doc.id } as CommentWithId);
      });


      setComments(commentsArr);
    });


    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <section>
      <SendComment postId={postId}/>

      {
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment}/>
        ))
      }

    </section>
  )
}

export default CommentSection