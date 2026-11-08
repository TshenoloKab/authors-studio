import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="section__label">Page Not Found</span>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">The page you are looking for doesn't exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">Return Home</Link>
        </div>
      </div>
    </section>
  )
}