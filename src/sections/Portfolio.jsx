import { site } from '../config/site'
import WorkItem from '../components/WorkItem'
import '../styles/portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="wrap">
        <h2>{site.portfolioTitle}</h2>
        <div className="work-grid">
          {site.work.map((item, i) => (
            <WorkItem item={item} index={i} key={item.title + i} />
          ))}
        </div>
      </div>
    </section>
  )
}
