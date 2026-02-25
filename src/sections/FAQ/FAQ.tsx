import './FAQ.scss'

type FAQItem = {
  q: string
  a: string
}

const items: FAQItem[] = [
  {
    q: 'Machst du Rechtsberatung?',
    a: 'Nein. Ich helfe dir technisch und strukturell (Tool-Auswahl, Datenflüsse, Berechtigungen, sichere Kommunikation). Für rechtliche Einordnung kannst du parallel juristischen Rat einholen.'
  },
  {
    q: 'Für wen ist das Angebot gedacht?',
    a: 'Für Coaches, Therapeut:innen und Health-Professionals, die online arbeiten und eine sichere, klare Infrastruktur ohne Tool-Chaos wollen.'
  },
  {
    q: 'Wie läuft das Erstgespräch ab?',
    a: 'Wir klären kurz dein Setup, Ziele und potenzielle Risiken. Danach bekommst du eine klare Empfehlung, ob und wie wir weitermachen.'
  },
  {
    q: 'Was sind typische Ergebnisse nach der Zusammenarbeit?',
    a: 'Weniger Unsicherheit im Alltag, klarere Datenflüsse, sauber geregelte Rollen/Zugriffe, passende Tools und ein Setup, das auch bei Wachstum stabil bleibt.'
  },
  {
    q: 'Wie lange dauert das meistens?',
    a: 'Kommt auf Komplexität und Tool-Landschaft an. In der Regel gibt es nach dem Audit schnell Klarheit – Umsetzung kann je nach Umfang in Etappen passieren.'
  }
]

export default function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__inner">
        <header className="faq__header">
          <h2 id="faq-title">FAQ</h2>
          <p>Kurze Antworten auf die häufigsten Fragen.</p>
        </header>

        <div className="faq__panel">
          {items.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary className="faq__question">
                {item.q}
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
