// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed

const NotFoundPage = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className="text-black dark:text-white"
    >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
