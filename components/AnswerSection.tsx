import Image from "next/image";
import { useState, useEffect } from "react";
import { useFirebaseAuth } from "@/context/authContext";
import { updateAnswer } from "@/utils/firebase/firestore";
import { NewAnsType } from "@/types";

const AnswerSection = ({ answer }: { answer: NewAnsType }) => {
  const user = useFirebaseAuth();

  const [like, setLike] = useState(false);
  const liked = like === true ? "/liked.png" : "/like.png";

  const handleLike = () => {
    if (user) {
      const updatedLikes = [...answer.likes];

      const userIndex = updatedLikes.indexOf(user.uid); //cria cópia do vetor para atualiziar

      if (userIndex === -1) {
        updatedLikes.push(user.uid); //insere se não estiver no vetor
      } else {
        updatedLikes.splice(userIndex, 1); //remove se ja estiver no vetor
      }

      //Atualiza os dados do comentario em caso de like ou deslike
      answer.likes = updatedLikes;
      updateAnswer(answer);
    }
  };

  useEffect(() => {
    if (user) {
      const updatedLikes = [...answer.likes];

      const userIndex = updatedLikes.indexOf(user.uid);

      //Para modificar o botao de Like visualmente se o usuário conectado for um dos usuários que deram like
      userIndex === -1 ? setLike(false) : setLike(true);
    }
  }, []);

  return (
    <section className="mt-3 flex flex-col justify-center items-center">
      <div className="w-[900px] p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none">
        <p className="text-[12px] text-red-800">{answer.id?.substring(8, 0)}</p>

        <div className="flex flex-col justify-center items-center"/>

        <div className="flex items-baseline">
          <p>{answer.email}:</p>

          <p className="p-5 text-[14.5px]">{answer.comment}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[12px]">{answer.createdAt}</p>

          <div className="flex items-center">
            <Image
              className="hover:cursor-pointer"
              src={liked}
              alt="Like Icon"
              width={35}
              height={35}
              onClick={handleLike}
            />
            <p>{answer.likes.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerSection;
