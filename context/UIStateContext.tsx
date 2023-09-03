"use client";
import { useState, createContext, useContext, ReactNode } from "react";

export enum UI {
  Home,
  Article,
  SignIn,
  SignUp,
}

type UiStateContextType = {
  uiState: UI;
  setUiState: (uiState: UI) => void;
};

type UiStateProviderProps = {
  children: ReactNode;
};

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
