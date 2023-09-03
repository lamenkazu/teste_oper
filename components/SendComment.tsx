import {useState} from 'react'
import { CustomButton } from '.'
import { useFirebaseAuth } from '@/context/authContext'
import { addComment } from '@/utils/firebase/firestore'
import dayjs from 'dayjs'
import { NewAnsType } from './SendAnswer'


export interface NewCommentType{
    id?: string,
    email: string | null, 
    comment: string,
    postId: string,
    createdAt: string,
    likes: string[],
    answers: NewAnsType[],
}

interface PostIdProps {
  postId: string;
}

const SendComment = ({ postId }: PostIdProps) => {

    const [comment, setComment] = useState("")

    const user = useFirebaseAuth();

    const handleComment = () => {
        if(user){
            if(comment.length !== 0){

                const commentData: NewCommentType = {
                    email: user.email,
                    comment: comment,
                    postId: postId,
                    createdAt: dayjs().format('DD-MM-YYYY HH:mm:ss'),
                    likes: [],
                    answers: []
                };

                console.log(commentData)

                addComment(commentData)
                
                setComment('')
                

            }else{
                alert("Você não pode postar um comentario vazio")
            }
            
        }else{
            alert("Você precisa de uma conta para deixar um comentário")
        }
    }


  return (
    <div id="discover" className="mt-12 padding-x padding-y max-width">


        <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
                Comentários
            </h1>
        </div>
    

        <div className="flex justify-center items-center mt-8">
            <input 
                className='w-[1000px] p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none' 
                type="text" name='comment' placeholder='Deixe seu comentário sobre esta notícia' required 
                onChange={(e) => {setComment(e.target.value)}}
            />
        </div>

        <div className="flex justify-center items-center mt-3">
            <CustomButton 
                    title="Enviar Comentario"
                    containerStyles="mt-3 text-white rounded-md bg-primary-blue min-w-[130px]"
                    handleClick={handleComment}
            />
        </div>
    </div>
    
  )
}

export default SendComment