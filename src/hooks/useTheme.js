import { useState, useEffect, useCallback, useRef } from 'react'

const STORAGE_KEY = 'blb-theme'
/** Keep in sync with --theme-duration in global.css (ms) */
const THEME_DURATION_MS = 1600

function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  } catch {
    /* ignore */
  }
  return 'light'
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-theme')
      if (attr === 'dark' || attr === 'light') return attr
    }
    return getStoredTheme()
  })
  const animTimerRef = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  useEffect(() => {
    return () => {
      if (animTimerRef.current) clearTimeout(animTimerRef.current)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    root.classList.add('theme-animating')
    // Force a reflow so transitions are active before colors change
    void root.offsetWidth

    if (animTimerRef.current) clearTimeout(animTimerRef.current)
    animTimerRef.current = setTimeout(() => {
      root.classList.remove('theme-animating')
      animTimerRef.current = null
    }, THEME_DURATION_MS + 80)

    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      // Apply immediately so body/header/footer start fading together
      applyTheme(next)
      return next
    })
  }, [])

  return { theme, toggleTheme, isDark: theme === 'dark' }
}
