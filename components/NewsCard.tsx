"use client";
import {useState} from 'react';
import Image from 'next/image';
import { CustomButton, NewsDetails } from '.';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface NewsProps{
  news: {
    id: string;
    title: string;
    content: string;
    author: string;
    published: string,
    coverImage: string;
    tags: string[]
  }
}

//`article/${id}`

const NewCard = ({news} : NewsProps) => {

  const {id, title, content, author, published, coverImage, tags} = news

  const formatedDate = dayjs(published).format('DD/MM/YYYY HH:mm')

  const [isOpen, setisOpen] = useState(false)

  return (

    <Link href={`article/${id}`}>

      <div key={id} className='news-card group'>

      <div className="relative w-full h-40 my-3">
        <Image src={coverImage} alt='News Cover Image' 
              fill priority className=" rounded-3xl object-fill" />
      </div>

      {/* Title */}
      <div className="news-card__content">
        <h2 className='news-card__content-title'>
          {title}
        </h2>
      </div>

      {/* Author Name*/}
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          {author} 
        </span>
        
      </p>

      <span className=' text-[12px] font-extralight'>
        {formatedDate}
      </span>


      {/* Preview Content */}
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray-800">
          <div className="flex justify-center items-center gap-14">
              <p>
                {content.substring(40,2)}...
              </p>
          </div>
        </div>
      </div>

      {/* News tags */}
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray-800">
          <div className="flex justify-center items-center gap-14">
            {tags.map((tag, index) => (
              <p className='hover:text-green-600 text-blue-400' key={`${id}-${tag}-${index}`}>
                <span className='self-start text-[12px]'>
                  {tag}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <NewsDetails isOpen={isOpen} closeModal={() => setisOpen(false)} news={news} />

      </div>
      
    </Link>
    
  )
}

export default NewCard