import './Process.scss'

type Step = {
  num: string
  title: string
  desc: string
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Analyse & Risikoklarheit',
    desc: 'Tool-Landschaft, Datenflüsse und sensible Berührungspunkte (Art. 9) sichtbar machen.'
  },
  {
    num: '02',
    title: 'Architektur & Struktur',
    desc: 'Klare Trennung, Rollen/Zugriffe, Tool-Auswahl und sichere Kommunikationswege definieren.'
  },
  {
    num: '03',
    title: 'Technische Umsetzung',
    desc: 'Setup, Konfiguration und bei Bedarf Migration – sauber, nachvollziehbar, praxistauglich.'
  },
  {
    num: '04',
    title: 'Ruhe & Skalierbarkeit',
    desc: 'Playbook + Leitlinien für neue Tools, Automationen sowie Auskunft/Löschung im Alltag.'
  }
]

export default function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process__inner">
        <header className="process__header">
          <h2 id="process-title">So entsteht deine sichere Digital-Architektur</h2>
          <p>Strukturiert. DSGVO-sensibel. Zukunftsfähig.</p>
        </header>

        <div className="process__flow" role="list" aria-label="4-Schritte Prozess">
          {steps.map((s, i) => (
            <article
              key={s.num}
              className={`process__step process__step--${i + 1}`}
              role="listitem"
            >
              <div className="process__num" aria-hidden="true">
                {s.num}
              </div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__desc">{s.desc}</p>
            </article>
          ))}

          <div className="process__center" aria-hidden="true">
            <span>Dein ruhiges, sauberes Setup</span>
          </div>
        </div>
      </div>
    </section>
  )
}
