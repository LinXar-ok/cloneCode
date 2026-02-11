
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">LiteTax</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Benefits</a>
            <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#purchase" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
