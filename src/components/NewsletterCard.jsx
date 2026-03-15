function NewsletterCard() {
  return (
    <div className="newsletter-card">
      <div>
        <p className="eyebrow">Stay in the loop</p>
        <h2>Receive new collection drops, styling edits, and exclusive launch access.</h2>
      </div>
      <form className="newsletter-form">
        <input aria-label="Email address" type="email" placeholder="Email address" />
        <button className="button button-dark" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterCard
