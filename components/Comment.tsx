import Image from "next/image";
import { useEffect, useState } from "react";
import { useFirebaseAuth } from "@/context/authContext";
import { updateComment } from "@/utils/firebase/firestore";
import { SendAnswer, AnswerSection } from ".";
import { NewCommentType } from "@/types";

const Comment = ({ comment }: { comment: NewCommentType }) => {
  const user = useFirebaseAuth();

  const [like, setLike] = useState(false);

  const liked = like === true ? "/liked.png" : "/like.png";

  useEffect(() => {
    if (user) {
      const updatedLikes = [...comment.likes];

      const userIndex = updatedLikes.indexOf(user.uid); //cria cópia do vetor para atualiziar

      if (userIndex === -1) {
        setLike(false);
      } else {
        setLike(true);
      }
    }
  }, []);

  const [showAnswer, setShowAnswer] = useState(false);

  const handleLike = () => {
    if (user) {
      const updatedLikes = [...comment.likes];

      const userIndex = updatedLikes.indexOf(user.uid); //cria cópia do vetor para atualiziar

      if (userIndex === -1) {
        updatedLikes.push(user.uid); //insere se não estiver no vetor
      } else {
        updatedLikes.splice(userIndex, 1); //remove se ja estiver no vetor
      }

      setLike(!like);
      comment.likes = updatedLikes;

      updateComment(comment);
    }
  };

  return (
    <section className="mt-3 flex flex-col justify-center items-center">
      <div className="w-[1000px] p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none">
        <p className="text-[12px] text-red-800">{comment.id?.substring(8, 0)}</p>

        <div className="flex flex-col justify-center items-center" />

        <div className="flex items-baseline">
          <p>{comment.email}:</p>

          <p className="p-5 text-[14.5px]">{comment.comment}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[12px]">{comment.createdAt}</p>

          <div className="flex items-center">
            <p
              className="mr-3 hover:text-blue-800 
              hover:underline hover:cursor-pointer"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              Responder
            </p>

            <Image
              className="hover:cursor-pointer"
              src={liked}
              alt="Like Icon"
              width={35}
              height={35}
              onClick={handleLike}
            />
            <p>{comment.likes.length}</p>
          </div>
        </div>

        {showAnswer === true ? <SendAnswer comment={comment} /> : <></>}

        {comment.answers.map((ans, index) => (
          <AnswerSection key={index} answer={ans} />
        ))}
      </div>
    </section>
  );
};

export default Comment;
