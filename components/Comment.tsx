import Image from 'next/image'
import { CommentWithId } from './CommentSection'

const Comment = ({ comment }: { comment: CommentWithId }) => {

  console.log(comment)
  return (
    <section className='mt-3 flex flex-col justify-center items-center'>
      <div className='w-[1000px] p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none'>
        <p className='text-[12px] text-red-800'>
          {comment.id.substring(8,0)}
        </p>

        <div className='flex flex-col justify-center items-center'>         
          
        </div>

          <div className='flex items-baseline'>
          <p >
          {comment.email}: 
          </p>

          <p className='p-5 text-[14.5px]'>{comment.comment}</p>
          </div>


        <div className='flex justify-between'>
          <p className='text-[12px]'>
             {comment.createdAt}
          </p>

          <p>
          

          </p>

          <div className='flex items-center'>
          <Image src='/like.png' width={35} height={35} alt='Like Icon' onClick={() => {}}/>
          <p>
            {comment.likes.length}
          </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Comment