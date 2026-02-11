
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="text-lg font-bold text-slate-900">LiteTax</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Sale</a>
            <a href="#" className="hover:text-blue-600">Contact Support</a>
          </div>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} LiteTax Inc. All rights reserved.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          Disclaimer: LiteTax is not a law firm or a CPA firm. The tax guide is for informational purposes only and does not constitute professional tax advice. Consult with a qualified professional for your specific situation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
