import { site } from '../config/site'
import '../styles/clients.css'

export default function Clients() {
  return (
    <section className="clients">
      <div className="wrap">
        <h2 className="small-h">{site.clientsTitle}</h2>
        <ul className="logos">
          {site.clients.map((c) => (
            <li key={c.name}>
              {c.logo ? <img src={c.logo} alt={c.name} /> : <span>{c.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
