
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="font-playfair text-6xl font-light text-gray-900 mb-6">404</h1>
        <p className="font-inter text-xl text-gray-600 mb-8">
          This page has vanished into the void
        </p>
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-8 py-3 font-inter font-medium hover:bg-rebellious-red transition-all duration-300 transform hover:scale-105"
        >
          Return to Collection
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
