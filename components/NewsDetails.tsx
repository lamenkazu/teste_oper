"use client"
import React from 'react'
import { NewsProps } from './NewsCard';

interface NewsDetailsProps{
    isOpen: boolean;
    closeModal: () => void;
    news: {
        id: string;
        title: string;
        content: string;
        author: string;
        published: string,
        coverImage: string;
        tags: string[]
    };
}

const NewsDetails = ({isOpen, closeModal, news}: NewsDetailsProps) => {
  return (
    <div>NewsDetails</div>
  )
}

export default NewsDetails