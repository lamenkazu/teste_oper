"use client";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { UI, useUiState } from '@/context/UIStateContext';
import { auth } from "@/utils/firebase/auth";

const Navbar = () => {


  const { uiState, setUiState } = useUiState();

  return (
    <header className="w-full absolute z-10">

        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href='/' className="flex justify-center items-center">
                <Image src="/fakenews.png" alt="FakeNewsLogo" 
                        width={118} height={18}
                        className="object-contain"/>
            </Link>

            <Link href='/sign' >
              {
                (uiState === UI.SignIn || uiState === UI.SignUp || auth.currentUser) ? (
                  <></>
                ) : (   
                  <CustomButton 
                    title="SignIn" 
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                  />
                ) 
              }
              
            </Link>
        </nav>

    </header>
  )
}

export default Navbar