import './Outcome.scss'

const outcomes = [
  'Du triffst Tool-Entscheidungen mit Klarheit.',
  'Datenschutz ist kein Bauchgefühl mehr.',
  'Dein Setup fühlt sich stabil statt fragil an.',
  'Sensible Daten sind strukturiert und nachvollziehbar organisiert.',
  'Du kannst wachsen – ohne dein System neu erfinden zu müssen.'
]

export default function Outcome() {
  return (
    <section className="outcome" aria-labelledby="outcome-title">
      <div className="outcome__inner">
        <header className="outcome__header">
          <h2 id="outcome-title">Nach unserer Zusammenarbeit …</h2>
        </header>

        <div className="outcome__list">
          {outcomes.map((text, index) => (
            <p key={index} className="outcome__item">
              {text}
            </p>
          ))}
        </div>

        <div className="outcome__cta">
          <a href="#contact" className="outcome__button">
            Unverbindliches Erstgespräch vereinbaren
          </a>
        </div>
      </div>
    </section>
  )
}
