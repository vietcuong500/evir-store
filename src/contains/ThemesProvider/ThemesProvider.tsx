"use client";
import { createContext, useContext } from "react";

const ThemeContext = createContext({} as any);

export default function ThemeProvider(props: any) {
  return (
    <ThemeContext.Provider value={{ ...props.value }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useThemeConfig = () => useContext(ThemeContext);
