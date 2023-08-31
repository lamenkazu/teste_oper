//Componentes são Client Side
"use client";

import Image from "next/image"
import { MouseEventHandler } from "react";

interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

const CustomButton = ({title, containerStyles, handleClick, btnType = "button"}:CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className="flex-1">
            {title}
        </span>

    </button>
  )
}

export default CustomButton