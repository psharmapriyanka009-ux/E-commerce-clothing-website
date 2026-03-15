import SectionReveal from '../components/SectionReveal'

function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero dark-surface">
        <div className="container">
          <p className="eyebrow">About the Brand</p>
          <h1>Minimal, modern, and intentionally premium.</h1>
          <p className="page-intro">
            Luxe Thread Co. was created to make elevated fashion feel effortless, versatile, and
            relevant beyond a single season.
          </p>
        </div>
      </section>

      <SectionReveal className="section-space">
        <div className="container story-grid">
          <div>
            <p className="eyebrow">Our philosophy</p>
            <h2>We design around longevity, tactile quality, and confidence in motion.</h2>
          </div>
          <p>
            Our collections focus on premium essentials with precise tailoring, balanced silhouettes,
            and materials chosen for comfort and texture. Each piece is curated to fit seamlessly into
            a modern capsule wardrobe.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="section-space">
        <div className="container value-grid">
          <article className="value-card">
            <h3>Premium craftsmanship</h3>
            <p>Intentional construction, refined details, and materials that elevate every wear.</p>
          </article>
          <article className="value-card">
            <h3>Contemporary silhouettes</h3>
            <p>Modern cuts designed to move between work, travel, and evening settings.</p>
          </article>
          <article className="value-card">
            <h3>Effortless styling</h3>
            <p>Versatile pieces that build a wardrobe without visual clutter or over-design.</p>
          </article>
        </div>
      </SectionReveal>
    </div>
  )
}

export default AboutPage
