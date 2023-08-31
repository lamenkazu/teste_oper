"use client";

import Image from "next/image"
import { CustomButton } from "."

const Hero = () => {

    const handleScroll = () => {}


  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Encontre suas Notícias Falsas com responsividade.
            </h1>
            <p className="hero__subtitle">
                Deixe seu comentário e interaja com outras pessoas sobre novidades desleais.
            </p>

            <CustomButton
                title="Checar Últimas Noticias"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/fakenews_side.png" alt="hero" fill className="object-contain"  />
                <div className="hero__image-overlay"/>
            </div>

            
        </div>

    </div>
  )
}

export default Hero