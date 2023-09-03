"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CustomButton, Footer, Navbar } from "@/components";
import { UI, useUiState } from "@/context/UIStateContext";
import { signIn } from "@/utils/firebase/auth";

export default function Sign() {
  const { uiState, setUiState } = useUiState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    setUiState(UI.SignIn); //Se estiver nessa pagina define o UIState para SignIn
  }, [uiState]);

  const handleSignIn = (e: any) => {
    e.preventDefault();

    signIn({ email, password }); //Faz a chamada para o SignIn no Firebase enviando email e senha

    router.push("/");
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="news-card mt-32 mb-10 w-[400px]">
            <form onSubmit={handleSignIn}>
              <h4 className="mb-3 font-extrabold">Sign In</h4>
              <input
                className="w-full p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none"
                type="email"
                name="email"
                placeholder="Seu Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="w-full mt-3 p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none"
                type="password"
                name="password"
                placeholder="Sua senha"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="flex justify-center items-center">
                <CustomButton
                  title={"Sign In"}
                  btnType="submit"
                  containerStyles="mt-3 text-white rounded-full bg-primary-blue min-w-[130px]"
                />
              </div>

              <div className="mt-6 flex justify-center items-center">
                <Link className="hover:text-blue-700" href={"/signup"}>
                  Nao possuo login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
