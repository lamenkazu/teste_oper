"use client";

import { CustomButton, Navbar, Footer } from "@/components";

import { useEffect, useState } from "react";
import { UI, useUiState } from "@/context/UIStateContext";
import { signUp } from "@/utils/firebase/auth";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const { setUiState } = useUiState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  useEffect(() => {
    setUiState(UI.SignUp); //Se estiver nessa pagina define o UIState para SignUp
  }, [setUiState]);

  const router = useRouter();

  const handleSignUp = (e: any) => {
    e.preventDefault(); 
    if (password === confirmPass) {
      signUp({ email, password }); //Faz a chamada para o o SignUp no Firebase enviando email e senha

      router.push("/sign");
    } else alert("Senhas não coincidem, cadastro não efetuado.");
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="news-card mt-32 mb-10 w-[400px]">
            <form onSubmit={handleSignUp}>
              <h4 className="mb-3 font-extrabold">Sign Up</h4>

              <input
                className="w-full p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                className="w-full mt-3 p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none"
                type="password"
                name="password"
                placeholder="Senha"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <input
                className="w-full mt-3 p-3 rounded-md bg-opacity-20 border-2 border-primary-variant resize-none"
                type="password"
                name="password"
                placeholder="Confirmar Senha"
                required
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
              />

              <div className="flex justify-center items-center">
                <CustomButton
                  title={"Sign Up"}
                  btnType="submit"
                  containerStyles="mt-3 text-white rounded-full bg-primary-blue min-w-[130px]"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
