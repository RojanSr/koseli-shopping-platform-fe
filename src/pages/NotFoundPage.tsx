import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
      <p>404 Not Found</p>
      <Link to="/">Return to Home</Link>
    </div>
  )
}

export default NotFoundPage
