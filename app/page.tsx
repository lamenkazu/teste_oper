"use client";
import { Footer, Hero, Navbar, NewsCard } from "@/components";
import { UI, useUiState } from "@/context/UIStateContext";
import { fetchNews } from "@/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const { uiState, setUiState } = useUiState();

  const [isDataEmpty, setisDataEmpty] = useState(false);

  const [someNews, setsomeNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allNews = await fetchNews();

        const newsSlice = allNews.slice(0, 10); //Seleciona apenas 10 notícias do banco de dados

        const dataEmpty = !Array.isArray(allNews) || allNews.length < 1 || !allNews;

        //Verificações de possíveis erro nos dados
        setisDataEmpty(dataEmpty);

        setsomeNews(newsSlice); //Define quais são as 10 notícias selecionadas da API.

        setUiState(UI.Home); //Define o UIState para Home quando está nessa página

        console.log(uiState);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setUiState]);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />

        <div id="discover" className="mt-12 padding-x padding-y max-width">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Catalogo de Notícias</h1>
            <p>Explore as notícias que lhe interessarem.</p>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__news-wrapper">
                {someNews?.map((news, index) => (
                  <NewsCard key={index} news={news} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl">
                Sem Resultados... Erro de conexão.
              </h2>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
