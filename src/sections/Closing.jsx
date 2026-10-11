import { site } from '../config/site'
import CTA from '../components/CTA'
import '../styles/closing.css'

export default function Closing() {
  return (
    <section className="closing">
      <div className="wrap closing-inner">
        <h2>{site.closingTitle}</h2>
        <p>{site.closingText}</p>
        <CTA />
      </div>
    </section>
  )
}
