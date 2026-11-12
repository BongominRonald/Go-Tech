import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="big">404</div>
      <h1 className="title" style={{ fontSize: '1.8rem' }}>Page Not Found</h1>
      <p className="lead" style={{ maxWidth: 440 }}>
        The link you followed may be broken or the page may have been moved.
      </p>
      <Link to="/" className="btn btn-solid" style={{ marginTop: 12 }}>
        <ArrowLeft size={16} /> Return to Home
      </Link>
    </div>
  )
}
