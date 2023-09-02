"use client";
import { CustomFilter, Footer, Hero, Navbar, NewsCard, SearchBar } from '@/components'
import { UI, useUiState } from '@/context/UIStateContext';
import { fetchNews } from '@/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { UiStateProvider } from '@/context/UIStateContext'


export default function Home() {

  const { uiState, setUiState } = useUiState();

  const [isDataEmpty, setisDataEmpty] = useState(false)

  const [someNews, setsomeNews] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNews = await fetchNews();

        const newsSlice = allNews.slice(0, 10);


        //Verificações de possíveis erro nos dados
        setisDataEmpty(!Array.isArray(allNews) || allNews.length < 1 || !allNews) 
        
        setsomeNews(newsSlice);


        setUiState(UI.Home);

        console.log(uiState)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setUiState]);

  

 

  setUiState(UI.Home)

  return (
    <>
      <Navbar/>
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

    <Footer/>


    </>
    
  )
}
