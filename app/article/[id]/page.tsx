"use client";

import { fetchArticle } from "@/utils";
import Image from "next/image";
import dayjs from "dayjs";
import { CommentSection, Navbar, Footer } from "@/components";
import { useEffect, useState } from "react";
import { UI, useUiState } from "@/context/UIStateContext";

/**Propriedades do parâmetro recebido pela URL */
interface ParamProps {
  params: {
    id: string;
  };
}

/**Tipagem de um Artigo recebido pela News API */
interface ArticleData {
  id: string;
  title: string;
  content: string;
  author: string;
  published: string;
  coverImage: string;
  tags: string[];
}

export default function Article({ params }: ParamProps) {
  const { setUiState } = useUiState();

  const [formatedDate, setformatedDate] = useState("");

  const [article, setArticle] = useState<ArticleData>();

  //Analisa constantemente os dados relacionados ao artigo para atualiza-los constantemente.
  useEffect(() => {
    const fetchData = async () => {
      try {
        setUiState(UI.Article); //Se estiver nessa pagina define o UIState para Article.
        setArticle(await fetchArticle(params.id)); //Recebe os artigos da News API
        setformatedDate(dayjs(article?.published).format("DD/MM/YYYY HH:mm")); //Define a data recebida do banco de dados para formatação brasileira
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setUiState]);

  return (
    <>
      <Navbar /> {/* Navbar da pagina*/}
      <main className="overflow-hidden">
        <div id="discover" className="mt-36 padding-x padding-y max-width">
          {/* Tituli do Artigo*/}
          <div className="flex justify-center items-center">
            <div className="home__text-container">
              <h1 className="text-4xl font-extrabold">{article?.title}</h1>
            </div>
          </div>

          {/* Imagem do artigo*/}
          <div className="flex justify-center items-center">
            <div className="relative w-[600px] h-96 my-3">
              {article && (
                <Image
                  src={article.coverImage}
                  alt="News Cover Image"
                  fill
                  className=" rounded-3xl object-fill"
                />
              )}
            </div>
          </div>

          {/* Author Name And Date*/}
          <div className="flex justify-center items-center">
            <p className="flex mt-6 text-[32px] font-extrabold">
              <span className="self-start text-[14px] font-semibold">
                {article?.author}
              </span>

              <span className="mt-1 ml-3 text-[12px] font-extralight">
                {formatedDate}
              </span>
            </p>
          </div>

          {/* Conteúdo do Artigo*/}
          <p className="flex mt-6 ">{article?.content}</p>

          {/* Tags do Artigo*/}
          <div className="flex justify-center items-center gap-14">
            {article?.tags.map((tag) => (
              <p
                key={tag}
                className="mt-6 flex flex-row bg-slate-400 p-1 rounded-sm hover:bg-emerald-500 hover:text-white"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* Seção de Comentários do Artigo*/}
        <CommentSection postId={params.id.toString()} />
      </main>
      <Footer /> {/* Footer da pagina*/}
    </>
  );
}
