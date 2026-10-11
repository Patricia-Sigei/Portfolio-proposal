import { site } from '../config/site'
import '../styles/testimonials.css'

// Hidden until you set showTestimonials: true in src/config/site.js
export default function Testimonials() {
  if (!site.showTestimonials) return null
  return (
    <section className="testimonials">
      <div className="wrap">
        <h2>{site.testimonialsTitle}</h2>
        <div className="quotes">
          {site.testimonials.map((t, i) => (
            <blockquote key={i}>
              <p>{t.quote}</p>
              <footer>
                {t.who}, {t.company}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
