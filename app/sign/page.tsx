"use client";

import { CustomButton, Footer, Navbar } from '@/components';
import {useRef} from 'react'
import Link from 'next/link';

import { useEffect } from "react"
import { UI, useUiState } from '@/context/UIStateContext';


export default function Sign(){


    const { uiState, setUiState } = useUiState();


    useEffect(() => {
        setUiState(UI.SignIn)
    })

    console.log(uiState)

    return(
        <>
        <Navbar/>

        <main className="overflow-hidden">

        <div className="flex justify-center items-center">

            <div className='news-card mt-32 mb-10 w-[400px]'>
                
            <form onSubmit={() => {}}>
                <h4 className='mb-3'>Sign In</h4>
                <input 
                    className='w-full p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none text-white' 
                    type="email" name='email' placeholder='Seu Email' required />
                <input 
                    className='w-full mt-3 p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none text-white' 
                    type="password" name='password' placeholder='Sua senha' required />

                <div className="flex justify-center items-center">
                    <CustomButton 
                        title={'Sign In'}
                        btnType="submit"
                        containerStyles="mt-3 text-white rounded-full bg-primary-blue min-w-[130px]"
                    />
                </div>

                <div className="mt-6 flex justify-center items-center">
                    <Link className='hover:text-blue-700' href={'/signup'}>Nao possuo login</Link>
                </div>


            </form>
                
            </div>

        </div>
        


        </main>

        <Footer/>
        </>
    )
}