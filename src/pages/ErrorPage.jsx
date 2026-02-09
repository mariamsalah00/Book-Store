import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">
          Something went wrong
        </p>
        <p className="text-gray-500 mt-2">
          {error?.statusText ||
            error?.message ||
            "An unexpected error occurred."}
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
