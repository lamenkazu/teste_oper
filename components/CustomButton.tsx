//Componentes são Client Side
"use client";

import { MouseEventHandler } from "react";

//Tipagem das Propriedades do Botão Customisável da aplicação.
interface CustomButtonProps {
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
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
