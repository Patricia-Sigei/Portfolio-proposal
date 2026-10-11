import { site } from '../config/site'
import '../styles/offer.css'

export default function Offer() {
  return (
    <section className="offer">
      <div className="wrap offer-grid">
        <div>
          <h2>{site.offerTitle}</h2>
          <ul className="services">
            {site.services.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{site.valueTitle}</h2>
          <ul className="values">
            {site.values.map((v) => (
              <li key={v.big}>
                <span className="big">{v.big}</span>
                <span className="small">{v.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
