import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand block */}
        <div className="footer__brand">
          <p className="footer__name">
            🦋 <span className="logo-bright">Bright</span>{' '}
            <span className="logo-little">Little</span>{' '}
            <span className="logo-butterflies">Butterflies</span>{' '}
            <span className="footer__llc">LLC</span>
          </p>
          <p className="footer__tagline">A Safe, Loving &amp; Bright Place to Grow</p>
          <p className="footer__location">📍 Warner Robins, Georgia &nbsp;·&nbsp; Monday – Friday</p>
        </div>

        {/* Quick links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-heading">Quick Links</p>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Meet Us &amp; Contact</a></li>
          </ul>
        </nav>

        {/* Contact + social */}
        <div className="footer__contact">
          <p className="footer__nav-heading">Contact Us</p>
          <ul>
            <li>
              <a href="tel:4788747150">📞 (478) 874-7150</a>
            </li>
            <li>
              <a href="mailto:brightlittlebutterfliesdaycare@yahoo.com">
                ✉️ brightlittlebutterfliesdaycare@yahoo.com
              </a>
            </li>
            <li>
              {/* TODO: replace "#" with the real Facebook page URL once created */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__fb"
              >
                📘 Facebook Page
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {year} Bright Little Butterflies LLC. All rights reserved.</p>
        <p className="footer__disclaimer">
          Licensed Home Day Care &nbsp;·&nbsp; Warner Robins, GA &nbsp;·&nbsp; Ages 2 &amp; Up
        </p>
      </div>
    </footer>
  )
}
