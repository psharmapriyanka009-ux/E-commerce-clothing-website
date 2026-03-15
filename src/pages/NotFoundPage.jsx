import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container page-shell">
      <div className="empty-state">
        <p className="eyebrow">404</p>
        <h1>That page is off the runway.</h1>
        <Link className="button button-dark" to="/">
          Return home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
