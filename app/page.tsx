"use client";
import { CustomFilter, Hero, NewsCard, SearchBar } from '@/components'
import { fetchNews } from '@/utils'
import Image from 'next/image'

export default async function Home() {

  const allNews = await fetchNews()

  let someNews = []

  for(let i = 0; i < 10; i++){
    someNews.push(allNews[i])
  }

  //Verificações de possíveis erro nos dados
  const isDataEmpty = !Array.isArray(allNews) || allNews.length < 1 || !allNews; 

  return (
    <main className="overflow-hidden">
      <Hero/>


      <div id="discover" className="mt-12 padding-x padding-y max-width">



        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Catalogo de Notícias
          </h1>
          <p>Explore as notícias que lhe interessarem.</p>
        </div>



        <div className="home__filters">
          <div className="home__filter-container">
            <CustomFilter title="order"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__news-wrapper">
              {someNews?.map((news, index) => (
                <NewsCard key={index} news={news}/>
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl'>
              Sem Resultados... Erro de conexão.
            </h2>
          </div>
        )}




      </div>

    </main>
  )
}
