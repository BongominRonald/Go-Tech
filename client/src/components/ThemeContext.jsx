import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  isLight: true,
})

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  // Default to 'light' as requested: "I NEED IT IN WHITE AS DEFUALT VIA A TOGGLE BUTTON"
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('gotech_theme')
      if (saved === 'dark' || saved === 'light') return saved
    } catch {
      /* ignore */
    }
    return 'light'
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('gotech_theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLight: theme === 'light' }}>
      {children}
    </ThemeContext.Provider>
  )
}
