import { Building, User, Search, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-wellmatch-dark text-xl font-semibold">WellMatch</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/profile" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Link to="/jobs" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <Search size={20} />
              <span>Find Jobs</span>
            </Link>
            <Link to="/companies" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <Building size={20} />
              <span>Companies</span>
            </Link>
            <Link to="/messages" className="flex items-center space-x-1 text-wellmatch-dark hover:text-wellmatch-primary transition-colors">
              <MessageSquare size={20} />
              <span>Messages</span>
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button - implement later */}
            <button className="text-wellmatch-dark">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;