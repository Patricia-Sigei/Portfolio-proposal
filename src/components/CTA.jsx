import { site } from '../config/site'
import { waLink } from '../utils/links'
import '../styles/cta.css'

/* The ONE action on the page. Every "Work with me" uses this. */
export default function CTA() {
  return (
    <a className="cta" href={waLink} target="_blank" rel="noopener noreferrer">
      {site.ctaLabel}
    </a>
  )
}
