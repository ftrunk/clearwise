import './ProcessTimeline.scss'

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

export default function ProcessTimeline() {
  return (
    <section className="timeline" id="process" aria-labelledby="process-title">
      <div className="timeline__inner">
        <header className="timeline__header">
          <h2 id="process-title">So entsteht dein sicheres Digital-Setup</h2>
          <p>Strukturiert. DSGVO-sensibel. Zukunftsfähig.</p>
        </header>

        <div className="timeline__wrapper">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={step.num}
                data-step={step.num}
                className={`timeline__item ${
                  isLeft ? 'timeline__item--left' : 'timeline__item--right'
                }`}
              >
                <div className="timeline__content">
                  {/* <div className="timeline__num">{step.num}</div> */}
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
