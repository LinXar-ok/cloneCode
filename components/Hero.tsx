
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Stop Overpaying the IRS. <span className="gradient-text">Keep Your Profits.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              The LiteTax Blueprint is the definitive guide for entrepreneurs to navigate deductions, credits, and strategy without the expensive CPA fees.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <a
                href="#purchase"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1"
              >
                Get the Book — $49
              </a>
              <a
                href="#benefits"
                className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
              >
                See What's Inside
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={`https://picsum.photos/seed/${i + 10}/100/100`}
                    alt="User"
                  />
                ))}
              </div>
              <span>Joined by 2,400+ smart tax-savers</span>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl lg:max-w-md overflow-hidden bg-slate-100 p-8 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 shadow-inner flex flex-col p-8 text-white relative">
                 <div className="absolute top-0 right-0 p-4">
                    <div className="bg-yellow-400 text-blue-900 font-black text-xs px-2 py-1 rounded">NEW 2024 EDITION</div>
                 </div>
                 <div className="mt-auto">
                    <h2 className="text-3xl font-black leading-tight uppercase tracking-tighter">LiteTax<br/>Blueprint</h2>
                    <div className="h-1 w-12 bg-white my-4"></div>
                    <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Mastering the tax code for profit</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
