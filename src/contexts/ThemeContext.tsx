"use client";
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  const applyTheme = useCallback((themeToApply: Theme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(themeToApply);
    setThemeState(themeToApply);
    localStorage.setItem('katech-theme', themeToApply);
  }, []);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('katech-theme') as Theme) || 'light';
    applyTheme(savedTheme);
  }, [applyTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    applyTheme(newTheme);
  }, [applyTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};