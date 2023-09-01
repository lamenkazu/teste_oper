"use client"

import { GetServerSideProps } from "next"

interface ArticleProps{
  params:{
    id: string
  }
}

export default function Article({params}:ArticleProps){

    return(
        <main className="overflow-hidden">


      <div id="discover" className="mt-36 padding-x padding-y max-width">

      <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Catalogo de Notícias {params.id}
          </h1>
        </div>

      </div>

    </main>
        
    )
}
