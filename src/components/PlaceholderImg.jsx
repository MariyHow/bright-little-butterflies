import './PlaceholderImg.css'

/**
 * PlaceholderImg — a clearly labeled image slot.
 * Replace with a real <img> tag once photos are ready.
 *
 * Props:
 *  label       — descriptive label shown inside the box
 *  aspectRatio — CSS aspect-ratio value e.g. "4/3", "1/1", "16/9"
 *  size        — "sm" | "md" | "lg" (controls max-width)
 */
export default function PlaceholderImg({ label = 'Photo Coming Soon', aspectRatio = '4/3', size = 'md' }) {
  return (
    <div
      className={`placeholder-img placeholder-img--${size}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className="placeholder-img__inner">
        <span className="placeholder-img__icon">📷</span>
        <span className="placeholder-img__label">{label}</span>
        <span className="placeholder-img__hint">Replace with real photo</span>
      </div>
    </div>
  )
}
