import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white rounded">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <a
          href="/"
          className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
        >
          <FaHome className="mr-2" />
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
