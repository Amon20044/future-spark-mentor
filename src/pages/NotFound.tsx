import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [count, setCount] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    let timer;
    if (isRedirecting && count > 0) {
      timer = setTimeout(() => setCount(count - 1), 1000);
    } else if (isRedirecting && count === 0) {
      window.location.href = "/";
    }
    return () => clearTimeout(timer);
  }, [count, isRedirecting]);

  const startRedirect = () => setIsRedirecting(true);
  const cancelRedirect = () => {
    setIsRedirecting(false);
    setCount(5);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="text-8xl font-extrabold text-blue-500">404</div>
            <div className="absolute -top-3 -right-6">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Error
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Page Not Found</h1>
        
        <p className="text-gray-600 mb-6 text-center">
          We couldn't find the page you're looking for at <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">{location.pathname}</span>
        </p>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Search className="text-gray-400" size={20} />
            <span className="text-gray-500">The page might have been moved or deleted</span>
          </div>

          <div className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <Home size={18} className="mr-2" />
              Return to Homepage
            </a>
            
            <button 
              onClick={isRedirecting ? cancelRedirect : startRedirect}
              className="flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <RefreshCw size={18} className="mr-2" />
              {isRedirecting ? `Redirecting in ${count}s... (Cancel)` : "Auto-redirect to Homepage"}
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 text-center">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;