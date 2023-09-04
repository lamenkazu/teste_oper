"use client";
import { UiStateContextType, UiStateProviderProps } from "@/types";
import { useState, createContext, useContext, ReactNode } from "react";

export enum UI {
  Home,
  Article,
  SignIn,
  SignUp,
}

const UiStateContext = createContext<UiStateContextType | undefined>(undefined);

export function UiStateProvider({ children }: UiStateProviderProps) {
  const [uiState, setUiState] = useState<UI>(UI.Home);

  return (
    <UiStateContext.Provider value={{ uiState, setUiState }}>
      {children}
    </UiStateContext.Provider>
  );
}

export function useUiState() {
  const context = useContext(UiStateContext);

  if (context === undefined) {
    throw new Error("useUiState deve ser usado com um UiStateProvider");
  }

  return context;
}
