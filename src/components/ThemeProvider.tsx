'use client'
import * as React from 'react';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps as NextThemesProviderProps } from "next-themes";

// Extend the NextThemesProviderProps to include children
interface ThemeProviderProps extends NextThemesProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
