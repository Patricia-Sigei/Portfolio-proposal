import { site } from '../config/site'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.location}</span>
        <span className="handles">{site.handles.join('   ')}</span>
      </div>
    </footer>
  )
}
