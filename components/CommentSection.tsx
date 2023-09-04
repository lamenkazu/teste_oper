import { useEffect, useState } from "react";
import { SendComment } from ".";
import { firestoreDb } from "@/utils/firebase/firestore";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Comment } from "@/components";
import { NewCommentType, PostIdProps } from "@/types";

const CommentSection = ({ postId }: PostIdProps) => {
  const [comments, setComments] = useState<NewCommentType[]>([]);

  //Código de Requisição dos comentários foi feito aqui porquê obtive alguns erros ao tentar fazer no local apropriado.
  //TODO mudar o local da requisição para /utils/firestore.ts
  useEffect(() => {
    const q = query(collection(firestoreDb, `post/${postId}/comments/`));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let commentsArr: NewCommentType[] = [];

      QuerySnapshot.forEach((doc) => {
        commentsArr.push({ ...doc.data(), id: doc.id } as NewCommentType);
      });

      setComments(commentsArr);
    });

    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <section>
      <SendComment postId={postId} />

      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentSection;
