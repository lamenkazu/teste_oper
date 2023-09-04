import { MouseEventHandler } from "react";
import firebase from "firebase/auth";
import {ReactNode} from 'react';
import { UI } from '@/context/UIStateContext';


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

//Tipagem de uma resposta
interface NewAnsType {
    id: string;
    commentId: string | undefined;
    email: string | null;
    comment: string;
    postId: string;
    createdAt: string;
    likes: string[];
  }
  
  //Tipagem de um comment recebido pelo componente pai
interface CommentProps {
    comment: NewCommentType;
  }

  //Tipagem do parâmetro transmitodo pela pagina
interface PostIdProps {
    postId: string;
  }
  
//Tipagem de um Novo Comentário
interface NewCommentType {
id?: string;
email: string | null;
comment: string;
postId: string;
createdAt: string;
likes: string[];
answers: NewAnsType[];
}

//Tipagem das Propriedades do Botão Customisável da aplicação.
interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

//Tipagem de uma Notícia vinda da News API
interface NewsProps {
    news: {
      id: string;
      title: string;
      content: string;
      author: string;
      published: string;
      coverImage: string;
      tags: string[];
    };
}

type User = firebase.User | null;
type ContextState = { user: User };
type AuthProviderProps = {
  children: ReactNode;
};

type UiStateContextType = {
    uiState: UI;
    setUiState: (uiState: UI) => void;
};

type UiStateProviderProps = {
    children: ReactNode;
};

interface AuthProps {
    email: string;
    password: string;
}


export type {
    ParamProps,
    ArticleData,
    NewAnsType,
    CommentProps,
    PostIdProps,
    NewCommentType,
    CustomButtonProps,
    NewsProps,
    User,
    ContextState,
    AuthProviderProps,
    UiStateContextType,
    UiStateProviderProps,
    AuthProps
}


