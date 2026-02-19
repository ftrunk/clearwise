import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <header className="hero__nav">
        <div className="hero__container">
          <div className="hero__logo">
            <strong>C</strong>
            <em>learwise</em>
          </div>

          <nav className="hero__menu">
            <a href="#about">Über mich</a>
            <a href="#process">Ablauf</a>
            <a href="#contact" className="hero__cta">
              Termin vereinbaren
            </a>
          </nav>
        </div>
      </header>

      <div className="hero__content hero__container">
        <div className="hero__left">
          <h1>
            Privacy-first Digital Infrastructure
            <br />
            für Therapeuten & Coaches
          </h1>

          <p>
            Ich helfe dir, eine sichere und klare digitale Infrastruktur aufzubauen – ohne
            DSGVO-Stress und ohne Tool-Chaos.
          </p>
        </div>

        <div className="hero__right">
          <div className="hero__card">
            <div className="hero__avatar" />
            <h3>Ferdi</h3>
            <p>Apotheker • Medizininformatik</p>
          </div>
        </div>
      </div>
    </section>
  )
}
