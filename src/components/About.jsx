import OfferCard from './OfferCard'
import PlaceholderImg from './PlaceholderImg'
import './About.css'

const OFFERS = [
  { icon: '🏠', label: 'Licensed In-Home Daycare' },
  { icon: '📚', label: 'Weekly Curriculum & Lessons' },
  { icon: '🎨', label: 'Monthly Learning Activities' },
  { icon: '🍽️', label: 'Meals & Snacks Provided' },
  { icon: '🔄', label: 'Drop-In Care Available' },
  { icon: '✅', label: 'CAPS Accepted' },
]

const PHOTOS = [
  { label: 'Photo: Classroom / Learning Area',  aspectRatio: '4/3' },
  { label: 'Photo: House Exterior',              aspectRatio: '4/3' },
  { label: 'Photo: Playground / Outdoor Area',  aspectRatio: '4/3' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* Section header */}
        <div className="about__header">
          <span className="about__eyebrow">Why Choose Us</span>
          <h2 className="about__heading">What We Offer</h2>
          <p className="about__intro">
            At Bright Little Butterflies, we believe a home can be the best classroom.
            Every day is filled with learning, laughter, and love in a safe, nurturing environment
            designed to help your little one grow and thrive.
          </p>
        </div>

        {/* Two-column: offer cards + experienced care */}
        <div className="about__columns">

          {/* Left — offer cards grid */}
          <div className="about__offers">
            {OFFERS.map((offer) => (
              <OfferCard key={offer.label} icon={offer.icon} label={offer.label} />
            ))}
          </div>

          {/* Right — experienced care highlights */}
          <div className="about__experience">
            <div className="experience-card">
              <h3 className="experience-card__heading">Experienced Care</h3>
              <ul className="experience-card__list">
                <li>
                  <span className="exp-icon">🪖</span>
                  Childcare experience at three military bases
                </li>
                <li>
                  <span className="exp-icon">🎓</span>
                  Pursuing a degree in Early Childhood Education
                </li>
                <li>
                  <span className="exp-icon">💜</span>
                  Military spouse and mother of four
                </li>
                <li>
                  <span className="exp-icon">🛡️</span>
                  Safe, loving, and nurturing environment
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Photo gallery */}
        <div className="about__gallery-wrap">
          <h3 className="about__gallery-heading">Our Space</h3>
          <div className="about__gallery">
            {PHOTOS.map((photo) => (
              <PlaceholderImg
                key={photo.label}
                label={photo.label}
                aspectRatio={photo.aspectRatio}
                size="lg"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
