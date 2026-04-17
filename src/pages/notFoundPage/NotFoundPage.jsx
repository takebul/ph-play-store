import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-20 space-y-2">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-700">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
