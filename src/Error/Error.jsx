import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-content">
        <p className="error-code">404</p>

        <h1>Oops! Page Not Found</h1>

        <p className="error-message">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="home-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;