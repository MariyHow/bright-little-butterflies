import PlaceholderImg from './PlaceholderImg'
import ThemeToggle from './ThemeToggle'
import './Hero.css'

export default function Hero({ isDark, onToggleTheme }) {
  return (
    <section id="home" className="hero">
      {/* Decorative butterflies */}
      <span className="hero__deco hero__deco--tl" aria-hidden="true">🦋s</span>
      <span className="hero__deco hero__deco--tr" aria-hidden="true">🦋</span>
      <span className="hero__deco hero__deco--bl" aria-hidden="true">✨</span>
      <span className="hero__deco hero__deco--br" aria-hidden="true">🌟</span>

      <div className="hero__inner">
        {/* Left: text content */}
        <div className="hero__content">
          {/* Enrollment badge */}
          <div className="hero__badge">
            <span>🎉 Now Enrolling — Openings Available!</span>
          </div>

          <h1 className="hero__heading">
            A Safe, Loving &amp; Bright Place to Grow
          </h1>

          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <p className="hero__sub">
            Ages 2 &amp; Up &nbsp;·&nbsp; Monday – Friday &nbsp;·&nbsp; Warner Robins, GA
          </p>

          <p className="hero__desc">
            Welcome to <strong>Bright Little Butterflies LLC</strong> — a licensed, warm, 
            home-based daycare where every child is nurtured, inspired, and celebrated 
            every single day.
          </p>

          <div className="hero__actions">
            <a href="#about" className="btn btn--primary">Learn More</a>
            <a href="#contact" className="btn btn--outline">Contact Us</a>
          </div>

          {/* Quick trust signals */}
          <div className="hero__trust">
            <span>✅ Licensed</span>
            <span>🍽️ Meals Included</span>
            <span>📚 Weekly Curriculum</span>
            <span>💳 CAPS Accepted</span>
          </div>
        </div>

        {/* Right: hero image placeholder */}
        <div className="hero__image-wrap">
          <PlaceholderImg
            label="Hero Image: Classroom or Kids Playing"
            aspectRatio="4/3"
            size="lg"
          />
        </div>
      </div>
    </section>
  )
}
