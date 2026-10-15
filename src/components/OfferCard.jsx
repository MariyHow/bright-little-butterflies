import './OfferCard.css'

/**
 * OfferCard — single "What We Offer" item
 * Props:
 *  icon  — emoji string
 *  label — short text label
 */
export default function OfferCard({ icon, label }) {
  return (
    <div className="offer-card">
      <span className="offer-card__icon" aria-hidden="true">{icon}</span>
      <span className="offer-card__label">{label}</span>
    </div>
  )
}
