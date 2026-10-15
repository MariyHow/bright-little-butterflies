import PlaceholderImg from './PlaceholderImg'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        {/* Section header */}
        <div className="contact__header">
          <span className="contact__eyebrow">Get In Touch</span>
          <h2 className="contact__heading">Meet Us &amp; Contact</h2>
        </div>

        <div className="contact__body">

          {/* ---- LEFT: Bio ---- */}
          <div className="contact__bio">
            <div className="bio-photo">
              <PlaceholderImg
                label="Photo: Provider Shawanna"
                aspectRatio="1/1"
                size="md"
              />
            </div>

            <div className="bio-content">
              <h3 className="bio-name">
                Meet Shawanna
                {/* TODO: add last name after "Shawanna" */}
              </h3>
              <p className="bio-tagline">Owner &amp; Lead Caregiver · Bright Little Butterflies LLC</p>

              <p className="bio-text">
                Hi, I'm Shawanna — a proud military spouse, mother of four, and passionate
                early childhood educator. Having worked in childcare at three military bases,
                I know first-hand how much families depend on trusted, reliable care.
              </p>
              <p className="bio-text">
                I'm currently pursuing my degree in Early Childhood Education, and every day
                at Bright Little Butterflies I bring that knowledge to life. My goal is simple:
                <strong> every child deserves a safe, loving, and nurturing environment to
                grow and thrive.</strong>
              </p>

              <div className="bio-badges">
                <span>🪖 Military Spouse</span>
                <span>👩‍👧‍👦 Mother of Four</span>
                <span>🎓 ECE Student</span>
                <span>🛡️ Licensed Provider</span>
              </div>
            </div>
          </div>

          {/* ---- RIGHT: Contact info + form ---- */}
          <div className="contact__right">

            {/* Contact info */}
            <div className="contact-info">
              <h3 className="contact-info__heading">Contact Information</h3>
              <ul className="contact-info__list">
                <li>
                  <span className="ci-icon">📞</span>
                  <a href="tel:4788747150">(478) 874-7150</a>
                </li>
                <li>
                  <span className="ci-icon">✉️</span>
                  <a href="mailto:brightlittlebutterfliesdaycare@yahoo.com">
                    brightlittlebutterfliesdaycare@yahoo.com
                  </a>
                </li>
                <li>
                  <span className="ci-icon">📍</span>
                  <span>
                    Warner Robins, Georgia
                    {/* TODO: add street address here if desired */}
                  </span>
                </li>
                <li>
                  <span className="ci-icon">🕐</span>
                  <span>
                    Monday – Friday
                    {/* TODO: add hours e.g. " · 6:00 AM – 5:30 PM" */}
                  </span>
                </li>
                <li>
                  <span className="ci-icon">💳</span>
                  <span>CAPS Accepted &nbsp;·&nbsp; Drop-In Care Available</span>
                </li>
              </ul>
            </div>

            {/* Netlify contact form */}
            <div className="contact-form-wrap">
              <h3 className="contact-form-wrap__heading">Send Us a Message</h3>

              {/*
                Netlify Forms:
                - The "netlify" / data-netlify="true" attribute tells Netlify to handle submissions.
                - The hidden input is required so Netlify can match the form by name.
                - No backend needed — submissions appear in your Netlify dashboard.
              */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Parent / Guardian Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input
                      id="cf-phone"
                      type="tel"
                      name="phone"
                      placeholder="(478) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-email">Email Address</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-age">Child's Age</label>
                    <input
                      id="cf-age"
                      type="text"
                      name="child-age"
                      placeholder="e.g. 2 years old"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows="4"
                    placeholder="Tell us a little about your child and what you're looking for…"
                    required
                  />
                </div>

                <button type="submit" className="btn btn--primary form-submit">
                  Send Message 🦋
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
