import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeColors {
  primary: string;
  secondary: string;
}

export interface ThemeSettings {
  colors: ThemeColors;
  fontFamily: string;
  backgroundImage?: string;
}

const defaultTheme: ThemeSettings = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
  },
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
};

interface ThemeContextType {
  theme: ThemeSettings;
  updateTheme: (newTheme: Partial<ThemeSettings>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeSettings>(() => {
    const saved = localStorage.getItem('elephantTheme');
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('elephantTheme', JSON.stringify(theme));
    
    // Apply CSS variables
    document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.colors.secondary);
    document.documentElement.style.setProperty('--font-family', theme.fontFamily);
    
    if (theme.backgroundImage) {
      document.documentElement.style.setProperty('--background-image', `url(${theme.backgroundImage})`);
    } else {
      document.documentElement.style.removeProperty('--background-image');
    }
  }, [theme]);

  const updateTheme = (newTheme: Partial<ThemeSettings>) => {
    setTheme((prev) => ({
      ...prev,
      ...newTheme,
      colors: {
        ...prev.colors,
        ...(newTheme.colors || {}),
      },
    }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
