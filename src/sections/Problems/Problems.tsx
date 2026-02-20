import './Problems.scss'

export default function Problems() {
  return (
    <section className="problems" id="about">
      <div className="problems__inner">
        <h2>Die häufigsten DSGVO-Fallen in Online-Praxen</h2>
        <p>
          Oft sind es nicht die großen Dinge – sondern kleine Tool-Entscheidungen und unsaubere
          Workflows, die Stress (und Risiko) erzeugen.
        </p>

        <div className="problems__cards">
          <article className="problems__card">
            <h3>Tool-Chaos</h3>
            <p>
              Newsletter, Kalender, Cloud, Video – alles irgendwie zusammengewürfelt. Am Ende ist
              unklar, wo sensible Daten liegen und wer Zugriff hat.
            </p>
          </article>

          <article className="problems__card">
            <h3>Unsichere Datenflüsse</h3>
            <p>
              Gesundheits-/Klientendaten werden über E-Mail, Formulare oder Notizen geteilt, ohne
              klare Trennung von Marketing und vertraulichen Informationen.
            </p>
          </article>

          <article className="problems__card">
            <h3>Unsicherheit im Alltag</h3>
            <p>
              „Bin ich compliant?“ – Wenn Prozesse, Zugriff & Löschung nicht klar sind, bleibt das
              Thema im Hinterkopf und kostet Energie.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
