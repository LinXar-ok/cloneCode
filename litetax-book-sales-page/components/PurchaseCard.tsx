
import React, { useState } from 'react';

const PurchaseCard: React.FC = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCheckout = () => {
    setIsRedirecting(true);
    // Simulate redirect to Stripe Checkout
    setTimeout(() => {
      // In a real app, you'd call window.location.href = stripeCheckoutUrl
      alert("Redirecting to Secure Stripe Checkout...");
      setIsRedirecting(false);
    }, 1500);
  };

  return (
    <section id="purchase" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                Digital Edition + PDF
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">LiteTax Blueprint 2024</h2>
              <p className="text-slate-400 text-lg mb-8">
                Get instant access to the guide that saved small businesses an average of $8,400 in their first year.
              </p>
              <ul className="space-y-4 mb-10">
                {['Instant Download', 'Life-time Updates', 'Audit Checklist Included', 'Deduction Worksheet'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-80 bg-white rounded-3xl p-8 flex flex-col items-center shadow-inner">
              <div className="text-slate-500 text-sm font-semibold mb-1 line-through">$129.00</div>
              <div className="text-5xl font-black text-slate-900 mb-2">$49</div>
              <p className="text-slate-500 text-xs mb-8">One-time payment. No subscription.</p>
              
              <button
                onClick={handleCheckout}
                disabled={isRedirecting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
                  isRedirecting ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-600/20'
                }`}
              >
                {isRedirecting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Securing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Buy via Stripe
                  </>
                )}
              </button>
              
              <div className="mt-6 flex items-center gap-4 opacity-50 grayscale">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-4" />
                <div className="h-4 w-px bg-slate-300"></div>
                <div className="flex gap-1">
                  <div className="w-6 h-4 bg-slate-200 rounded"></div>
                  <div className="w-6 h-4 bg-slate-200 rounded"></div>
                  <div className="w-6 h-4 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseCard;
