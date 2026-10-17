import './ThemeToggle.css'

/**
 * Theme toggle — orange butterfly (light) → purple (dark).
 * variant="hero" includes the press-here callout; variant="nav" is a compact toolbar ball.
 */
export default function ThemeToggle({ isDark, onToggle, variant = 'hero' }) {
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'
  const cue = isDark
    ? 'Press here for light mode'
    : 'Press here for dark mode'
  const hint = isDark ? 'Light' : 'Dark'

  if (variant === 'nav') {
    return (
      <button
        type="button"
        className={`theme-toggle-nav ${isDark ? 'theme-toggle-nav--dark' : 'theme-toggle-nav--light'}`}
        onClick={onToggle}
        aria-pressed={isDark}
        aria-label={label}
        title={`${label} — click here`}
      >
        <span className="theme-toggle-nav__butterfly" aria-hidden="true">🦋</span>
        <span className="theme-toggle-nav__hint">{hint}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`theme-toggle-wrap ${isDark ? 'theme-toggle-wrap--dark' : 'theme-toggle-wrap--light'}`}
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={label}
      title={`${label} — click here`}
    >
      <span
        className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
        aria-hidden="true"
      >
        <span className="theme-toggle__butterfly">🦋</span>
      </span>

      <span className="theme-toggle-cue">
        <span className="theme-toggle-cue__pointer" aria-hidden="true">
          <svg viewBox="0 0 48 36" width="40" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44 4 C28 6, 14 14, 10 28"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M4 22 L10 30 L18 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="theme-toggle-cue__text">{cue}</span>
      </span>
    </button>
  )
}
