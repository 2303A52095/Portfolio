import { useEffect, useState } from 'react'

const getPreferredTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem('theme')

  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('theme', nextTheme)
  }

  return { theme, toggleTheme }
}
