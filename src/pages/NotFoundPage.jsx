import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-lg text-gray-600">
        the page you’re looking for doesn’t exist
      </p>

      <Link
        to="/"
        className="mt-6 rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        go back home
      </Link>
    </main>
  );
};

export default NotFoundPage;
