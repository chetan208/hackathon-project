import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 
                          flex items-center justify-center text-white font-bold text-lg shadow">
            H
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-gray-900">
              Hospital Queue
            </h1>
            <p className="text-xs text-gray-500">
              Smart Patient Flow
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-gray-700 
                       hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 text-sm font-semibold text-white 
                       bg-gradient-to-r from-blue-600 to-cyan-500
                       rounded-full shadow hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
