function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero muted-surface">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>We’re here to help with styling, orders, and product questions.</h1>
          <p className="page-intro">
            Reach out for support, collaboration inquiries, or guidance choosing your next premium staple.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container contact-grid">
          <article className="contact-card">
            <h3>Customer Care</h3>
            <p>support@luxethread.co</p>
            <p>Mon–Fri, 9:00 AM–6:00 PM</p>
          </article>
          <article className="contact-card">
            <h3>Studio</h3>
            <p>19 Mercer Street</p>
            <p>New York, NY 10013</p>
          </article>
          <article className="contact-card">
            <h3>Press & Partnerships</h3>
            <p>press@luxethread.co</p>
            <p>Available for curated collaborations.</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
