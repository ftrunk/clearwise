import './Problems.scss'

export default function Problems() {
  return (
    <section className="problems" id="problems" aria-labelledby="problems-title">
      <div className="problems__inner">
        <header className="problems__header">
          <h2 id="problems-title">Warum viele Online-Praxen angreifbar sind</h2>
          <p>
            Nicht wegen „der DSGVO“, sondern wegen Tool-Entscheidungen und fehlender Struktur. Die
            gute Nachricht: Das lässt sich ruhig und sauber lösen.
          </p>
        </header>

        <div className="problems__rows">
          <article className="problems__row">
            <div className="problems__num" aria-hidden="true">
              01
            </div>

            <div className="problems__main">
              <h3>Unbewusst angreifbar</h3>
              <p>
                Schon kleine Dinge (Tools, Einstellungen, Datenübertragung) können dich unnötig
                verwundbar machen — ohne dass du es merkst.
              </p>
            </div>

            <ul className="problems__bullets">
              <li>US-Tools / Datenübertragung ohne saubere Grundlage</li>
              <li>Fehlende oder unklare AV-Verträge</li>
              <li>Sensible Daten (Art. 9) laufen durch „Standard“-Workflows</li>
            </ul>
          </article>

          <article className="problems__row">
            <div className="problems__num" aria-hidden="true">
              02
            </div>

            <div className="problems__main">
              <h3>Tool-Landschaft ohne Architektur</h3>
              <p>
                Tools wachsen organisch. Marketing, Kalender, Video, Cloud — aber niemand plant die
                Datenflüsse. Das erzeugt Chaos.
              </p>
            </div>

            <ul className="problems__bullets">
              <li>Marketing & vertrauliche Daten vermischen sich</li>
              <li>Zu viele Zugriffe / Berechtigungen sind unklar</li>
              <li>Formulare sammeln mehr als nötig</li>
            </ul>
          </article>

          <article className="problems__row">
            <div className="problems__num" aria-hidden="true">
              03
            </div>

            <div className="problems__main">
              <h3>Dauerhafte Unsicherheit im Alltag</h3>
              <p>
                Wenn Prozesse (Zugriff, Aufbewahrung, Löschung) nicht klar sind, bleibt das Thema im
                Kopf — und blockiert Skalierung.
              </p>
            </div>

            <ul className="problems__bullets">
              <li>Du zögerst bei Automationen & neuen Tools</li>
              <li>„Was passiert bei Auskunft / Löschung?“ ist unklar</li>
              <li>Du willst Ruhe — aber das Setup fühlt sich fragil an</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
