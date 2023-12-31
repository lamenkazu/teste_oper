import { useState } from "react";
import { useFirebaseAuth } from "@/context/authContext";
import dayjs from "dayjs";

import { CustomButton } from ".";
import { updateComment } from "@/utils/firebase/firestore";
import { CommentProps, NewAnsType } from "@/types";

const SendAnswer = ({ comment }: CommentProps) => {
  const user = useFirebaseAuth();

  const [answer, setAnswer] = useState("");

  /*Caso tenha usuário logado, e caso o comentário não esteja vazio, 
    um comentário é adicionado à lista de respostas do comentário. */
  const handleAnswer = () => {
    if (user) {
      if (answer.length !== 0) {
        const commentData = { ...comment };

        const answerData: NewAnsType = {
          id: comment.answers.length.toString(),
          commentId: comment.id,
          email: user.email,
          comment: answer,
          postId: comment.postId,
          createdAt: dayjs().format("DD-MM-YYYY HH:mm:ss"),
          likes: [],
        };

        commentData.answers.push(answerData);
        updateComment(commentData);

      } else alert("Você não pode postar um comentario vazio");
      
    } else alert("Você precisa de uma conta para deixar um comentário");
    
  };

  return (
    <div id="discover" className="mt-12 padding-x padding-y max-width">
      <div className="flex justify-center items-center mt-8">
        <input
          className="w-[1000px] p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none"
          type="text"
          name="comment"
          placeholder="Responda a este comentário"
          required
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      </div>

      <div className="flex justify-center items-center mt-3">
        <CustomButton
          title="Enviar Comentario"
          containerStyles="mt-3 text-white rounded-md bg-primary-blue min-w-[130px]"
          handleClick={handleAnswer}
        />
      </div>
    </div>
  );
};

export default SendAnswer;
