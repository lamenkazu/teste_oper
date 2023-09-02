"use client"

import { fetchArticle } from "@/utils"
import Image from "next/image"
import dayjs from 'dayjs'
import { CommentSection, Navbar, Footer } from "@/components"
import { useEffect, useState } from "react"
import { UI, useUiState } from '@/context/UIStateContext';
import { auth } from "@/utils/firebase/auth"
import { useFirebaseAuth } from "@/context/authContext"

interface ParamProps{
  params:{
    id: string
  }
}

interface ArticleData{
  id: string;
  title: string;
  content: string;
  author: string;
  published: string;
  coverImage: string;
  tags: string[]
}

export default function Article({params}:ParamProps){

  const { uiState, setUiState } = useUiState();

  const [formatedDate, setformatedDate] = useState('')

  const [article, setArticle] = useState<ArticleData>()

  const user = useFirebaseAuth();
  
  console.log(user?.email)

  useEffect(() => {
    const fetchData = async () => {
      try{
        setUiState(UI.Article)
        setArticle(await fetchArticle(params.id))
        setformatedDate(dayjs(article?.published).format('DD/MM/YYYY HH:mm'))

        console.log(auth.currentUser)

      }catch (error) {
        console.error(error);
      }
    }

    fetchData()
    
  }, [setUiState])

  console.log(uiState)

    return(
      <>
      <Navbar/>
      <main className="overflow-hidden">

        <div id="discover" className="mt-36 padding-x padding-y max-width">

        <div className="flex justify-center items-center">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              {article?.title}
            </h1>
          </div>
        </div>

          <div className="flex justify-center items-center">
            <div className="relative w-[600px] h-96 my-3">
              {
                article && 
                <Image src={article?.coverImage} alt='News Cover Image' 
                  fill className=" rounded-3xl object-fill" />
              }
              
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            {/* Author Name*/}
            <p className='flex mt-6 text-[32px] font-extrabold'>
              <span className='self-start text-[14px] font-semibold'>
                {article?.author} 
              </span>
              <span className='mt-1 ml-3 text-[12px] font-extralight'>
              {formatedDate}
            </span>
            </p>
            
          </div>

          <p className='flex mt-6 '>
              {article?.content}
            </p>


          <div className="flex justify-center items-center gap-14">
          {
            article?.tags.map((tag) => (
              <p key={tag} className="mt-6 flex flex-row bg-slate-400 p-1 rounded-sm hover:bg-emerald-500 hover:text-white">
                {tag}
              </p>
            ))
          }
          </div>
          

        </div>

        <CommentSection />

        </main> 

        <Footer/>
      </>
      
    )
}
