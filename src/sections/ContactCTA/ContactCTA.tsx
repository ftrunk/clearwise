import './ContactCTA.scss'

export default function ContactCTA() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <header className="contact__header">
          <h2 id="contact-title">Lass uns dein Setup strukturiert prüfen.</h2>
          <p>
            In einem kurzen Gespräch klären wir, wo Risiken liegen, welche Tools kritisch sind – und
            ob eine Zusammenarbeit sinnvoll ist.
          </p>
        </header>

        <div className="contact__details">
          <ul>
            <li>✓ 30 Minuten strukturierte Analyse</li>
            <li>✓ Erste Risiko-Einschätzung</li>
            <li>✓ Klare nächste Schritte</li>
          </ul>
        </div>

        <div className="contact__cta">
          <a
            href="https://dein-kalender-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__button"
          >
            Analysegespräch vereinbaren
          </a>
        </div>

        <p className="contact__note">Keine Rechtsberatung. Technische und strukturelle Analyse.</p>
      </div>
    </section>
  )
}
