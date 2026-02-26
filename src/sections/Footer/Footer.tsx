import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <h2 id="footer-title" className="footer__srOnly">
        Footer
      </h2>

      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo" aria-label="Clearwise">
              <strong>C</strong>
              <em>learwise</em>
            </div>
            <p className="footer__tagline">
              DSGVO-sensible Digital-Infrastruktur für Coaches & Therapeuten.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer Navigation">
            <a href="#about">Über mich</a>
            <a href="#process">Ablauf</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Kontakt</a>
          </nav>

          <div className="footer__cta">
            <p className="footer__ctaText">Bereit für ein sauberes Setup?</p>
            <a className="footer__button" href="#contact">
              Erstgespräch buchen
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <small className="footer__copy">
            © {new Date().getFullYear()} Clearwise. Alle Rechte vorbehalten.
          </small>

          <div className="footer__legal">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
